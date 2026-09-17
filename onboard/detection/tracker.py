from dataclasses import dataclass


@dataclass
class Track:
    track_id: int
    bbox: list[float]
    confidence: float
    missed_frames: int = 0


class PotholeTracker:
    def __init__(
        self,
        iou_threshold: float = 0.3,
        max_missed_frames: int = 10
    ):
        self.iou_threshold = iou_threshold
        self.max_missed_frames = max_missed_frames

        self.tracks = []
        self.next_track_id = 1

    @staticmethod
    def calculate_iou(box_a, box_b):
        ax1, ay1, ax2, ay2 = box_a
        bx1, by1, bx2, by2 = box_b

        ix1 = max(ax1, bx1)
        iy1 = max(ay1, by1)
        ix2 = min(ax2, bx2)
        iy2 = min(ay2, by2)

        iw = max(0, ix2 - ix1)
        ih = max(0, iy2 - iy1)

        intersection = iw * ih

        area_a = max(0, ax2 - ax1) * max(0, ay2 - ay1)
        area_b = max(0, bx2 - bx1) * max(0, by2 - by1)

        union = area_a + area_b - intersection

        if union <= 0:
            return 0.0

        return intersection / union

    def update(self, detections):

        results = []

        # No existing tracks → every detection is new
        if not self.tracks:

            for detection in detections:

                track = Track(
                    track_id=self.next_track_id,
                    bbox=detection["bbox"],
                    confidence=detection["confidence"]
                )

                self.next_track_id += 1
                self.tracks.append(track)

                results.append(
                    (detection, track.track_id, True)
                )

            return results

        matched_tracks = set()

        for detection in detections:

            best_track = None
            best_iou = 0.0

            for track in self.tracks:

                if track.track_id in matched_tracks:
                    continue

                iou = self.calculate_iou(
                    detection["bbox"],
                    track.bbox
                )

                if iou > best_iou:
                    best_iou = iou
                    best_track = track

            if (
                best_track is not None
                and best_iou >= self.iou_threshold
            ):

                best_track.bbox = detection["bbox"]
                best_track.confidence = detection["confidence"]
                best_track.missed_frames = 0

                matched_tracks.add(best_track.track_id)

                results.append(
                    (detection, best_track.track_id, False)
                )

            else:

                track = Track(
                    track_id=self.next_track_id,
                    bbox=detection["bbox"],
                    confidence=detection["confidence"]
                )

                self.next_track_id += 1
                self.tracks.append(track)

                matched_tracks.add(track.track_id)

                results.append(
                    (detection, track.track_id, True)
                )

        # Update tracks that were not detected
        for track in self.tracks:

            if track.track_id not in matched_tracks:
                track.missed_frames += 1

        # Remove stale tracks
        self.tracks = [
            track
            for track in self.tracks
            if track.missed_frames <= self.max_missed_frames
        ]

        return results