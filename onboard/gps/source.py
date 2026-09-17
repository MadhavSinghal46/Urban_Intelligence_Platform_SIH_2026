class GPSSource:
    def __init__(self):
        # Temporary V1 test coordinates
        self.latitude = 26.9124
        self.longitude = 75.7873

    def get_location(self):
        return {
            "latitude": self.latitude,
            "longitude": self.longitude
        }