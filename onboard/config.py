from core.pipeline import OnboardPipeline


DEVICE_ID = "BUS_001"

VIDEO_PATH = "test_data/road_test.mp4"

MODEL_PATH = "models/pothole_best3.pt"

SERVER_URL = "http://127.0.0.1:8000"

CONFIDENCE = 0.40

MAX_FRAMES = 800


def main():
    pipeline = OnboardPipeline(
        device_id=DEVICE_ID,
        video_path=VIDEO_PATH,
        model_path=MODEL_PATH,
        server_url=SERVER_URL,
        confidence=CONFIDENCE,
        max_frames=MAX_FRAMES,
    )

    pipeline.run()


if __name__ == "__main__":
    main()