import uuid
from datetime import datetime, timezone

from events.event import PotholeEvent


class EventGenerator:
    def __init__(self, device_id: str):
        self.device_id = device_id

    def create_event(
            self,
            detection,
            latitude=None,
            longitude=None
    ):
        return PotholeEvent(
            event_id=str(uuid.uuid4()),
            device_id=self.device_id,
            timestamp=datetime.now(timezone.utc).isoformat(),
            confidence=detection["confidence"],
            bbox=detection["bbox"],
            latitude=latitude,
            longitude=longitude
        )