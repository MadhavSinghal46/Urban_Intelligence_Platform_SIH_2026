import { useEffect, useMemo, useState } from 'react'
import { formatConfidence } from '../data/mockData'
import { getEvents } from '../services/api'

function DevicesPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadEvents = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await getEvents()
        if (!isMounted) return
        setEvents(Array.isArray(response) ? response : [])
      } catch (loadError) {
        if (!isMounted) return
        setEvents([])
        setError(loadError.message || 'Unable to load device data.')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadEvents()

    return () => {
      isMounted = false
    }
  }, [])

  const devices = useMemo(() => {
    const map = new Map()

    events.forEach((event) => {
      const key = event.device_id
      if (!map.has(key)) {
        map.set(key, {
          device_id: key,
          busName: key,
          potholes: 0,
          confidenceTotal: 0,
          status: 'Operational',
        })
      }

      const stats = map.get(key)
      stats.potholes += 1
      stats.confidenceTotal += Number(event.confidence || 0)
    })

    return [...map.values()].map((device) => ({
      ...device,
      averageConfidence: device.potholes ? device.confidenceTotal / device.potholes : 0,
    })).sort((a, b) => b.potholes - a.potholes)
  }, [events])

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Fleet overview</p>
          <h1>Devices / Buses</h1>
        </div>
      </div>

      {error && <div className="error-state">{error}</div>}

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
              {loading ? (
                <tr>
                  <td colSpan="5" className="loading-row">Loading device data...</td>
                </tr>
              ) : devices.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-row">No events available.</td>
                </tr>
              ) : (
                devices.map((device) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default DevicesPage
