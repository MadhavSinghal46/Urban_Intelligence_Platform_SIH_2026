import json

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from models import PotholeEvent
from database import ServerDatabase


app = FastAPI(
    title="Urban Intelligence Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'http://localhost:3000',
    ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
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
def get_events(
    device_id: str | None = Query(default=None),
    min_confidence: float | None = Query(
        default=None,
        ge=0.0,
        le=1.0
    )
):

    query = """
        SELECT
            event_id,
            device_id,
            timestamp,
            confidence,
            bbox,
            latitude,
            longitude
        FROM pothole_events
    """

    conditions = []
    parameters = []

    if device_id is not None:
        conditions.append("device_id = ?")
        parameters.append(device_id)

    if min_confidence is not None:
        conditions.append("confidence >= ?")
        parameters.append(min_confidence)

    if conditions:
        query += " WHERE " + " AND ".join(conditions)

    query += " ORDER BY timestamp DESC"

    cursor = database.connection.execute(
        query,
        parameters
    )

    rows = cursor.fetchall()

    events = []

    for row in rows:
        events.append({
            "event_id": row[0],
            "device_id": row[1],
            "timestamp": row[2],
            "confidence": row[3],
            "bbox": json.loads(row[4]),
            "latitude": row[5],
            "longitude": row[6]
        })

    return {
        "count": len(events),
        "events": events
    }


@app.get("/events/{event_id}")
def get_event(event_id: str):

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
        WHERE event_id = ?
    """, (event_id,))

    row = cursor.fetchone()

    if row is None:
        raise HTTPException(
            status_code=404,
            detail="Event not found"
        )

    return {
        "event_id": row[0],
        "device_id": row[1],
        "timestamp": row[2],
        "confidence": row[3],
        "bbox": json.loads(row[4]),
        "latitude": row[5],
        "longitude": row[6]
    }