import sqlite3
import json
from pathlib import Path


DB_PATH = Path("storage/events.db")


class EventDatabase:
    def __init__(self, db_path=DB_PATH):
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)

        self.connection = sqlite3.connect(self.db_path)

        self.create_table()

    def create_table(self):
        self.connection.execute("""
            CREATE TABLE IF NOT EXISTS events (
                event_id TEXT PRIMARY KEY,
                device_id TEXT NOT NULL,
                timestamp TEXT NOT NULL,
                confidence REAL NOT NULL,
                bbox TEXT NOT NULL,
                latitude REAL,
                longitude REAL,
                upload_status TEXT NOT NULL DEFAULT 'pending'
            )
        """)

        self.connection.commit()

    def save_event(self, event):
        data = event.to_dict()

        self.connection.execute("""
            INSERT OR IGNORE INTO events (
                event_id,
                device_id,
                timestamp,
                confidence,
                bbox,
                latitude,
                longitude,
                upload_status
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            data["event_id"],
            data["device_id"],
            data["timestamp"],
            data["confidence"],
            json.dumps(data["bbox"]),
            data["latitude"],
            data["longitude"],
            "pending"
        ))

        self.connection.commit()

    def get_pending_events(self):
        cursor = self.connection.execute("""
            SELECT
                event_id,
                device_id,
                timestamp,
                confidence,
                bbox,
                latitude,
                longitude
            FROM events
            WHERE upload_status = 'pending'
            ORDER BY timestamp
        """)

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

        return events

    def mark_uploaded(self, event_id):
        self.connection.execute("""
            UPDATE events
            SET upload_status = 'uploaded'
            WHERE event_id = ?
        """, (event_id,))

        self.connection.commit()

    def close(self):
        self.connection.close()