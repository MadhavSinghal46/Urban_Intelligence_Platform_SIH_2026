function Header() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="ghost-button mobile-nav-button" type="button" aria-label="Toggle navigation">
          ☰
        </button>
        <div>
          <div className="topbar-label">Jaipur operations</div>
          <div className="topbar-date">{new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</div>
        </div>
      </div>

      <div className="topbar-right">
        <div className="status-indicator">
          <span className="status-dot success" />
          <span>Server online</span>
        </div>
      </div>
    </header>
  )
}

export default Header
