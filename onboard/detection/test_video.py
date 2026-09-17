from ultralytics import YOLO


MODEL_PATH = "models/pothole_best3.pt"
VIDEO_PATH = "test_data/road_test.mp4"


def main():
    print("Loading model...")

    model = YOLO(MODEL_PATH)

    print("Running pothole detection...")

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

            for confidence in boxes.conf:
                print(
                    f"  confidence={float(confidence):.2f}"
                )

    print()
    print(f"Frames processed: {frame_count}")
    print(f"Total detections: {detection_count}")
    print("Detection finished.")


if __name__ == "__main__":
    main()