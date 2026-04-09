# Virtual Laboratory Session Management System

A full-stack web application to manage virtual lab session records with validation and controlled update rules.

---

## Project Overview

This system allows users to:
- Create virtual lab session records
- Search sessions using Session ID and Student ID
- Update session details with restrictions

The main objective is to enforce **business rules** where certain fields can only be updated when the session is in a valid state.

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)

---

## Project Structure


---

## API Endpoints

| Method | Endpoint | Description |
|-------|--------|-------------|
| POST | /api/sessions | Create a session |
| GET | /api/sessions/:sessionId/:studentId | Get session |
| PUT | /api/sessions/:sessionId/:studentId | Update session |

---

## Database Schema

```json
{
  "sessionId": "S01",
  "studentId": "P01",
  "labModule": "AI Lab",
  "experimentSlot": "Slot-2",
  "status": "scheduled"
}