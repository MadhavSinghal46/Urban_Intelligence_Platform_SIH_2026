import sqlite3
import json
from pathlib import Path


DB_PATH = Path("server.db")


class ServerDatabase:

    def __init__(self, db_path=DB_PATH):
        self.db_path = Path(db_path)

        self.connection = sqlite3.connect(
            self.db_path,
            check_same_thread=False
        )

        self.create_table()

    def create_table(self):

        self.connection.execute("""
            CREATE TABLE IF NOT EXISTS pothole_events (
                event_id TEXT PRIMARY KEY,
                device_id TEXT NOT NULL,
                timestamp TEXT NOT NULL,
                confidence REAL NOT NULL,
                bbox TEXT NOT NULL,
                latitude REAL,
                longitude REAL
            )
        """)

        self.connection.commit()

    def save_event(self, event):

        self.connection.execute("""
            INSERT OR IGNORE INTO pothole_events (
                event_id,
                device_id,
                timestamp,
                confidence,
                bbox,
                latitude,
                longitude
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            event.event_id,
            event.device_id,
            event.timestamp,
            event.confidence,
            json.dumps(event.bbox),
            event.latitude,
            event.longitude
        ))

        self.connection.commit()

    def count_events(self):

        cursor = self.connection.execute(
            "SELECT COUNT(*) FROM pothole_events"
        )

        return cursor.fetchone()[0]

    def clear_all_events(self):

        cursor = self.connection.execute(
            "DELETE FROM pothole_events"
        )

        self.connection.commit()

        return cursor.rowcount