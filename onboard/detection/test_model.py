from ultralytics import YOLO


MODEL_PATH = "models/pothole_best.pt"


def main():
    print("Loading pothole model...")

    model = YOLO(MODEL_PATH)

    print("Model loaded successfully.")
    print("Classes:", model.names)


if __name__ == "__main__":
    main()