import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { formatConfidence } from '../../data/mockData'

function createMarkerIcon(color) {
  return new L.DivIcon({
    className: 'custom-map-marker',
    html: `<span style="background:${color};width:14px;height:14px;border:2px solid rgba(255,255,255,0.9);display:block;border-radius:50%;box-shadow:0 2px 8px rgba(17,33,63,0.18);"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}

function CityMap({ events, compact = false }) {
  const validEvents = (events || []).filter(
    (event) => Number.isFinite(event.latitude) && Number.isFinite(event.longitude),
  )

  const center = validEvents.length ? [validEvents[0].latitude, validEvents[0].longitude] : [26.9124, 75.7873]

  return (
    <MapContainer
      center={center}
      zoom={compact ? 11 : 12}
      scrollWheelZoom
      className={compact ? 'city-map city-map-compact' : 'city-map'}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {validEvents.map((event) => {
        const confidence = Number(event.confidence || 0)
        const markerColor = confidence >= 0.9 ? '#d95d5d' : '#f28c5b'

        return (
          <Marker key={event.event_id} position={[event.latitude, event.longitude]} icon={createMarkerIcon(markerColor)}>
            <Popup>
              <div className="map-popup">
                <strong>{event.event_id}</strong>
                <div>Device: {event.device_id}</div>
                <div>Confidence: {formatConfidence(event.confidence)}</div>
                <div>Time: {new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</div>
                <div>
                  {event.latitude}, {event.longitude}
                </div>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default CityMap
