import { buildDeviceStats, formatConfidence, mockEvents, getValidEvents } from '../data/mockData'

function DevicesPage() {
  const devices = buildDeviceStats(getValidEvents(mockEvents))

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Fleet overview</p>
          <h1>Devices / Buses</h1>
        </div>
      </div>

      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Bus ID / Name</th>
                <th>Detected Potholes</th>
                <th>Average Confidence</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.device_id}>
                  <td>{device.device_id}</td>
                  <td>{device.busName}</td>
                  <td>{device.potholes}</td>
                  <td>{formatConfidence(device.averageConfidence)}</td>
                  <td>
                    <span className={`status-pill ${device.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {device.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default DevicesPage
