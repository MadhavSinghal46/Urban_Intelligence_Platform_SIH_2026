from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from typing import Optional


@dataclass
class PotholeEvent:
    event_id: str
    device_id: str
    timestamp: str

    confidence: float
    bbox: list[float]

    latitude: Optional[float] = None
    longitude: Optional[float] = None

    def to_dict(self):
        return asdict(self)
