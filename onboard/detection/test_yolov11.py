from ultralytics import YOLO


MODEL_PATH = "models/pothole_best4.pt"
VIDEO_PATH = "test_data/road_test.mp4"


def main():
    print("Loading YOLO11 model...")

    model = YOLO(MODEL_PATH)

    print("Running detection...")
    print("Press Ctrl+C if you need to stop.")

    results = model.predict(
        source=VIDEO_PATH,
        conf=0.40,
        save=True,
        stream=True
    )

    frame_count = 0
    detection_count = 0

    for result in results:
        frame_count += 1

        boxes = result.boxes

        if boxes is not None and len(boxes) > 0:
            detection_count += len(boxes)

            print(
                f"Frame {frame_count}: "
                f"{len(boxes)} detection(s)"
            )

    print()
    print(f"Frames processed: {frame_count}")
    print(f"Total detections: {detection_count}")
    print("Detection finished.")


if __name__ == "__main__":
    main()