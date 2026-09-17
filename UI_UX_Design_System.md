# CityPulse — UI/UX Design System & Implementation Plan

## Purpose

This document defines the visual design system and UI/UX implementation standards for the CityPulse frontend.

CityPulse is an AI-powered urban intelligence platform that combines city data, maps, analytics, alerts, and AI-generated insights into one coherent interface.

The goal is to make the frontend feel:

- Modern
- Professional
- Urban
- Data-driven
- Intelligent
- Clean
- Minimal
- Trustworthy
- Accessible
- Responsive
- Premium without being flashy

This file is intended to be given to an AI coding agent such as GitHub Copilot, Cursor, Claude Code, or another AI code editor.

---

# 1. IMPORTANT AI CODING AGENT RULES

Before making any changes:

1. Inspect the existing project structure.
2. Inspect the current frontend and styling architecture.
3. Identify existing reusable components.
4. Identify existing routes/pages.
5. Identify what is already functional.
6. Preserve existing working functionality.
7. Do not blindly rewrite the application.
8. Do not introduce unnecessary dependencies.
9. Do not modify backend functionality.
10. Keep the application runnable after implementation.

This is a UI/UX refinement and design-system implementation task.

DO NOT implement:

- Backend functionality
- Database functionality
- Authentication
- Real APIs
- AI/ML models
- Real-time processing

unless these already exist and a UI change requires preserving them.

Use existing mock data and functionality where available.

---

# 2. PRODUCT DESIGN DIRECTION

CityPulse should feel like a real urban intelligence platform rather than a generic AI SaaS dashboard.

## Desired visual characteristics

- Modern
- Professional
- Urban
- Data-driven
- Intelligent
- Clean
- Minimal
- Accessible
- Responsive
- Premium
- Trustworthy

The interface should communicate:

> City data → Visualization → Intelligence → Actionable understanding

## Avoid

Do NOT use:

- Excessive gradients
- Excessive glassmorphism
- Huge decorative elements
- Excessive animations
- Neon-heavy design
- Excessive purple
- Excessive rounded cards
- Cluttered dashboards
- Generic AI-generated dashboard patterns
- Decorative UI that competes with important data

Prioritize information hierarchy and usability over decoration.

---

# 3. CITYPULSE COLOR SYSTEM

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
