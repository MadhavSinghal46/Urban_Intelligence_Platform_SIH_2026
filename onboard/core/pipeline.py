import cv2

from camera.source import VideoSource
from detection.detector import PotholeDetector
from detection.tracker import PotholeTracker
from events.generator import EventGenerator
from gps.source import GPSSource
from storage.database import EventDatabase
from uploader.uploader import EventUploader


class OnboardPipeline:

    def __init__(
        self,
        device_id: str,
        video_path: str,
        model_path: str,
        server_url: str,
        confidence: float = 0.40,
        max_frames: int = 800,
    ):
        self.device_id = device_id
        self.max_frames = max_frames

        self.source = VideoSource(video_path)

        self.detector = PotholeDetector(
            model_path=model_path,
            confidence=confidence,
        )

        self.tracker = PotholeTracker(
            iou_threshold=0.3,
            max_missed_frames=10,
        )

        self.event_generator = EventGenerator(device_id)
        self.database = EventDatabase()
        self.uploader = EventUploader(server_url)
        self.gps = GPSSource()

    def run(self):

        print("Opening video...")

        self.source.open()

        print("Video opened successfully.")
        print("Pothole detector loaded.")
        print("Onboard pipeline started.")
        print("Press Q to stop.")

        frame_count = 0
        detection_count = 0

        try:
            while frame_count < self.max_frames:

                success, frame = self.source.read()

                if not success:
                    print("End of video.")
                    break

                frame_count += 1

                self.gps.update()

                detections = self.detector.detect(frame)
                detection_count += len(detections)

                tracked_detections = self.tracker.update(
                    detections
                )

                if detections:
                    print(
                        f"Frame {frame_count}: "
                        f"{len(detections)} raw -> "
                        f"{len(tracked_detections)} tracked"
                    )

                for detection, track_id, is_new_track in tracked_detections:

                    if is_new_track:

                        location = self.gps.get_location()

                        event = self.event_generator.create_event(
                            detection,
                            latitude=location["latitude"],
                            longitude=location["longitude"],
                        )

                        # Always save locally first.
                        self.database.save_event(event)

                        # Try to synchronize pending events.


                        print(
                            f"NEW POTHOLE EVENT | "
                            f"Track: {track_id} | "
                            f"Confidence: "
                            f"{detection['confidence']:.2f}"
                        )

                        print(event.to_dict())

                    # Draw detection
                    x1, y1, x2, y2 = map(
                        int,
                        detection["bbox"]
                    )

                    confidence = detection["confidence"]

                    cv2.rectangle(
                        frame,
                        (x1, y1),
                        (x2, y2),
                        (0, 255, 0),
                        2,
                    )

                    label = f"Pothole {confidence:.2f}"

                    cv2.putText(
                        frame,
                        label,
                        (x1, max(y1 - 10, 20)),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.6,
                        (0, 255, 0),
                        2,
                    )
                    
                # Try to upload pending events periodically.
                if frame_count % 30 == 0:
                    self.uploader.upload_pending_events(
                        self.database
                    )

                cv2.imshow(
                    "Onboard Pothole Detection",
                    frame
                )

                if cv2.waitKey(1) & 0xFF == ord("q"):
                    print("Stopped by user.")
                    break

        finally:

            self.source.release()
            self.database.close()
            cv2.destroyAllWindows()

        print()
        print(f"Frames processed: {frame_count}")
        print(f"Total detections: {detection_count}")
        print("Onboard pipeline stopped.")