from dataclasses import dataclass


@dataclass
class OnboardState:
    running: bool = False

    camera_connected: bool = False
    gps_connected: bool = False
    server_connected: bool = False

    frames_processed: int = 0
    detections: int = 0
    events_created: int = 0
    pending_uploads: int = 0