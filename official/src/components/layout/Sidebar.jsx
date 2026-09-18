import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/events', label: 'Pothole Events' },
  { to: '/map', label: 'Map' },
  { to: '/devices', label: 'Devices / Buses' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-wrap">
        <div className="brand-mark">JP</div>
        <div className="brand-copy">
          <div className="brand-name">CityPulse</div>
          <div className="brand-tag">Jaipur civic ops</div>
        </div>
      </div>

      <nav className="nav-menu" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">•</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-label">Municipal services</div>
        <div className="footer-title">Jaipur Municipal Corporation</div>
        <div className="footer-text">Roads for a Better Tomorrow</div>
      </div>
    </aside>
  )
}

export default Sidebar
