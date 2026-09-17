import { formatConfidence } from '../../data/mockData'

function EventDetailsModal({ event, onClose }) {
  if (!event) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">Event detail</p>
            <h3>{event.event_id}</h3>
          </div>
          <button type="button" className="ghost-button" onClick={onClose} aria-label="Close details">
            ✕
          </button>
        </div>

        <div className="detail-grid">
          <div>
            <span className="metric-label">Device ID</span>
            <strong>{event.device_id}</strong>
          </div>
          <div>
            <span className="metric-label">Timestamp</span>
            <strong>{new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</strong>
          </div>
          <div>
            <span className="metric-label">Confidence</span>
            <strong>{formatConfidence(event.confidence)}</strong>
          </div>
          <div>
            <span className="metric-label">Bounding box</span>
            <strong>{event.bbox?.join(' / ') || 'N/A'}</strong>
          </div>
          <div>
            <span className="metric-label">Latitude</span>
            <strong>{event.latitude}</strong>
          </div>
          <div>
            <span className="metric-label">Longitude</span>
            <strong>{event.longitude}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetailsModal
