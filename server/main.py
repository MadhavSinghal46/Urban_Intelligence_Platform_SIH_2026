from fastapi import FastAPI

from models import PotholeEvent
from database import ServerDatabase


app = FastAPI(
    title="Urban Intelligence Platform",
    version="1.0.0"
)

database = ServerDatabase()


@app.get("/health")
def health():
    return {
        "status": "ok"
    }


@app.post("/events")
def receive_event(event: PotholeEvent):

    database.save_event(event)

    return {
        "status": "received",
        "event_id": event.event_id
    }


@app.get("/events/count")
def event_count():

    return {
        "count": database.count_events()
    }

@app.get("/events")
def get_events():

    cursor = database.connection.execute("""
        SELECT
            event_id,
            device_id,
            timestamp,
            confidence,
            bbox,
            latitude,
            longitude
        FROM pothole_events
        ORDER BY timestamp DESC
    """)

    rows = cursor.fetchall()

    events = []

    for row in rows:
        events.append({
            "event_id": row[0],
            "device_id": row[1],
            "timestamp": row[2],
            "confidence": row[3],
            "bbox": row[4],
            "latitude": row[5],
            "longitude": row[6]
        })

    return {
        "count": len(events),
        "events": events
    }