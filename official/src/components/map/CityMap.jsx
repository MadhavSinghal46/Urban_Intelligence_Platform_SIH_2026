import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { formatConfidence } from '../../data/mockData'

const markerIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

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

      {validEvents.map((event) => (
        <Marker key={event.event_id} position={[event.latitude, event.longitude]} icon={markerIcon}>
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
      ))}
    </MapContainer>
  )
}

export default CityMap
