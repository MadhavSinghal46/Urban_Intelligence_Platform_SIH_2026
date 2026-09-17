import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import EventsPage from './pages/Events'
import MapPage from './pages/MapPage'
import DevicesPage from './pages/Devices'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="content-shell">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/devices" element={<DevicesPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
