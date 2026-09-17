from pydantic import BaseModel
from typing import Optional


class PotholeEvent(BaseModel):
    event_id: str
    device_id: str
    timestamp: str

    confidence: float
    bbox: list[float]

    latitude: Optional[float] = None
    longitude: Optional[float] = None