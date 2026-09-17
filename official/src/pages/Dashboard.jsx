import { useEffect, useMemo, useState } from 'react'
import CityMap from '../components/map/CityMap'
import { formatConfidence } from '../data/mockData'
import { getEvents, getEventsCount, getHealth } from '../services/api'

function SummaryCard({ label, value, helper, tone = 'neutral' }) {
  return (
    <div className="summary-card">
      <div className="summary-header">
        <span className={`status-dot status-${tone}`} />
        <span>{label}</span>
      </div>
      <div className="summary-value">{value}</div>
      <div className="summary-helper">{helper}</div>
    </div>
  )
}

function Dashboard() {
  const [events, setEvents] = useState([])
  const [eventCount, setEventCount] = useState(0)
  const [serverStatus, setServerStatus] = useState('offline')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadDashboard = async () => {
      try {
        setLoading(true)
        setError('')

        const [eventData, countData, healthData] = await Promise.all([
          getEvents(),
          getEventsCount(),
          getHealth(),
        ])

        if (!isMounted) return

        const allEvents = Array.isArray(eventData) ? eventData : []
        setEvents(allEvents)
        setEventCount(Number(countData?.count ?? allEvents.length))
        setServerStatus(healthData?.status === 'ok' ? 'online' : 'offline')
      } catch (loadError) {
        if (!isMounted) return
        setEvents([])
        setEventCount(0)
        setServerStatus('offline')
        setError(loadError.message || 'Unable to load dashboard data.')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadDashboard()

    return () => {
      isMounted = false
    }
  }, [])

  const validEvents = useMemo(
    () => events.filter((event) => Number.isFinite(event.latitude) && Number.isFinite(event.longitude)),
    [events],
  )

  const deviceStats = useMemo(() => {
    const deviceMap = new Map()

    validEvents.forEach((event) => {
      const key = event.device_id
      if (!deviceMap.has(key)) {
        deviceMap.set(key, {
          device_id: key,
          busName: key,
          potholes: 0,
          confidenceTotal: 0,
          status: 'Operational',
        })
      }

      const stats = deviceMap.get(key)
      stats.potholes += 1
      stats.confidenceTotal += Number(event.confidence || 0)
    })

    return [...deviceMap.values()].map((device) => ({
      ...device,
      averageConfidence: device.potholes ? device.confidenceTotal / device.potholes : 0,
    })).sort((a, b) => b.potholes - a.potholes)
  }, [validEvents])

  const averageConfidence = validEvents.length
    ? validEvents.reduce((sum, event) => sum + Number(event.confidence || 0), 0) / validEvents.length
    : 0

  const recentEvents = [...validEvents].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
  ).slice(0, 5)

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Operational overview</p>
          <h1>CityPulse dashboard</h1>
        </div>
        <div className="pill success">{serverStatus === 'online' ? 'System online' : 'System offline'}</div>
      </div>

      {error && <div className="error-state">{error}</div>}

      <div className="summary-grid">
        <SummaryCard
          label="Total Pothole Events"
          value={loading ? 'Loading...' : eventCount}
          helper="Detected across city routes"
          tone="info"
        />
        <SummaryCard
          label="Devices / Buses"
          value={loading ? 'Loading...' : deviceStats.length}
          helper="Active sensing units"
          tone="warning"
        />
        <SummaryCard
          label="Average Confidence"
          value={loading ? 'Loading...' : formatConfidence(averageConfidence)}
          helper="Model confidence score"
          tone="success"
        />
        <SummaryCard
          label="Server Status"
          value={loading ? 'Checking...' : serverStatus === 'online' ? 'Operational' : 'Offline'}
          helper="Central data pipeline"
          tone="critical"
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel panel-large">
          <div className="panel-header">
            <h2>Recent events</h2>
            <span className="panel-meta">Last 5 detections</span>
          </div>
          <div className="table-wrap compact-table">
            <table>
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Device ID</th>
                  <th>Timestamp</th>
                  <th>Confidence</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="loading-row">Loading event data...</td>
                  </tr>
                ) : recentEvents.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty-row">No events available.</td>
                  </tr>
                ) : (
                  recentEvents.map((event) => (
                    <tr key={event.event_id}>
                      <td>{event.event_id}</td>
                      <td>{event.device_id}</td>
                      <td>{new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                      <td>{formatConfidence(event.confidence)}</td>
                      <td>{event.latitude.toFixed(4)}, {event.longitude.toFixed(4)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Map preview</h2>
            <span className="panel-meta">Jaipur coverage</span>
          </div>
          <div className="map-preview">
            {loading ? (
              <div className="loading-state">Loading map...</div>
            ) : (
              <CityMap events={validEvents} compact />
            )}
          </div>
        </section>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Device overview</h2>
          <span className="panel-meta">Detection counts</span>
        </div>
        <div className="device-overview-list">
          {loading ? (
            <div className="loading-state">Loading device data...</div>
          ) : deviceStats.length === 0 ? (
            <div className="empty-state">No devices available.</div>
          ) : (
            deviceStats.map((device) => (
              <div key={device.device_id} className="device-overview-item">
                <div>
                  <div className="device-name">{device.device_id}</div>
                  <div className="device-subname">{device.busName}</div>
                </div>
                <div>
                  <span className="metric-label">Detections</span>
                  <strong>{device.potholes}</strong>
                </div>
                <div>
                  <span className="metric-label">Avg confidence</span>
                  <strong>{formatConfidence(device.averageConfidence)}</strong>
                </div>
                <span className={`status-pill ${device.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {device.status}
                </span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
