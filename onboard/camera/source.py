import cv2


class VideoSource:
    def __init__(self, video_path: str):
        self.video_path = video_path
        self.cap = None

    def open(self):
        self.cap = cv2.VideoCapture(self.video_path)

        if not self.cap.isOpened():
            raise RuntimeError(
                f"Could not open video: {self.video_path}"
            )

    def read(self):
        if self.cap is None:
            raise RuntimeError("Video source is not open.")

        return self.cap.read()

    def release(self):
        if self.cap is not None:
            self.cap.release()