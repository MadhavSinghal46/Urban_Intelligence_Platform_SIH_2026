import CityMap from '../components/map/CityMap'
import { mockEvents, getValidEvents } from '../data/mockData'

function MapPage() {
  const validEvents = getValidEvents(mockEvents)

  return (
    <div className="page-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Spatial overview</p>
          <h1>Map</h1>
        </div>
      </div>

      <section className="panel map-panel">
        <div className="panel-header">
          <h2>Detected potholes in Jaipur</h2>
          <span className="panel-meta">{validEvents.length} valid locations</span>
        </div>
        <div className="map-page-container">
          <CityMap events={validEvents} />
        </div>
      </section>
    </div>
  )
}

export default MapPage
