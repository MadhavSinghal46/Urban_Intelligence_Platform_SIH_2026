import requests


class EventUploader:
    def __init__(self, server_url: str):
        self.server_url = server_url.rstrip("/")

    def upload_event(self, event):
        try:
            response = requests.post(
                f"{self.server_url}/events",
                json=event,
                timeout=5
            )

            if response.status_code == 200:
                return True

            print(
                f"Upload failed: HTTP {response.status_code}"
            )
            return False

        except requests.RequestException as error:
            print(f"Server unavailable: {error}")
            return False

    def upload_pending_events(self, database):

        pending_events = database.get_pending_events()

        if not pending_events:
            return 0

        uploaded_count = 0

        for event in pending_events:

            success = self.upload_event(event)

            if success:
                database.mark_uploaded(
                    event["event_id"]
                )

                uploaded_count += 1

                print(
                    f"UPLOADED EVENT | "
                    f"{event['event_id']}"
                )

        return uploaded_count