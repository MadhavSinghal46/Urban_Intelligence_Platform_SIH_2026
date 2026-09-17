import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/events', label: 'Pothole Events' },
  { to: '/map', label: 'Map' },
  { to: '/devices', label: 'Devices' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-wrap">
        <div className="brand-mark">C</div>
        <div>
          <div className="brand-name">CityPulse</div>
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
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
