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

  const statusLabel = serverStatus === 'online' ? 'Online' : loading ? 'Checking...' : 'Offline'

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
        <div className={`status-indicator ${serverStatus === 'online' ? 'online' : 'offline'}`}>
          <span className={`status-dot ${serverStatus === 'online' ? 'success' : 'critical'}`} />
          <span>{statusLabel}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
