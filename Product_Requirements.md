# CityPulse — Product Requirements

## 1. Product Goal

**CityPulse** is an AI-powered civic issue reporting platform that allows citizens to report problems and helps authorities **identify, prioritize, track, and resolve** them efficiently.

---

## 2. User Roles

### Citizen
- Register/Login
- Report civic issues
- Upload photo
- Add location
- Track complaints
- View nearby issues
- Receive status updates
- Give feedback after resolution

### Authority
- Login to authority dashboard
- View all reported issues
- Filter/search issues
- View AI analysis and priority
- Verify reports
- Assign departments
- Update issue status
- Mark issues as resolved
- Upload resolution proof

---

## 3. Core Features

### Issue Reporting
- Title & description
- Category
- Photo upload
- Location/map
- Timestamp
- Unique Issue ID

### AI Analysis

AI should provide:
- Issue category
- Severity: Low / Medium / High / Critical
- Confidence score
- Short issue summary
- Priority score
- Potential duplicate detection

### Issue Tracking

```text
Reported → Verified → Assigned → In Progress → Resolved
```

### City Intelligence
- Total issues
- Pending/resolved issues
- Category distribution
- Issue trends
- High-priority issues
- Location-based hotspots
- Interactive issue map

---

## 4. Dashboards

### Citizen Dashboard
- Total reports
- Pending
- In Progress
- Resolved
- Recent reports
- **Report Issue** button

### Authority Dashboard
- Total issues
- High-priority issues
- Pending issues
- In Progress
- Resolved
- Issue table
- Filters & search
- Map & analytics

---

## 5. Database

Main collections:

```text
Users
Issues
Departments
Notifications
Feedback
```

---

## 6. Recommended Tech Stack

**Frontend:** React + Tailwind CSS  
**Backend:** Node.js + Express  
**Database:** MongoDB Atlas  
**AI:** AI API / Python AI service  
**Maps:** Leaflet + OpenStreetMap  
**Charts:** Recharts

---

## 7. Main Product Flow

```text
Citizen
   ↓
Report Issue
   ↓
AI Analysis
   ↓
Priority & Severity
   ↓
Authority Dashboard
   ↓
Verification & Assignment
   ↓
Resolution
   ↓
Citizen Feedback
```

---

## 8. MVP Priority

### Must Have
- Authentication
- Issue reporting
- Image + location
- AI classification/severity
- Issue tracking
- Authority dashboard
- Status updates
- Basic analytics/map

### Later
- Notifications
- Advanced AI
- Sophisticated hotspot prediction
- Government integrations
- Mobile app

---

## 9. Product Principle

The core CityPulse experience should focus on:

**Report → Analyze → Prioritize → Act → Resolve**

The AI should assist authorities with classification and prioritization while keeping final verification and actions under human control.
