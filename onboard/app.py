import cv2

from camera.source import VideoSource
from detection.detector import PotholeDetector
from events.generator import EventGenerator
from detection.tracker import PotholeTracker
from storage.database import EventDatabase
from uploader.uploader import EventUploader
from gps.source import GPSSource

DEVICE_ID = "BUS_001"
VIDEO_PATH = "test_data/road_test.mp4"
MODEL_PATH = "models/pothole_best3.pt"

CONFIDENCE = 0.40



def main():
    source = VideoSource(VIDEO_PATH)

    detector = PotholeDetector(
        model_path=MODEL_PATH,
        confidence=CONFIDENCE
    )

    tracker = PotholeTracker(
        iou_threshold=0.3,
        max_missed_frames=10
    )

    event_generator = EventGenerator(DEVICE_ID)
    database = EventDatabase()
    uploader = EventUploader(
        "http://127.0.0.1:8000"
    )
    gps = GPSSource()
    print("Opening video...")
    source.open()

    print("Video opened successfully.")
    print("Pothole detector loaded.")
    print("Press Q to stop.")

    frame_count = 0
    detection_count = 0

    while frame_count < 800:
        success, frame = source.read()

        if not success:
            print("End of video.")
            break

        frame_count += 1

        detections = detector.detect(frame)

        detection_count += len(detections)

        # Track detections and create events
        tracked_detections = tracker.update(detections)
        if detections:
            print(
                f"Frame {frame_count}: "
                f"{len(detections)} raw → "
                f"{len(tracked_detections)} tracked"
            )
        for detection, track_id, is_new_track in tracked_detections:

            if is_new_track:
                location = gps.get_location()

                event = event_generator.create_event(
                    detection,
                    latitude=location["latitude"],
                    longitude=location["longitude"]
                )

                database.save_event(event)

                uploader.upload_pending_events(database)

                print(
                    f"NEW POTHOLE EVENT | "
                    f"Track: {track_id} | "
                    f"Confidence: {detection['confidence']:.2f}"
                )

                print(event.to_dict())

                print(
                    f"NEW POTHOLE EVENT | "
                    f"Track: {track_id} | "
                    f"Confidence: {detection['confidence']:.2f}"
                )

                print(event.to_dict())
            # Draw detections
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
                2
            )

            label = f"Pothole {confidence:.2f}"

            cv2.putText(
                frame,
                label,
                (x1, max(y1 - 10, 20)),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                (0, 255, 0),
                2
            )

        cv2.imshow(
            "Onboard Pothole Detection",
            frame
        )

        if cv2.waitKey(1) & 0xFF == ord("q"):
            print("Stopped by user.")
            break

    source.release()
    database.close()
    cv2.destroyAllWindows()

    print()
    print(f"Frames processed: {frame_count}")
    print(f"Total detections: {detection_count}")
    print("Onboard application stopped.")


if __name__ == "__main__":
    main()