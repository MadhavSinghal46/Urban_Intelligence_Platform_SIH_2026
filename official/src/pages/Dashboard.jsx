import { mockEvents, formatConfidence, buildDeviceStats, getDashboardSummary, getValidEvents } from '../data/mockData'
import CityMap from '../components/map/CityMap'

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
  const events = getValidEvents(mockEvents)
  const deviceStats = buildDeviceStats(events)
  const summary = getDashboardSummary(events)
  const recentEvents = [...events].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
  ).slice(0, 5)

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Operational overview</p>
          <h1>CityPulse dashboard</h1>
        </div>
        <div className="pill success">System online</div>
      </div>

      <div className="summary-grid">
        <SummaryCard
          label="Total Pothole Events"
          value={summary.totalPotholes}
          helper="Detected across city routes"
          tone="info"
        />
        <SummaryCard
          label="Devices / Buses"
          value={summary.devicesCount}
          helper="Active sensing units"
          tone="warning"
        />
        <SummaryCard
          label="Average Confidence"
          value={formatConfidence(summary.averageConfidence)}
          helper="Model confidence score"
          tone="success"
        />
        <SummaryCard
          label="Server Status"
          value={summary.serverStatus}
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
                {recentEvents.map((event) => (
                  <tr key={event.event_id}>
                    <td>{event.event_id}</td>
                    <td>{event.device_id}</td>
                    <td>{new Date(event.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                    <td>{formatConfidence(event.confidence)}</td>
                    <td>{event.latitude.toFixed(4)}, {event.longitude.toFixed(4)}</td>
                  </tr>
                ))}
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
            <CityMap events={events} compact />
          </div>
        </section>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Device overview</h2>
          <span className="panel-meta">Detection counts</span>
        </div>
        <div className="device-overview-list">
          {deviceStats.map((device) => (
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
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
