CityPulse — Complete Project Roadmap

1. Project Overview

CityPulse is an AI-powered urban road and infrastructure monitoring system that uses cameras installed on public buses to automatically detect road-related issues while the buses travel through the city.

The system has three main components:

1. On-Board AI system — detects issues using YOLO.


2. Central Server — receives, stores, and processes detection data.


3. Officials Web App — allows authorities to monitor and manage detected issues.



External applications can also access authorized CityPulse APIs.


---

2. System Architecture
```
CITYPULSE
                       │
        ┌──────────────┴──────────────┐
        │                             │
       BUS                      CENTRAL SERVER
        │                             │
     Camera                          API
        ↓                             │
   On-Board AI                       Database
    (YOLO)                           Storage
        ↓                             │
 Detection Event                Data Processing
        ↓                             │
 GPS + Timestamp + Bus ID             │
        ↓                             │
   Local Queue                        │
        │                             │
        └──────── Internet ───────────┘
                                      │
                         ┌────────────┴────────────┐
                         ↓                         ↓
                 Officials Web App          External APIs

```

---

3. On-Board AI System

The bus acts as a mobile sensing platform.

Workflow
```
Camera → YOLO → Detection → GPS + Timestamp + Bus ID
                    ↓
               Local Queue
                    ↓
               Central Server
```
Responsibilities

Capture road images/video

Detect road issues using YOLO

Generate detection events

Attach location and time information

Store evidence

Queue events during internet failure

Upload queued events when connectivity returns


Possible Detection Classes

Potholes

Road damage/cracks

Obstructions

Open manholes

Other infrastructure issues


Technology: Python, YOLO, OpenCV, GPS, Edge Device.


---

4. Central Server & Backend

The Central Server is the core communication and data layer of CityPulse.

Responsibilities

Receive detection events from buses

Authenticate and validate devices

Store detection data

Store evidence images/videos

Process and aggregate detections

Provide analytics

Manage maintenance information

Provide APIs to frontend and external applications


Main Data

Detection

ID

Type

Severity

AI confidence

Location

Timestamp

Bus ID

Evidence

Status


Maintenance

Assigned team

Status

Notes

Action taken

Resolution date


Technology: Node.js, Express.js, MongoDB/MongoDB Atlas.


---

5. Officials Web App

The web application is the main interface for city officials.

Main Sections

Login
Dashboard
Detections
Detection Details
Interactive Map
Analytics
Maintenance
Reports

Dashboard

Display:

Total detections

Active issues

High/Critical issues

Resolved issues

Recent detections

Priority issues

Detection trends

Map preview


Detection Management

Officials can:

View detections

Search and filter issues

View evidence

Check AI confidence

View severity

View exact location

View bus and timestamp information


Interactive Map

Display detection markers

Show issue type and severity

Filter markers

Open detection details from the map


Analytics

Detection trends

Issue categories

Severity distribution

Area-wise detections

Open vs resolved

Repeated problem locations


Maintenance

Issue lifecycle:

Detected → Open → Assigned → In Progress → Resolved

Officials can track assignments, status, actions, and resolution.

Reports

Generate filtered summaries based on:

Date

Area

Issue type

Severity

Status


PDF/CSV export can be added later.

Technology: React.js, Vite, React Router, Axios, Leaflet, Recharts.


---

6. API Layer

The Central Server will expose APIs for the frontend and authorized external applications.

Example APIs

GET    /api/detections
GET    /api/detections/:id
GET    /api/analytics
GET    /api/locations
GET    /api/alerts

PATCH  /api/detections/:id/status
PATCH  /api/detections/:id/assignment

The final API structure will be decided during backend development.


---

7. Complete Data Flow
```
Bus Camera
    ↓
YOLO Detection
    ↓
Detection Event
    ↓
GPS + Timestamp + Bus ID
    ↓
Local Queue
    ↓
Internet
    ↓
Central API
    ↓
Database + Evidence Storage
    ↓
Processing & Analytics
    ↓
Officials Web App
    ↓
Monitoring → Maintenance → Resolution
```

---

8. Development Phases

Phase 1 — Project Setup

GitHub repository

Project architecture

Technology setup

Folder structure

API planning

Team responsibilities


Phase 2 — On-Board AI Prototype

Camera/video input

YOLO model

Detection classes

Confidence score

Detection event generation

GPS/location integration

Local queue


Phase 3 — Central Backend

Node.js + Express setup

Database connection

API development

Authentication

Detection storage

Evidence storage

Analytics processing

Maintenance APIs


Phase 4 — Officials Web App

Login

Dashboard

Detection management

Detection details

Interactive map

Analytics

Maintenance

Reports


Phase 5 — System Integration

Connect:
```
On-Board AI
     ↓
Central Backend
     ↓
Database
     ↓
Officials Web App
```
Replace frontend mock data with real API data.

Phase 6 — Testing & Final Prototype

AI detection testing

API testing

Database testing

Offline/queue testing

Frontend testing

End-to-end testing

Final demonstration



---

9. MVP Scope

For the initial SIH prototype, focus on a working end-to-end flow.

On-Board System

Camera/video input

YOLO detection

Detection event

Location

Timestamp

Bus ID


Backend

REST API

Database

Detection storage

Evidence storage


Officials App

Login

Dashboard

Detection list/details

Interactive map

Evidence

Severity & confidence

Basic analytics

Maintenance status


Core Demo
```
Camera → YOLO → Detection Event → Central Server
        → Database → Officials Dashboard → Map/Analytics
```

---

10. Future Scope

After the MVP, CityPulse can be expanded with:

Repeated/duplicate detection identification

Road-condition hotspots

Predictive maintenance

Advanced geospatial analytics

Real-time monitoring

Multi-city support

Mobile application

Smart-city platform integration

Public reporting integration

Advanced AI-based severity assessment



---

11. Project Boundaries

On-Board AI Team

Responsible for:

Camera

YOLO

Edge AI

GPS

Local queue

Detection events


Backend Team

Responsible for:

Server

APIs

Database

Storage

Processing

Authentication


Frontend Team

Responsible for:

Officials Web App

Dashboard

Map

Analytics

Maintenance

Reports



---

12. Final Vision

CityPulse transforms public buses into mobile AI-powered road monitoring units.

It continuously collects road-condition information, sends structured detection events to a central platform, and provides authorities with the information needed to understand:
```
What was detected → Where → How severe → Evidence → Current status → Action taken → Resolution.
```
