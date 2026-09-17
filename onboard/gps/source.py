class GPSSource:
    def __init__(self):
        # Starting test location
        self.latitude = 26.9124
        self.longitude = 75.7873

        # Simulated movement per frame
        self.latitude_step = 0.00001
        self.longitude_step = 0.00002

    def update(self):
        self.latitude += self.latitude_step
        self.longitude += self.longitude_step

    def get_location(self):
        return {
            "latitude": self.latitude,
            "longitude": self.longitude
        }