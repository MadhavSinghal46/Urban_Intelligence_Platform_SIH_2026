import { useEffect, useMemo, useState } from 'react'
import CityMap from '../components/map/CityMap'
import { getEvents } from '../services/api'

function MapPage() {
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
        setError(loadError.message || 'Unable to load map data.')
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

  const validEvents = useMemo(
    () => events.filter((event) => Number.isFinite(event.latitude) && Number.isFinite(event.longitude)),
    [events],
  )

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Spatial overview</p>
          <h1>Map</h1>
        </div>
      </div>

      {error && <div className="error-state">{error}</div>}

      <section className="panel map-panel">
        <div className="panel-header">
          <h2>Detected potholes in Jaipur</h2>
          <span className="panel-meta">{loading ? 'Loading...' : `${validEvents.length} valid locations`}</span>
        </div>
        <div className="map-page-container">
          {loading ? (
            <div className="loading-state">Loading map data...</div>
          ) : validEvents.length === 0 ? (
            <div className="empty-state">No events available.</div>
          ) : (
            <CityMap events={validEvents} />
          )}
        </div>
      </section>
    </div>
  )
}

export default MapPage
