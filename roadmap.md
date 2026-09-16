# CityPulse — AI-Powered Urban Intelligence Platform

> **Purpose:** Master development roadmap for AI coding agents such as GitHub Copilot, Cursor, Claude Code, etc.
>
> **Current priority:** Build the frontend-first prototype. Backend, data processing, and AI/ML integrations will be connected progressively.

---

# 1. Project Overview

## What is CityPulse?

**CityPulse** is an AI-powered urban intelligence platform designed to transform diverse city-level information into a simple, visual, and actionable interface.

The platform collects/receives urban data, processes it through data-processing and AI/ML components, identifies important patterns or anomalies, and presents the results through an intuitive dashboard.

The objective is to help users understand:

- What is happening in the city?
- Where is it happening?
- Why might it be happening?
- How serious is it?
- What areas are affected?
- What insights can be derived from the available data?

CityPulse should ultimately function as a **central intelligence layer for urban information**.

---

# 2. Core Product Vision

CityPulse should not feel like a collection of unrelated charts.

The application should follow this flow:

```text
                 CITY DATA
                     │
                     ▼
          ┌─────────────────────┐
          │   Data Processing   │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │     AI / ML Layer   │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │     CityPulse UI    │
          └──────────┬──────────┘
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Dashboard   Map       Insights
```

The user should be able to move from:

**Raw information → Visualization → AI insight → Actionable understanding**

---

# 3. Development Philosophy

The project will be developed in phases.

## Important rules for AI coding agents

1. Do not build the entire application blindly in one step.
2. Complete one development phase at a time.
3. Inspect existing files before modifying them.
4. Do not overwrite existing working code unnecessarily.
5. Do not introduce unnecessary libraries.
6. Keep frontend, backend, AI/ML, and data-processing logic modular.
7. Use mock data until real APIs/data sources are connected.
8. Design components so mock data can later be replaced with API data.
9. Keep the application runnable after every major phase.
10. Prioritize a polished working prototype over unnecessary features.

---

# 4. Technology Stack

## Frontend

- React.js
- Vite
- JavaScript
- React Router
- CSS / modern CSS architecture

Optional libraries may be introduced later when required:

- Recharts — charts
- Leaflet / React Leaflet — maps
- Lucide React — icons
- Axios — API requests

Do not install every library at the beginning.

---

## Backend

Later phase:

- Node.js
- Express.js
- REST APIs

---

## AI / ML

Python-based AI/ML services may be introduced when required.

Potential technologies:

- Python
- FastAPI
- Pandas
- NumPy
- Scikit-learn
- Other ML libraries depending on the final model

The AI/ML layer should remain independent from the React frontend.

---

## Database

Potential:

- MongoDB

The exact database structure should be finalized when backend development begins.

---

# 5. Application Architecture

Target architecture:

```text
CityPulse/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── data/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── ai/
│   ├── models/
│   ├── services/
│   ├── preprocessing/
│   ├── prediction/
│   └── main.py
│
└── README.md
```

**Do not create all folders immediately.**

Create folders only when the corresponding development phase begins.

---

# 6. Frontend Product Structure

The frontend should contain these major sections.

## Public Pages

### 1. Landing Page

Route:

```text
/
```

Purpose:

Introduce CityPulse and communicate the problem and solution.

Sections:

- Navbar
- Hero section
- CityPulse introduction
- Core capabilities
- How CityPulse works
- AI/ML intelligence section
- Urban data visualization preview
- Call to action
- Footer

Primary CTA:

```text
Explore CityPulse
```

---

# 7. Dashboard

Route:

```text
/dashboard
```

This is the primary application interface.

## Dashboard structure

### Header

Display:

- City/location
- Current date/time
- Dashboard title
- Notification/alert indicator
- User/profile area if authentication is introduced later

---

## Overall City Status

Create a prominent summary section.

Example:

```text
CITY STATUS

Overall Status
● Stable

Air Quality
Good

Traffic
Moderate

Weather
Clear

Active Alerts
03
```

All values should initially come from mock data.

---

# 8. Urban Indicator Cards

Create reusable cards for major indicators.

Initial indicators:

### Air Quality

Display:

- AQI
- AQI category
- Trend
- Last updated

Example:

```text
AQI
82
Moderate
↑ 6% from yesterday
```

---

### Traffic

Display:

- Current traffic condition
- Congestion level
- Trend
- Affected areas

---

### Weather

Display:

- Temperature
- Condition
- Humidity
- Wind
- Weather alert if applicable

---

### Active Alerts

Display:

- Number of active alerts
- Severity
- Location
- Time

---

# 9. City Map

The dashboard should contain a large map visualization.

Initially:

Use a placeholder or static map component.

Later:

Integrate:

- Leaflet / OpenStreetMap or another suitable map solution
- Location markers
- Alert markers
- Pollution zones
- Traffic zones
- Infrastructure issues
- Other relevant urban events

Possible marker categories:

```text
Traffic
Pollution
Weather
Infrastructure
Public Safety
Other
```

Use different visual indicators for different categories.

---

# 10. Data Visualization

The dashboard should contain charts that make city trends understandable.

Possible charts:

### Time-series chart

Examples:

- AQI over time
- Traffic over time
- Temperature over time

### Bar chart

Examples:

- Area-wise pollution
- Area-wise traffic
- Number of incidents

### Distribution chart

Examples:

- Alert categories
- Severity distribution

### Trend indicators

Show:

```text
↑ Increasing
↓ Decreasing
→ Stable
```

Charts must use reusable data structures.

---

# 11. AI Insights

Route:

```text
/insights
```

This section presents insights generated by the AI/ML layer.

Initially use mock AI-generated insights.

Example:

```text
Traffic Insight

Traffic congestion has increased
in the central zone during evening
hours compared with the previous period.

Severity: Medium
Confidence: 87%
```

---

## Insight categories

Initial categories:

- Traffic
- Air Quality
- Weather
- Infrastructure
- Public Safety
- General Urban Trends

---

## Insight Card

Every insight should contain:

- Category
- Title
- Description
- Severity
- Confidence
- Location
- Timestamp
- Relevant metric
- View details

---

# 12. Insight Details

When the user clicks an insight:

Display:

- Full explanation
- Affected location
- Relevant metrics
- Historical comparison
- Possible contributing factors
- AI confidence
- Related alerts
- Map location

Example flow:

```text
Insight
   ↓
View Details
   ↓
Detailed Explanation
   ↓
Supporting Data
   ↓
Location on Map
```

---

# 13. Alerts System

Create a dedicated alerts interface.

Alerts should have:

- Title
- Category
- Severity
- Location
- Description
- Timestamp
- Status

Severity levels:

```text
Low
Medium
High
Critical
```

Initially, alerts are mock data.

Later they can be generated dynamically from backend/AI results.

---

# 14. Historical Analysis

CityPulse should eventually allow users to understand changes over time.

Possible controls:

```text
Today
7 Days
30 Days
Custom Range
```

Users should be able to compare:

- Current vs previous period
- Area vs area
- Indicator vs indicator

This feature can initially use mock historical data.

---

# 15. About Page

Route:

```text
/about
```

Sections:

### About CityPulse

Explain the platform.

### Problem

Explain the challenge of fragmented urban information.

### Solution

Explain how CityPulse combines data processing, visualization, and AI.

### How It Works

```text
Data
 ↓
Processing
 ↓
AI/ML
 ↓
Insights
 ↓
Visualization
```

### Technology

Display the technologies used by the project.

### Team

Add project team information later.

---

# 16. Navigation

Primary navigation:

```text
CityPulse

Dashboard
Insights
Alerts
About
```

Optional later:

```text
Analytics
Settings
Profile
```

Do not add unnecessary navigation items during the initial prototype.

---

# 17. Design System

CityPulse should have a consistent visual identity.

## Design characteristics

- Modern
- Professional
- Data-driven
- Urban
- Clean
- Minimal
- Accessible
- Responsive

Avoid:

- Excessive gradients
- Excessive animations
- Huge decorative elements
- Unnecessary glassmorphism
- Cluttered dashboards
- Generic template appearance

---

# 18. Reusable Components

Create reusable components when needed.

Initial components:

```text
Navbar
Footer
Button
Card
StatCard
MetricCard
AlertCard
InsightCard
ChartCard
MapContainer
Badge
StatusIndicator
SectionHeader
```

Components should accept props instead of duplicating markup.

Example:

```jsx
<StatCard
  title="Air Quality"
  value="82"
  status="Moderate"
  trend="+6%"
/>
```

---

# 19. Mock Data Architecture

During frontend development, use structured mock data.

Example:

```javascript
const cityStats = {
  airQuality: {
    value: 82,
    status: "Moderate",
    trend: 6
  },

  traffic: {
    status: "Moderate",
    congestion: 61,
    trend: 4
  },

  weather: {
    temperature: 29,
    condition: "Clear"
  }
};
```

Do not scatter fake values throughout JSX.

This will make future API integration easier.

---

# 20. Frontend Data Flow

Initial:

```text
Mock Data
     ↓
React Components
     ↓
Dashboard
```

Later:

```text
Backend API
     ↓
Axios / Fetch
     ↓
React Services
     ↓
State
     ↓
Components
```

Eventually:

```text
Data Sources
     ↓
Backend
     ↓
AI/ML Processing
     ↓
API
     ↓
Frontend
     ↓
Dashboard / Map / Insights
```

---

# 21. Backend Phase

After the frontend prototype is stable, create the backend.

Responsibilities:

- API endpoints
- Data processing
- Database communication
- AI/ML communication
- Alert generation
- Insight management

Example API structure:

```text
GET /api/city/overview
GET /api/city/indicators
GET /api/alerts
GET /api/insights
GET /api/traffic
GET /api/air-quality
GET /api/weather
```

The exact endpoints can be finalized during implementation.

---

# 22. Database Phase

When backend development begins, create models for relevant entities.

Potential collections:

```text
users
cityData
alerts
insights
locations
historicalData
```

Do not create unnecessary database models.

---

# 23. AI/ML Phase

The AI/ML system should not simply be a chatbot.

It should provide meaningful urban intelligence.

Potential capabilities:

### Anomaly Detection

Identify unusual changes in:

- Traffic
- AQI
- Weather
- Other urban indicators

---

### Trend Detection

Identify patterns such as:

```text
Traffic consistently increases
between 6 PM and 8 PM.
```

---

### Risk Classification

Classify detected situations:

```text
Low
Medium
High
Critical
```

---

### Predictive Analysis

Where sufficient data exists, predict possible future trends.

Example:

```text
Expected traffic congestion
during evening hours.
```

---

### AI Insight Generation

Convert processed data into understandable explanations.

Example:

```text
Traffic congestion in Zone A increased
by 18% compared with the previous week.
The increase is concentrated between
6 PM and 8 PM.
```

AI-generated explanations must be grounded in available data.

Do not allow the AI to invent statistics.

---

# 24. AI Service Architecture

Potential architecture:

```text
Backend
   │
   ├── Data
   │
   └── AI Service
          │
          ├── Preprocessing
          ├── ML Model
          ├── Anomaly Detection
          ├── Prediction
          └── Insight Generation
```

If Python is required:

```text
Node/Express Backend
        │
        ▼
Python AI Service
        │
        ▼
Prediction / Analysis
        │
        ▼
Backend API
        │
        ▼
React Frontend
```

---

# 25. API Integration Phase

Replace mock data progressively.

Do NOT replace the entire frontend at once.

Recommended order:

```text
1. City overview
2. Indicators
3. Alerts
4. Historical data
5. Map data
6. AI insights
7. Predictions
```

Every integration should be tested before moving to the next one.

---

# 26. Loading & Error States

Every API-driven component must eventually handle:

### Loading

```text
Loading city data...
```

### Error

```text
Unable to load city data.
Try again.
```

### Empty

```text
No active alerts found.
```

Never leave blank screens when data is unavailable.

---

# 27. Responsive Design

The application must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Dashboard behavior:

Desktop:

```text
[ Card ][ Card ][ Card ][ Card ]

[       Map        ][ Insights ]

[      Charts      ][ Alerts   ]
```

Mobile:

```text
[ Card ]

[ Card ]

[ Card ]

[ Map ]

[ Insights ]

[ Charts ]

[ Alerts ]
```

---

# 28. Accessibility

Implement:

- Semantic HTML
- Accessible buttons
- Proper labels
- Keyboard navigation
- Sufficient contrast
- Meaningful alt text
- Visible focus states

Do not rely only on color to communicate severity.

---

# 29. Performance

Keep the prototype lightweight.

Avoid:

- Unnecessary dependencies
- Huge images
- Excessive animations
- Repeated API calls
- Unnecessary re-renders

Optimize map and chart rendering when required.

---

# 30. Security

When backend development begins:

- Never expose API keys in frontend code.
- Use environment variables.
- Validate API input.
- Sanitize user-controlled data.
- Use proper authentication if authentication is required.
- Never commit `.env` files containing secrets.

---

# 31. Development Phases

## Phase 1 — Project Initialization

Tasks:

- [ ] Initialize React + Vite
- [ ] Configure basic project
- [ ] Run development server
- [ ] Establish Git repository workflow

---

## Phase 2 — Frontend Foundation

Tasks:

- [ ] Navbar
- [ ] Footer
- [ ] Routing
- [ ] Global styling
- [ ] Design system
- [ ] Responsive layout

---

## Phase 3 — Landing Page

Tasks:

- [ ] Hero
- [ ] Introduction
- [ ] Features
- [ ] How it works
- [ ] CTA
- [ ] Footer

---

## Phase 4 — Dashboard UI

Tasks:

- [ ] Dashboard layout
- [ ] City overview
- [ ] Indicator cards
- [ ] Alerts
- [ ] Insights
- [ ] Charts
- [ ] Map placeholder
- [ ] Mock data

---

## Phase 5 — Insights & Alerts

Tasks:

- [ ] Insights page
- [ ] Insight cards
- [ ] Insight details
- [ ] Alerts page
- [ ] Severity indicators
- [ ] Filtering

---

## Phase 6 — Map

Tasks:

- [ ] Map library
- [ ] City location
- [ ] Markers
- [ ] Categories
- [ ] Popup/details
- [ ] Basic filtering

---

## Phase 7 — Historical Analytics

Tasks:

- [ ] Time ranges
- [ ] Historical charts
- [ ] Comparisons
- [ ] Trend indicators

---

## Phase 8 — Backend

Tasks:

- [ ] Express server
- [ ] API routes
- [ ] Controllers
- [ ] Services
- [ ] Database connection
- [ ] Data models

---

## Phase 9 — Data Integration

Connect appropriate city data sources.

Potential categories:

```text
Weather
Air Quality
Traffic
Infrastructure
Public Safety
Other relevant datasets
```

Only integrate data sources that are actually available and appropriate for the prototype.

---

## Phase 10 — AI/ML

Implement:

- [ ] Data preprocessing
- [ ] Anomaly detection
- [ ] Trend analysis
- [ ] Classification
- [ ] Prediction where feasible
- [ ] AI insight generation

---

## Phase 11 — Full Integration

Connect:

```text
Frontend
   ↕
Backend
   ↕
Database
   ↕
AI/ML
   ↕
Data Sources
```

Replace remaining mock data.

---

## Phase 12 — Testing

### Frontend

- [ ] Navigation
- [ ] Responsive layout
- [ ] Components
- [ ] Forms
- [ ] Charts
- [ ] Maps

### Backend

- [ ] API responses
- [ ] Validation
- [ ] Error handling

### AI

- [ ] Model outputs
- [ ] Invalid inputs
- [ ] Edge cases
- [ ] Prediction behavior

### Integration

- [ ] Frontend ↔ Backend
- [ ] Backend ↔ Database
- [ ] Backend ↔ AI

---

# 32. Prototype Priority

For the SIH prototype, prioritize a strong end-to-end demonstration.

The minimum convincing flow should be:

```text
Landing Page
      ↓
Dashboard
      ↓
City Data
      ↓
Map / Visualization
      ↓
Detected Issue
      ↓
AI Insight
      ↓
Detailed Explanation
```

The prototype should demonstrate the **complete concept**, even if some data sources are mocked or limited.

---

# 33. MVP Feature Set

- [ ] Professional landing page
- [ ] Responsive dashboard
- [ ] City overview
- [ ] Air quality indicator
- [ ] Traffic indicator
- [ ] Weather indicator
- [ ] Active alerts
- [ ] City map
- [ ] Charts
- [ ] AI insights page
- [ ] Insight details
- [ ] Historical visualization
- [ ] About page
- [ ] Mock data architecture
- [ ] API-ready frontend architecture

---

# 34. Future Features

These should NOT be implemented until the core prototype is stable.

Potential future features:

- User authentication
- Personalized dashboards
- Notifications
- Real-time updates
- Advanced prediction
- Multiple city comparison
- Citizen reporting
- Admin dashboard
- Government/authority dashboard
- Mobile application
- Multilingual interface
- Voice-based interaction
- Advanced AI assistant
- Automated recommendations

---

# 35. Coding Agent Rules

When working on this project, the AI coding agent must follow these rules:

### Rule 1
Always inspect the current project before modifying it.

### Rule 2
Implement only the requested phase.

### Rule 3
Do not build backend functionality while working on frontend unless explicitly requested.

### Rule 4
Do not create fake APIs and pretend they are real.

### Rule 5
Use mock data explicitly when real data is unavailable.

### Rule 6
Keep code modular and reusable.

### Rule 7
Do not unnecessarily rewrite existing components.

### Rule 8
Do not install packages without explaining why they are required.

### Rule 9
After implementation, verify that the application runs.

### Rule 10
Report:

```text
Files created
Files modified
Dependencies added
Features implemented
Known issues
Next recommended step
```

---

# 36. Current Development Instruction

## CURRENT PHASE: FRONTEND

The project is currently in the frontend development phase.

The immediate objective is:

```text
Build a polished CityPulse frontend
using React + Vite.
```

Start with:

```text
1. React/Vite foundation
2. Routing
3. Global styling
4. Navbar
5. Landing page
6. Dashboard
7. Insights
8. Alerts
9. Map placeholder
10. Responsive design
```

Use mock data.

Do not implement:

```text
Backend
Database
Authentication
AI/ML model
Real APIs
Real-time processing
```

until explicitly instructed.

---

# 37. Definition of Done

A phase is considered complete only when:

- The application runs without errors.
- The requested functionality works.
- Navigation works.
- UI is responsive.
- Console has no avoidable errors.
- Components are reasonably reusable.
- Existing functionality has not been broken.
- The code is organized for the next development phase.

---

# 38. Final Product Vision

The final CityPulse experience should communicate:

> **One platform. One city view. Intelligent insights from complex urban data.**

The user should be able to open CityPulse and immediately understand:

```text
WHAT is happening?
        ↓
WHERE is it happening?
        ↓
HOW SERIOUS is it?
        ↓
WHAT PATTERN is visible?
        ↓
WHAT does the AI infer?
```

CityPulse should ultimately combine:

**Data + Maps + Analytics + AI/ML + Visualization**

into one coherent urban intelligence platform.
