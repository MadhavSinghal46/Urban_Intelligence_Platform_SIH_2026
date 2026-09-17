import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom'
import './App.css'

const cityStats = {
  city: 'Bengaluru',
  overallStatus: 'Stable',
  time: 'Tue, 16 Sep 2026 • 08:45 AM',
  alerts: 3,
  metrics: [
    { title: 'Air Quality', value: '82', status: 'Moderate', trend: '+6%', detail: 'AQI • Updated 8 min ago' },
    { title: 'Traffic', value: '61%', status: 'Moderate', trend: '+4%', detail: 'Congestion • Central routes' },
    { title: 'Weather', value: '29°C', status: 'Clear', trend: '→', detail: 'Humidity 52% • Wind 13 km/h' },
    { title: 'Active Alerts', value: '03', status: 'High priority', trend: '2 new', detail: 'Across 5 zones' },
  ],
}

const capabilities = [
  { title: 'Issue Intelligence', text: 'Detect civic concerns from citizen reports, location clusters, and urgency signals.' },
  { title: 'AI Severity Mapping', text: 'Classify, prioritize, and rank issues based on impact, urgency, and historical trends.' },
  { title: 'Urban Monitoring', text: 'Monitor city health using traffic, air quality, weather, and infrastructure indicators.' },
]

const workflow = [
  { label: '01', title: 'Collect signals', text: 'City data and citizen inputs flow into the CityPulse system.' },
  { label: '02', title: 'Process & enrich', text: 'Normalize location, category, severity, and time-based context.' },
  { label: '03', title: 'AI analysis', text: 'Generate insights, duplicates, risk levels, and recommended action.' },
  { label: '04', title: 'Decision support', text: 'Authorities can act quickly with clear visibility and urgency.' },
]

const insightCards = [
  { category: 'Traffic', title: 'Evening congestion rising in Central Zone', severity: 'Medium', confidence: '87%', location: 'MG Road', metric: 'Traffic +12%', time: '08:20 AM' },
  { category: 'Air Quality', title: 'PM2.5 concentration elevated near freight corridor', severity: 'High', confidence: '91%', location: 'Bellandur', metric: 'AQI 118', time: '07:40 AM' },
  { category: 'Weather', title: 'Heat stress risk may increase across western wards', severity: 'Moderate', confidence: '83%', location: 'Whitefield', metric: '29°C', time: '06:55 AM' },
]

const alerts = [
  { title: 'Waterlogging on arterial road', category: 'Infrastructure', severity: 'High', location: 'Koramangala', description: 'Stormwater drainage blocked near 5th Cross Road.', time: '08:12 AM', status: 'In Progress' },
  { title: 'Traffic signal outage', category: 'Traffic', severity: 'Medium', location: 'HSR Layout', description: 'Signal malfunction causing queue buildup during peak hours.', time: '07:48 AM', status: 'Assigned' },
  { title: 'Garbage overflow alert', category: 'Public Health', severity: 'Low', location: 'Indiranagar', description: 'Overflow reported outside a commercial block.', time: '06:30 AM', status: 'Pending' },
]

const trendData = [48, 55, 61, 58, 72, 68, 81]
const barData = [32, 46, 58, 41, 63]

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <div className="brand-name">CityPulse</div>
            <div className="brand-subtitle">Urban intelligence</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/alerts">Alerts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Link to="/dashboard" className="btn btn-primary nav-cta">
          Explore CityPulse
        </Link>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>CityPulse © 2026</p>
        <p>Turning fragmented urban signals into actionable city intelligence.</p>
      </footer>
    </div>
  )
}

function LandingPage() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">AI-powered urban intelligence</span>
          <h1>Understand city issues before they become crises.</h1>
          <p>
            CityPulse combines civic reporting, live urban indicators, and AI-powered analysis to help
            cities respond faster and smarter.
          </p>

          <div className="hero-actions">
            <Link to="/dashboard" className="btn btn-primary">Explore CityPulse</Link>
            <Link to="/about" className="btn btn-secondary">Learn more</Link>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>24.8k</strong>
              <span>Reports processed</span>
            </div>
            <div>
              <strong>18%</strong>
              <span>Average response gain</span>
            </div>
            <div>
              <strong>92%</strong>
              <span>Priority accuracy</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card stats-card">
            <p className="tiny-label">City status</p>
            <h3>Overall Status</h3>
            <div className="status-row">
              <span className="dot success" />
              <strong>Stable</strong>
            </div>
          </div>

          <div className="mini-dashboard">
            <div className="mini-header">
              <span>Live indicators</span>
              <span className="badge success">Healthy</span>
            </div>
            <div className="mini-grid">
              <MetricTile label="AQI" value="82" tone="warning" />
              <MetricTile label="Traffic" value="61%" tone="info" />
              <MetricTile label="Weather" value="29°C" tone="success" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeader title="Why CityPulse" subtitle="A central layer for urban awareness" />
        <div className="feature-grid">
          {capabilities.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="feature-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section alt-section">
        <SectionHeader title="How CityPulse works" subtitle="From raw signals to actionable understanding" />
        <div className="workflow-grid">
          {workflow.map((item) => (
            <div className="workflow-card" key={item.label}>
              <span className="workflow-step">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section preview-section">
        <div className="preview-copy">
          <span className="eyebrow">Urban data visualization</span>
          <h2>See the city at a glance.</h2>
          <p>
            CityPulse transforms noise into a clear operational picture, blending risk signals, issue
            patterns, weather changes, and city conditions into one interface.
          </p>
        </div>

        <div className="preview-panel">
          <div className="panel-header">
            <span>City pulse overview</span>
            <span className="badge info">Realtime</span>
          </div>
          <div className="preview-list">
            <div>
              <span>Air quality</span>
              <strong>Moderate</strong>
            </div>
            <div>
              <span>Traffic</span>
              <strong>61% congested</strong>
            </div>
            <div>
              <span>Infrastructure</span>
              <strong>3 alerts</strong>
            </div>
          </div>
          <div className="sparkline" aria-label="City trends chart">
            <span style={{ height: '36%' }} />
            <span style={{ height: '52%' }} />
            <span style={{ height: '41%' }} />
            <span style={{ height: '68%' }} />
            <span style={{ height: '73%' }} />
            <span style={{ height: '56%' }} />
            <span style={{ height: '84%' }} />
          </div>
        </div>
      </section>
    </>
  )
}

function DashboardPage() {
  return (
    <>
      <section className="dashboard-topbar">
        <div>
          <span className="eyebrow">City monitoring</span>
          <h2>{cityStats.city}</h2>
        </div>
        <div className="dashboard-meta">
          <span>{cityStats.time}</span>
          <span className="alert-dot">● {cityStats.alerts} active alerts</span>
          <div className="avatar-pill">AM</div>
        </div>
      </section>

      <section className="status-banner">
        <div>
          <p className="tiny-label">Overall City Status</p>
          <div className="status-row">
            <span className="dot success" />
            <strong>{cityStats.overallStatus}</strong>
          </div>
        </div>
        <div>
          <p className="tiny-label">Monitoring focus</p>
          <strong>Traffic • Air quality • Weather</strong>
        </div>
      </section>

      <section className="metric-grid">
        {cityStats.metrics.map((item) => (
          <div className="metric-card" key={item.title}>
            <div className="metric-header">
              <span>{item.title}</span>
              <span className="trend positive">{item.trend}</span>
            </div>
            <div className="metric-value">{item.value}</div>
            <div className="metric-status">{item.status}</div>
            <p>{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="panel-grid two-up">
        <div className="panel-card map-card">
          <div className="panel-header">
            <h3>City map overview</h3>
            <span className="badge info">Live view</span>
          </div>
          <div className="map-surface" aria-label="Map overview">
            <span className="map-marker traffic" style={{ top: '30%', left: '54%' }}>Traffic</span>
            <span className="map-marker pollution" style={{ top: '46%', left: '34%' }}>Pollution</span>
            <span className="map-marker alert" style={{ top: '58%', left: '68%' }}>Alert</span>
            <span className="map-marker weather" style={{ top: '25%', left: '28%' }}>Weather</span>
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-header">
            <h3>Issue distribution</h3>
            <span className="badge warning">This week</span>
          </div>
          <div className="bar-chart" aria-label="Issue distribution chart">
            {barData.map((height, index) => (
              <div className="bar-column" key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            <span>North</span>
            <span>East</span>
            <span>West</span>
            <span>South</span>
            <span>Central</span>
          </div>
        </div>
      </section>

      <section className="panel-grid two-up">
        <div className="panel-card">
          <div className="panel-header">
            <h3>Air quality trend</h3>
            <span className="badge success">+6% vs yesterday</span>
          </div>
          <svg viewBox="0 0 340 150" className="line-chart" aria-label="Air quality trend">
            <path d="M10 120 C 55 95, 80 100, 120 88 S 180 62, 220 70 S 285 45, 330 26" />
          </svg>
        </div>

        <div className="panel-card">
          <div className="panel-header">
            <h3>Priority alerts</h3>
            <span className="badge critical">3 urgent</span>
          </div>
          <div className="stack-list">
            {alerts.slice(0, 3).map((alert) => (
              <div className="stack-item" key={alert.title}>
                <div className={`severity-pill ${alert.severity.toLowerCase()}`}>{alert.severity}</div>
                <div>
                  <strong>{alert.title}</strong>
                  <p>{alert.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function InsightsPage() {
  return (
    <>
      <section className="page-header">
        <div>
          <span className="eyebrow">AI intelligence</span>
          <h2>Insights dashboard</h2>
        </div>
        <button type="button" className="btn btn-primary small-btn">Generate report</button>
      </section>

      <section className="insight-grid">
        {insightCards.map((insight) => (
          <article className="insight-card" key={insight.title}>
            <div className="insight-topline">
              <span className="badge info">{insight.category}</span>
              <span className="badge warning">{insight.severity}</span>
            </div>
            <h3>{insight.title}</h3>
            <p>
              Traffic congestion has increased in the central corridor during evening hours compared with
              the previous period, creating longer commute times and spillover risk across adjacent
              neighborhoods.
            </p>
            <div className="insight-meta">
              <span>Confidence: {insight.confidence}</span>
              <span>{insight.location}</span>
            </div>
            <div className="insight-footer">
              <strong>{insight.metric}</strong>
              <span>{insight.time}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function AlertsPage() {
  return (
    <>
      <section className="page-header">
        <div>
          <span className="eyebrow">Live monitoring</span>
          <h2>City alerts</h2>
        </div>
      </section>

      <section className="alert-list">
        {alerts.map((alert) => (
          <div className="alert-card" key={alert.title}>
            <div className="alert-head">
              <div>
                <span className="badge info">{alert.category}</span>
                <h3>{alert.title}</h3>
              </div>
              <span className={`severity-pill ${alert.severity.toLowerCase()}`}>{alert.severity}</span>
            </div>
            <p>{alert.description}</p>
            <div className="alert-meta">
              <span>{alert.location}</span>
              <span>{alert.time}</span>
              <span>{alert.status}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div>
          <span className="eyebrow">About</span>
          <h2>About CityPulse</h2>
        </div>
      </section>

      <section className="about-stack">
        <div className="about-card">
          <h3>Problem</h3>
          <p>
            City systems often operate with fragmented signals, delayed reporting, and limited visibility
            into recurring urban issues. Citizens and officials need a clearer view of what matters most.
          </p>
        </div>

        <div className="about-card">
          <h3>Solution</h3>
          <p>
            CityPulse consolidates city data, reports, and AI-powered intelligence into a unified command
            view that supports prioritization, faster responses, and more informed urban decisions.
          </p>
        </div>

        <div className="about-card">
          <h3>How it works</h3>
          <div className="flow-text">
            <span>Data</span>
            <span>→</span>
            <span>Processing</span>
            <span>→</span>
            <span>AI/ML</span>
            <span>→</span>
            <span>Insights</span>
            <span>→</span>
            <span>Visualization</span>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <span className="eyebrow">CityPulse</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

function MetricTile({ label, value, tone }) {
  return (
    <div className={`metric-tile ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default App
