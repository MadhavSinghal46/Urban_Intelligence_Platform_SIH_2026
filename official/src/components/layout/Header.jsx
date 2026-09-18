import { useEffect, useState } from 'react'
import { getHealth } from '../../services/api'

function Header() {
  const [serverStatus, setServerStatus] = useState('offline')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const checkHealth = async () => {
      try {
        const response = await getHealth()
        if (!isMounted) return
        setServerStatus(response?.status === 'ok' ? 'online' : 'offline')
      } catch (error) {
        if (!isMounted) return
        setServerStatus('offline')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    checkHealth()
    const intervalId = window.setInterval(checkHealth, 30000)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
    }
  }, [])

  const statusLabel = serverStatus === 'online' ? 'System Online' : loading ? 'Checking...' : 'System Offline'
  const now = new Date()
  const formattedDate = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
  const formattedTime = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })

  return (
    <header className="topbar">
      <div className="topbar-main">
        <div className="topbar-left">
          <button className="ghost-button mobile-nav-button" type="button" aria-label="Toggle navigation">
            ☰
          </button>
          <div className="brand-block">
            <div className="topbar-label">Jaipur Municipal Corporation</div>
            <div className="topbar-title">Roads for a Better Tomorrow</div>
            <div className="topbar-subtitle">Jaipur Operations</div>
          </div>
        </div>

        <div className="topbar-right">
          <div className="header-metrics">
            <div className="header-metric">
              <span className="metric-label-text">Current date</span>
              <strong>{formattedDate}</strong>
            </div>
            <div className="header-metric">
              <span className="metric-label-text">Current time</span>
              <strong>{formattedTime}</strong>
            </div>
          </div>

          <div className={`status-indicator ${serverStatus === 'online' ? 'online' : 'offline'}`}>
            <span className={`status-dot ${serverStatus === 'online' ? 'success' : 'critical'}`} />
            <span>{statusLabel}</span>
          </div>

          <div className="user-chip" aria-label="User profile">
            <div className="user-avatar">JP</div>
            <span>Ops</span>
            <span className="user-caret">▾</span>
          </div>
        </div>
      </div>

      <div className="heritage-banner">
        <span className="heritage-mark">Live Monitoring</span>
        <span>City intelligence desk · Jaipur roads</span>
      </div>
    </header>
  )
}

export default Header
