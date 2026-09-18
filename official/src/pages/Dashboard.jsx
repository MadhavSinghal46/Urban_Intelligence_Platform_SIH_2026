import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityMap from '../components/map/CityMap'
import { formatConfidence } from '../data/mockData'
import { getEvents, getEventsCount, getHealth, resetDemoEvents } from '../services/api'

function StatCard({ label, value, helper, tone = 'info' }) {
  return (
    <div className={`stat-card tone-${tone}`}>
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        <span className={`mini-indicator mini-${tone}`} />
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-helper">{helper}</div>
    </div>
  )
}

function DemoUtilities({ onReset, loading, disabled, error }) {
  return (
    <div className="demo-card">
      <div className="demo-card-header">
        <span className="demo-pill">Demo utilities</span>
      </div>
      <h3>Operations sandbox</h3>
      <p>Use the reset utility to clear current demo data from the live server.</p>
      <button type="button" className="demo-action" onClick={onReset} disabled={disabled || loading}>
        {loading ? 'Resetting...' : 'Reset Demo Data'}
      </button>
      {error && <div className="demo-error">{error}</div>}
    </div>
  )
}

function RecentEventsCard({ events, loading, onViewAll }) {
  const fallbackLetter = (value) => value ? value.charAt(0).toUpperCase() : 'P'

  return (
    <section className="panel recent-panel">
      <div className="panel-header">
        <div>
          <p className="panel-kicker">Field feed</p>
          <h2>Recent pothole events</h2>
        </div>
        <button type="button" className="view-all-button" onClick={onViewAll}>
          View All →
        </button>
      </div>

      <div className="recent-table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Device</th>
              <th>Confidence</th>
              <th>Location</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="loading-row">Loading event data...</td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-row">No events available.</td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.event_id}>
                  <td className="event-id">{event.event_id}</td>
                  <td>
                    <div className="event-image-badge" aria-label={`Event image for ${event.event_id}`}>
                      {fallbackLetter(event.event_id)}
                    </div>
                  </td>
                  <td>{event.device_id}</td>
                  <td>
                    <span className={`confidence-badge ${Number(event.confidence) >= 0.9 ? 'high' : 'medium'}`}>
                      {formatConfidence(event.confidence)}
                    </span>
                  </td>
                  <td>{Number(event.latitude).toFixed(4)}, {Number(event.longitude).toFixed(4)}</td>
                  <td>{new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Dashboard() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [eventCount, setEventCount] = useState(0)
  const [serverStatus, setServerStatus] = useState('offline')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showResetDialog, setShowResetDialog] = useState(false)
  const [resetting, setResetting] = useState(false)
  const [resetError, setResetError] = useState('')

  const loadDashboard = async () => {
    try {
      setLoading(true)
      setError('')

      const [eventData, countData, healthData] = await Promise.all([
        getEvents(),
        getEventsCount(),
        getHealth(),
      ])

      const allEvents = Array.isArray(eventData) ? eventData : []
      setEvents(allEvents)
      setEventCount(Number(countData?.count ?? allEvents.length))
      setServerStatus(healthData?.status === 'ok' ? 'online' : 'offline')
    } catch (loadError) {
      setEvents([])
      setEventCount(0)
      setServerStatus('offline')
      setError(loadError.message || 'Unable to load dashboard data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let isMounted = true

    const runLoad = async () => {
      if (!isMounted) return
      await loadDashboard()
    }

    runLoad()

    return () => {
      isMounted = false
    }
  }, [])

  const handleResetDemoData = async () => {
    setResetting(true)
    setResetError('')

    try {
      await resetDemoEvents()
      const [eventData, countData, healthData] = await Promise.all([
        getEvents(),
        getEventsCount(),
        getHealth(),
      ])

      const allEvents = Array.isArray(eventData) ? eventData : []
      setEvents(allEvents)
      setEventCount(Number(countData?.count ?? allEvents.length))
      setServerStatus(healthData?.status === 'ok' ? 'online' : 'offline')
      setShowResetDialog(false)
      setError('')
    } catch (resetErrorMessage) {
      const message = resetErrorMessage.message || 'Unable to reset demo data. Please try again.'
      setResetError(message)
      setError(message)
    } finally {
      setResetting(false)
    }
  }

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
    <div className="page-stack dashboard-page">
      <div className="dashboard-intro">
        <div>
          <p className="eyebrow">ROAD INTELLIGENCE PLATFORM</p>
          <h1>Road Intelligence <span>Overview</span></h1>
          <p className="intro-subtitle">Real-time pothole detection for safer, smarter and more livable Jaipur.</p>
        </div>

        <DemoUtilities
          onReset={() => setShowResetDialog(true)}
          loading={resetting}
          disabled={loading || resetting}
          error={resetError}
        />
      </div>

      {error && <div className="error-state">{error}</div>}

      {showResetDialog && (
        <div className="modal-backdrop" onClick={() => setShowResetDialog(false)}>
          <div className="confirmation-modal" onClick={(event) => event.stopPropagation()}>
            <h3>Reset demo data</h3>
            <p>Are you sure? This will remove all current demo events.</p>
            {resetError && <div className="error-state inline-error">{resetError}</div>}
            <div className="modal-actions">
              <button type="button" className="secondary-button" onClick={() => setShowResetDialog(false)}>
                Cancel
              </button>
              <button type="button" className="danger-button" onClick={handleResetDemoData} disabled={resetting}>
                {resetting ? 'Resetting...' : 'Reset Data'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="summary-grid">
        <StatCard
          label="Pothole Events"
          value={loading ? 'Loading...' : eventCount}
          helper="Detected across city routes"
          tone="blue"
        />
        <StatCard
          label="Active Buses"
          value={loading ? 'Loading...' : deviceStats.length}
          helper="Currently reporting"
          tone="orange"
        />
        <StatCard
          label="Avg. Confidence"
          value={loading ? 'Loading...' : formatConfidence(averageConfidence)}
          helper="Across detected events"
          tone="green"
        />
        <StatCard
          label="Server Status"
          value={loading ? 'Checking...' : serverStatus === 'online' ? 'Operational' : 'Offline'}
          helper="Central data pipeline"
          tone="purple"
        />
      </div>

      <div className="dashboard-grid">
        <RecentEventsCard events={recentEvents} loading={loading} onViewAll={() => navigate('/events')} />

        <section className="panel map-panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Coverage map</p>
              <h2>City map</h2>
            </div>
            <span className="panel-meta">{validEvents.length} active points</span>
          </div>

          <div className="map-preview">
            {loading ? (
              <div className="loading-state">Loading map...</div>
            ) : (
              <CityMap events={validEvents} compact />
            )}
          </div>

          <div className="map-legend">
            <span><i className="legend-dot high" />High Confidence</span>
            <span><i className="legend-dot medium" />Medium Confidence</span>
            <span><i className="legend-dot bus" />Active Bus</span>
          </div>
        </section>
      </div>

      <div className="municipal-banner">
        <div>
          <div className="banner-kicker">Together for a Safer Jaipur</div>
          <div className="banner-title">AI for cleaner roads. A smarter, safer city for everyone.</div>
        </div>
        <div className="banner-tag">Jaipur municipal operations</div>
      </div>
    </div>
  )
}

export default Dashboard
