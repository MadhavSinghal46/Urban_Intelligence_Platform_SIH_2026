# CityPulse — UI/UX Roadmap

## 1. UI/UX Vision

CityPulse is an urban intelligence and incident-monitoring platform that converts
real-world observations collected through bus-mounted cameras and on-board AI
detection into actionable information for authorized officials.

The UI should communicate this journey:

Bus Camera
    ↓
AI Detection
    ↓
Detection Event
    ↓
Central Intelligence
    ↓
Officials Dashboard
    ↓
Issue Investigation
    ↓
Actionable Decision

The interface should feel like a professional urban operations platform,
not a generic analytics dashboard.

---

# 2. Primary UX Goals

The Officials Web App should allow users to quickly understand:

1. WHAT was detected?
2. WHERE was it detected?
3. WHEN did it happen?
4. HOW serious is it?
5. WHICH bus/camera detected it?
6. WHAT other information supports the detection?
7. HOW can the official investigate the issue?

The UI should prioritize information clarity, geographic context,
incident investigation, and operational awareness.

---

# 3. Visual Design Direction

### Design Style

- Modern
- Professional
- Data-driven
- Urban intelligence
- Clean
- Minimal
- Operational
- Trustworthy
- Responsive

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Neon-heavy interfaces
- Decorative animations
- Huge visual elements
- Generic AI dashboard templates
- Unnecessary charts
- Excessive rounded cards

The design should resemble a modern civic/operations intelligence platform.

---

# 4. Color System

Use a dark-first interface for the Officials Web App.

### Base Colors

--color-bg-primary: #0B1220;
--color-bg-secondary: #111827;
--color-bg-card: #172033;
--color-bg-elevated: #1D293D;

### Brand Colors

--color-primary: #22D3EE;
--color-secondary: #3B82F6;

### Typography

--color-text-primary: #F8FAFC;
--color-text-secondary: #94A3B8;
--color-text-muted: #64748B;

### UI

--color-border: #263449;

### Status

--color-success: #22C55E;
--color-warning: #F59E0B;
--color-high: #F97316;
--color-critical: #EF4444;
--color-info: #3B82F6;

Use cyan/blue for the CityPulse identity.
Use semantic colors only for status and severity.

Do not use color alone to communicate severity.

---

# 5. Typography

Primary font:

Inter

Fallback:

Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Hierarchy

Page heading:
32–40px / 700

Section heading:
20–24px / 600

Card heading:
14–16px / 600

Body:
14–16px / 400

Secondary:
12–14px / 400

Important metrics:
28–36px / 700

Prioritize readability over oversized typography.

---

# 6. Spacing & Components

Use an 8px spacing system:

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64px

### Cards

- Padding: 20–24px
- Radius: 12–16px
- Border: 1px solid #263449

### Buttons

- Height: 40–44px
- Radius: 8–10px
- Horizontal padding: 16–20px

Use subtle hover, active, disabled and focus states.

---

# 7. Application Structure

The initial Officials Web App should contain:

1. Dashboard
2. Detection/Incident Feed
3. Issue Details
4. City Map
5. Reports/Analytics
6. About/System Information

Keep navigation focused.

Do not add unnecessary profile/settings/admin features during the
initial prototype unless specifically required.

---

# 8. Officials Dashboard

The dashboard is the main operational screen.

### Header

Display:

- City / operating area
- Current date/time
- System status
- Notifications/alerts
- User area if authentication is added later

### Main Overview

Show high-level operational information such as:

- Total detections
- Active/high-severity issues
- Recent detections
- Areas with increased incidents
- System/data status

Avoid filling the dashboard with unrelated indicators.

---

# 9. Detection / Incident Feed

Create a central feed of detection events.

Each detection should clearly display:

- Detection type
- Severity
- Location
- Timestamp
- Bus ID
- Camera/source
- Status
- Confidence where applicable

Example:

DETECTION

Road Obstruction

High

Central Zone

Bus CP-104

10:42 AM

Confidence: 91%

View Details →

The feed should be easy to scan and filter.

---

# 10. Detection Filters

Provide useful filtering controls.

Possible filters:

- Detection type
- Severity
- Location
- Date/time
- Bus ID
- Status

Example:

[All Types] [All Severity] [Location] [Date] [Bus ID]

Do not create excessive filtering controls.

---

# 11. Issue Details Page

When a detection is selected, the user should enter a dedicated investigation view.

Display:

### Detection Information

- Issue type
- Severity
- Confidence
- Timestamp
- Status

### Source Information

- Bus ID
- Camera/source
- Detection metadata

### Location

- Exact/approximate location
- Map position
- Nearby area information

### Evidence

Where available in the prototype:

- Detection image/frame
- Relevant visual evidence
- Detection metadata

### Supporting Information

- Related detections
- Historical occurrence
- Similar nearby incidents

Primary UX flow:

Detection
    ↓
View Details
    ↓
Evidence
    ↓
Location
    ↓
Context
    ↓
Actionable Understanding

---

# 12. City Map

The map is a major component of CityPulse.

It should visually communicate:

WHERE issues are occurring.

The map should eventually support:

- Detection markers
- Incident clusters
- Severity
- Bus locations/routes where available
- Issue categories
- Geographic filtering

Marker categories can include:

- Road/traffic issues
- Infrastructure issues
- Public safety issues
- Environmental issues
- Other detected urban issues

For the current frontend prototype, use mock/local map data
or a placeholder if a real map integration has not yet been implemented.

Design the component so a real map can be integrated later.

---

# 13. Map + Incident Interaction

The map and detection feed should feel connected.

Preferred interaction:

User clicks detection
    ↓
Issue details open
    ↓
Map focuses on location

Or:

User selects map marker
    ↓
Detection summary appears
    ↓
View Details

This creates a strong geographic investigation experience.

---

# 14. Reports & Analytics

Analytics should support operational understanding rather than exist
just to add charts.

Useful visualizations:

- Detection trends over time
- Detection categories
- Severity distribution
- Area-wise detections
- Bus-wise detections
- Incident frequency
- Historical comparison

Prioritize charts that answer meaningful questions.

Example:

"Which areas are experiencing the most detections?"

rather than showing charts without context.

---

# 15. AI / Intelligence Layer

AI should be presented as an intelligence layer built on detected data.

Avoid making CityPulse primarily look like a chatbot.

AI-generated information can appear as:

### Detection Insight

"Multiple road obstruction detections were recorded in Central Zone
during the evening period."

Show:

- Insight
- Supporting detection data
- Confidence
- Time period
- Location

AI information should always be visually connected to the underlying data.

Do not display unsupported or invented statistics.

---

# 16. System Status

Because the system depends on bus-mounted cameras, on-board AI,
local queues, internet connectivity and central processing, the UI
should eventually communicate system/data health.

Potential indicators:

- Data connection
- Last received detection
- Active buses
- Processing status
- Data freshness

For the prototype, these can use mock data.

Do not create complex monitoring screens unless required.

---

# 17. Responsive Design

The application must work on:

- Desktop
- Laptop
- Tablet
- Mobile

### Desktop

Prioritize:

Map + detection feed + overview information.

### Tablet

Reduce columns while preserving map and detection visibility.

### Mobile

Stack:

Overview
↓
Detection Feed
↓
Issue Details
↓
Map
↓
Analytics

Controls should remain touch-friendly.

---

# 18. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper labels
- Sufficient contrast
- Meaningful alt text
- Text/icon + color for severity

Do not rely only on colors for critical information.

---

# 19. Interaction Design

Use subtle interactions:

- Hover states
- Active states
- Focus states
- Expand/collapse
- Map marker interactions
- Card selection
- Smooth page transitions

Recommended transition:

150–250ms

Avoid excessive animation.

The application should feel responsive and operational.

---

# 20. Component System

Create reusable components where appropriate:

Navbar
Sidebar
Button
Card
StatCard
DetectionCard
SeverityBadge
StatusIndicator
MapContainer
DetectionList
FilterBar
InsightCard
ChartCard
IssueDetails
SectionHeader
EmptyState
LoadingState
ErrorState

Use props and reusable data structures.

Do not duplicate UI markup unnecessarily.

---

# 21. Loading, Empty & Error States

Every data-driven section should eventually support:

### Loading

Loading detections...

### Empty

No detections found.

### Error

Unable to load detection data.
Try again.

Never leave large blank sections without explanation.

---

# 22. Mock Data Strategy

The frontend prototype should use structured mock data.

Example:

```javascript
const detection = {
  id: "DET-001",
  type: "Road Obstruction",
  severity: "High",
  confidence: 91,
  busId: "CP-104",
  location: "Central Zone",
  timestamp: "10:42 AM",
  status: "Active"
};
Create a centralized color-token system using CSS variables.

Do not scatter hard-coded colors throughout the codebase.

## Core colors

```css
:root {
  --color-bg-primary: #0B1220;
  --color-bg-secondary: #111827;
  --color-bg-card: #172033;
  --color-bg-elevated: #1D293D;

  --color-primary: #22D3EE;
  --color-secondary: #3B82F6;

  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;

  --color-border: #263449;

  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-high: #F97316;
  --color-critical: #EF4444;
  --color-info: #3B82F6;
  --color-ai: #8B5CF6;
}
```

## Color usage

### Primary background

`#0B1220`

Use for the main application background.

### Secondary background

`#111827`

Use for secondary sections, navigation areas, or contrasting containers.

### Card background

`#172033`

Use for dashboard cards and information containers.

### Elevated background

`#1D293D`

Use sparingly for dropdowns, elevated cards, active panels, or important UI surfaces.

### Primary accent

`#22D3EE`

Use primarily for:

- Primary CTA
- Active navigation
- Important data highlights
- Selected states
- Map highlights
- Interactive elements

Do not make the entire interface cyan.

### Secondary accent

`#3B82F6`

Use for:

- Information
- Secondary actions
- Data visualization
- Interactive map elements
- Supporting highlights

---

# 4. SEMANTIC COLORS

CityPulse uses severity levels.

```text
Stable / Good     → #22C55E
Moderate / Warning → #F59E0B
High              → #F97316
Critical          → #EF4444
Information       → #3B82F6
AI / Intelligence → #8B5CF6
```

Always pair colors with:

- Text labels
- Icons
- Status indicators

Never rely on color alone to communicate severity.

Example:

```text
● Stable
● Moderate
● High
● Critical
```

---

# 5. TYPOGRAPHY

Use **Inter** as the primary font.

If Inter is not already available, use:

```css
font-family:
  Inter,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

## Typography hierarchy

### Page heading

```text
32–40px
font-weight: 700
line-height: 1.2
```

### Section heading

```text
20–24px
font-weight: 600
```

### Card heading

```text
14–16px
font-weight: 600
```

### Body

```text
14–16px
font-weight: 400
line-height: 1.5
```

### Secondary text

```text
12–14px
font-weight: 400
```

### KPI / metric value

```text
28–36px
font-weight: 700
```

The metric value should be visually stronger than its supporting text.

Example:

```text
AIR QUALITY

82

Moderate
↑ 6% from yesterday
```

---

# 6. SPACING SYSTEM

Use an 8px spacing system.

Preferred values:

```text
4px
8px
12px
16px
24px
32px
48px
64px
```

## Guidelines

Icon/text gap:

`8px`

Normal component spacing:

`16px`

Card padding:

`20–24px`

Section spacing:

`32–48px`

Major page sections:

`48–64px`

Avoid arbitrary spacing unless required for a specific layout.

---

# 7. BORDER RADIUS

Use restrained corner radii.

```text
Small controls: 8px
Buttons: 8–10px
Cards: 12–16px
Large containers: 16px
```

Avoid extremely rounded cards such as 30px+.

The UI should feel structured and professional.

---

# 8. BORDERS AND ELEVATION

Use subtle borders:

```css
border: 1px solid #263449;
```

Prefer layered surfaces over heavy shadows.

Use:

- Background contrast
- Subtle borders
- Small elevation differences

Avoid making every card appear to float.

---

# 9. BUTTON SYSTEM

Create a consistent button system.

## Primary button

Characteristics:

- Primary cyan/blue accent
- High contrast
- 40–44px height
- 8–10px border radius
- 16–20px horizontal padding
- Clear hover state
- Clear active state
- Clear disabled state
- Visible keyboard focus state

Example:

```text
Explore CityPulse →
```

## Secondary button

Characteristics:

- Dark/transparent background
- Subtle border
- Primary text
- Same basic dimensions as primary button

Example:

```text
View Details
```

## Tertiary button

Text-only with minimal visual weight.

Example:

```text
View all →
```

Recommended transition:

`150–250ms`

---

# 10. CARD SYSTEM

Use a consistent card foundation.

```css
background: #172033;
border: 1px solid #263449;
border-radius: 12px–16px;
padding: 20px–24px;
```

Create visual hierarchy between:

1. Primary metric cards
2. Secondary information cards
3. Chart cards
4. Alert cards
5. AI insight cards

Do not make every card look identical.

---

# 11. CITYPULSE AI VISUAL LANGUAGE

AI should have a subtle visual identity.

Use:

```css
--color-ai: #8B5CF6;
```

Use AI styling for:

- AI Insights
- AI-generated explanations
- Confidence indicators
- Intelligent analysis

Do not make the entire website purple.

Use subtle elements such as:

```text
✦ AI INSIGHT
```

Example:

```text
✦ AI INSIGHT

Traffic congestion increased
18% in the Central Zone.

Medium severity
87% confidence

View details →
```

The AI should feel like an intelligence layer over city data, not a chatbot pasted onto the dashboard.

---

# 12. NAVIGATION

Keep the initial navigation simple:

```text
CityPulse

Dashboard
Insights
Alerts
About
```

Do not add unnecessary navigation items.

Active navigation should use the primary cyan accent subtly.

Navigation must be:

- Clean
- Compact
- Easy to scan
- Responsive
- Accessible

On mobile, use an appropriate mobile navigation pattern.

---

# 13. DASHBOARD INFORMATION HIERARCHY

The dashboard is the primary application interface.

Prioritize:

```text
1. City overview/status
2. Key indicators
3. Map
4. AI insights
5. Charts
6. Alerts
```

The user should quickly understand:

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

Do not create a dashboard that feels like a collection of unrelated cards.

---

# 14. DASHBOARD LAYOUT

Recommended desktop structure:

```text
Header
    ↓
City overview/status
    ↓
Key metric cards
    ↓
Large map + AI insights
    ↓
Charts + alerts
```

Suggested visual structure:

```text
┌──────────────────────────────────────────────────────┐
│ CityPulse   Dashboard  Insights  Alerts  About      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ City Overview                         Date / Status │
│                                                      │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────────┐ │
│ │   AQI   │ │ Traffic │ │ Weather │ │   Alerts   │ │
│ │   82    │ │Moderate │ │  29°C   │ │     03     │ │
│ └─────────┘ └─────────┘ └─────────┘ └────────────┘ │
│                                                      │
│ ┌──────────────────────────┐ ┌────────────────────┐ │
│ │                          │ │                    │ │
│ │         CITY MAP         │ │    AI INSIGHTS     │ │
│ │                          │ │                    │ │
│ └──────────────────────────┘ └────────────────────┘ │
│                                                      │
│ ┌──────────────────────────┐ ┌────────────────────┐ │
│ │       CITY TRENDS        │ │   ACTIVE ALERTS    │ │
│ │          Chart           │ │                    │ │
│ └──────────────────────────┘ └────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

The map should be one of the visual anchors of the application.

---

# 15. KPI / INDICATOR CARDS

Major indicators should have strong hierarchy.

Initial indicators:

- Air Quality
- Traffic
- Weather
- Active Alerts

Example:

```text
AIR QUALITY

82

Moderate

↑ 6% from yesterday
```

Display:

- Main value
- Status
- Trend
- Last updated information where appropriate

The main metric should be the strongest visual element.

---

# 16. MAP UI

The map is a major visual anchor.

If the project currently uses a placeholder, improve the map container without introducing unnecessary map dependencies.

Design the container so a real map can later be integrated without redesigning the page.

Eventually the map may support:

- Traffic
- Pollution
- Weather
- Infrastructure
- Public Safety
- Other urban events

Use clear visual differentiation between categories.

---

# 17. AI INSIGHT CARDS

Each insight should communicate:

- Category
- Title
- Description
- Severity
- Confidence
- Location
- Timestamp
- Relevant metric
- View details action

Example:

```text
✦ AI INSIGHT

Traffic congestion has increased
in the Central Zone during evening hours.

Severity: Medium
Confidence: 87%

View details →
```

Keep the card readable and avoid unnecessary decoration.

---

# 18. ALERT UI

Alerts must be immediately scannable.

Each alert should communicate:

- Category
- Severity
- Location
- Description
- Timestamp
- Status

Severity hierarchy:

```text
Low
Medium
High
Critical
```

Critical alerts should receive stronger visual emphasis.

Do not make low-priority alerts visually compete with critical alerts.

---

# 19. CHART UI

Charts should communicate information rather than act as decoration.

Use:

- Minimal gridlines
- Clear labels
- Consistent typography
- Consistent spacing
- Tooltips where appropriate
- Accessible legends
- CityPulse color system

Avoid excessive colors.

Recommended visualization types:

- Time-series
- Bar charts
- Distribution charts
- Trend indicators

---

# 20. RESPONSIVE DESIGN

The application must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not simply shrink the desktop layout.

Create intentional responsive layouts.

## Desktop

Use multi-column layouts.

## Tablet

Reduce columns intelligently.

## Mobile

Stack major sections vertically.

Example:

```text
City status
↓
Metric card
↓
Metric card
↓
Metric card
↓
Alerts
↓
Map
↓
AI insights
↓
Charts
```

Cards should remain readable and touch-friendly.

---

# 21. INTERACTION DESIGN

Use subtle interactions only when they improve usability.

Include:

- Hover states
- Active states
- Focus states
- Clear clickable affordances
- Short smooth transitions

Recommended transition duration:

`150–250ms`

Avoid:

- Excessive animations
- Long transitions
- Decorative motion
- Constant pulsing
- Unnecessary parallax effects

---

# 22. ACCESSIBILITY

Implement:

- Semantic HTML
- Accessible buttons
- Proper labels
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Meaningful alt text
- Status communicated through text/icons as well as color

Do not sacrifice accessibility for visual appearance.

---

# 23. ICON SYSTEM

If an icon library is already present, reuse it.

If icons are needed and no existing solution is available, prefer **Lucide React** rather than introducing multiple icon libraries.

Suggested icon language:

```text
Air Quality  → Wind
Traffic      → Car / Route
Weather      → CloudSun
Alerts       → TriangleAlert
Insights     → Sparkles
Map          → Map
Analytics    → Chart
Settings     → Settings
```

Use one consistent icon style.

Do not mix multiple icon families.

---

# 24. REUSABLE COMPONENTS

Reuse existing components wherever possible.

Potential reusable components:

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

Do not create abstractions that are unnecessary for the current application.

---

# 25. CSS / DESIGN TOKEN ARCHITECTURE

Centralize the following:

- Colors
- Typography
- Spacing
- Border radius
- Elevation
- Transitions

Prefer:

```css
var(--color-primary)
```

instead of repeatedly writing:

```css
#22D3EE
```

This ensures future visual changes can be made from one location.

Use the styling architecture already present in the project where practical.

Do not introduce a new CSS framework solely for this task unless absolutely necessary.

---

# 26. VISUAL QUALITY RULES

The final interface should:

- Have clear information hierarchy.
- Have consistent spacing.
- Have consistent typography.
- Have consistent card styles.
- Have consistent button styles.
- Use color intentionally.
- Keep important metrics visually dominant.
- Make alerts easy to scan.
- Make AI insights recognizable.
- Make the map visually important.
- Avoid visual clutter.
- Feel like one coherent product.

The result should not look like a collection of independently generated pages.

---

# 27. IMPLEMENTATION ORDER

Implement the UI/UX system in this order:

## Step 1 — Inspect

Inspect:

- Project structure
- Existing pages
- Existing components
- Existing CSS
- Existing routes
- Existing dependencies

Do not modify anything yet.

## Step 2 — Global design system

Implement:

- Color tokens
- Typography
- Spacing
- Radius
- Borders
- Transitions
- Base styles

## Step 3 — Navigation

Refine:

- Navbar
- Active states
- Buttons
- Responsive navigation

## Step 4 — Landing page

Refine:

- Hero
- Section hierarchy
- Feature presentation
- CTA
- Footer

## Step 5 — Dashboard

Refine:

- Header
- City status
- Metric cards
- Map container
- AI insights
- Charts
- Alerts

## Step 6 — Insights

Refine:

- Insight cards
- Severity indicators
- Confidence
- Detail views

## Step 7 — Alerts

Refine:

- Alert cards
- Severity hierarchy
- Filtering UI if already present

## Step 8 — Responsive polish

Test:

- Desktop
- Laptop
- Tablet
- Mobile

## Step 9 — Accessibility and interaction polish

Check:

- Keyboard navigation
- Focus states
- Contrast
- Hover states
- Active states
- Disabled states

## Step 10 — Final visual consistency pass

Check every page for:

- Same colors
- Same typography
- Same spacing
- Same component behavior
- Same icon style
- Same interaction language

---

# 28. DO NOT BREAK EXISTING FUNCTIONALITY

Before changing a component, understand what it currently does.

Preserve:

- Existing routes
- Existing navigation
- Existing mock data
- Existing functional interactions
- Existing page structure where practical

If an existing implementation already works, improve its styling instead of replacing its logic.

---

# 29. DEPENDENCY RULE

Do not install packages unnecessarily.

If a new dependency is genuinely required:

1. Explain why it is needed.
2. Check whether the functionality can be implemented using existing dependencies.
3. Prefer lightweight and established solutions.

Do not install multiple UI libraries.

---

# 30. FINAL VERIFICATION

After implementation:

1. Run the application.
2. Check for build errors.
3. Check browser console for avoidable errors.
4. Test all existing routes.
5. Test navigation.
6. Test responsive layouts.
7. Test buttons and interactive elements.
8. Verify text contrast.
9. Verify keyboard focus.
10. Verify no existing functionality was broken.

---

# 31. FINAL REPORT

After completing the task, provide:

```text
Files created:
- ...

Files modified:
- ...

Dependencies added:
- ...

Design system implemented:
- ...

Components updated:
- ...

Responsive improvements:
- ...

Accessibility improvements:
- ...

Known issues:
- ...

Next recommended UI/UX step:
- ...
```

Do not claim a feature was implemented unless it actually exists in the codebase.

---

# 32. DEFINITION OF DONE

The UI/UX implementation is complete when:

- The application runs without errors.
- Existing routes still work.
- Existing functionality is preserved.
- The CityPulse color system is implemented consistently.
- Typography is consistent.
- Spacing is consistent.
- Cards are consistent.
- Buttons are consistent.
- Navigation is consistent.
- AI elements have a subtle visual identity.
- Alert severity is immediately understandable.
- Dashboard hierarchy is clear.
- Map is visually important.
- Responsive layouts work.
- Keyboard focus is visible.
- Contrast is sufficient.
- Avoidable console errors are resolved.
- The interface does not look like a generic AI-generated template.

---

# 33. CORE DESIGN PRINCIPLE

Always remember:

> CityPulse is not a dashboard full of charts.

It is an urban intelligence platform.

The interface should guide the user through:

```text
CITY DATA
    ↓
WHAT IS HAPPENING?
    ↓
WHERE IS IT HAPPENING?
    ↓
HOW SERIOUS IS IT?
    ↓
WHAT PATTERN IS VISIBLE?
    ↓
WHAT DOES THE AI INFER?
    ↓
ACTIONABLE UNDERSTANDING
```

Every UI decision should support this journey.
