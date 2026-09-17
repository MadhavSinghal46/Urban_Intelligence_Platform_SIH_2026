import { useMemo, useState } from 'react'
import { mockEvents, formatConfidence, getValidEvents } from '../data/mockData'
import EventDetailsModal from '../components/events/EventDetailsModal'

function EventsPage() {
  const validEvents = useMemo(() => getValidEvents(mockEvents), [])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDevice, setSelectedDevice] = useState('all')
  const [minConfidence, setMinConfidence] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const deviceOptions = [...new Set(validEvents.map((event) => event.device_id))]

  const filteredEvents = validEvents.filter((event) => {
    const matchesDevice = selectedDevice === 'all' || event.device_id === selectedDevice
    const matchesConfidence = event.confidence >= minConfidence
    const text = `${event.event_id} ${event.device_id}`.toLowerCase()
    const matchesSearch = text.includes(searchTerm.trim().toLowerCase())

    return matchesDevice && matchesConfidence && matchesSearch
  })

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Event feed</p>
          <h1>Pothole events</h1>
        </div>
      </div>

      <section className="panel filter-panel">
        <div className="filter-row">
          <label>
            <span>Search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Event ID or device"
            />
          </label>

          <label>
            <span>Device</span>
            <select value={selectedDevice} onChange={(e) => setSelectedDevice(e.target.value)}>
              <option value="all">All devices</option>
              {deviceOptions.map((deviceId) => (
                <option key={deviceId} value={deviceId}>{deviceId}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Min confidence</span>
            <select value={minConfidence} onChange={(e) => setMinConfidence(Number(e.target.value))}>
              <option value={0}>0%</option>
              <option value={0.7}>70%</option>
              <option value={0.8}>80%</option>
              <option value={0.85}>85%</option>
              <option value={0.9}>90%</option>
              <option value={0.95}>95%</option>
            </select>
          </label>
        </div>
      </section>

      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Device / Bus ID</th>
                <th>Timestamp</th>
                <th>Confidence</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan="6" className="empty-row">No events match the current filters.</td>
                </tr>
              ) : (
                filteredEvents.map((event) => (
                  <tr key={event.event_id} onClick={() => setSelectedEvent(event)} className="clickable-row">
                    <td>{event.event_id}</td>
                    <td>{event.device_id}</td>
                    <td>{new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                    <td>{formatConfidence(event.confidence)}</td>
                    <td>{event.latitude}</td>
                    <td>{event.longitude}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  )
}

export default EventsPage
