# Job Tracker

> A full-stack web app that helps fresh graduates organize their job search — every application, status, and follow-up in one place.

🚧 **Status: In active development** — authentication is live, core tracking features are in progress. See the [roadmap](#roadmap) below.

## Why I built this

After graduating in Computer Engineering, I was applying to dozens of roles across LinkedIn, company portals, and referrals — and tracking it all in a spreadsheet quickly became a mess. So I'm building the tool I wished I had: a simple tracker built specifically for the way fresh graduates actually job hunt.

## Features

**Working now**
- ✅ User signup with validation
- ✅ Login / logout with session

**Roadmap**
- [ ] Add / edit / delete job applications (company, role, link, date applied)
- [ ] Status pipeline: Applied → Interviewing → Offer → Rejected
- [ ] Dashboard with search and status filters
- [ ] Notes and follow-up reminders per application
- [ ] Stats: applications per week, response rate
- [ ] CSV export
- [ ] Live deployment

## Tech stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | Supabase |
| Auth | Supabase |

## Getting started

**Prerequisites:** Node.js 18+ and Supabase

```bash
# Clone the repo
git clone https://github.com/lgdrcs/job-tracker.git
cd job-tracker

# Install and run the backend
npm install
node server.js

# In a second terminal — install and run the frontend
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5173` (Vite default) with the API on `http://localhost:[your port]`.

<!-- If you have environment variables (DB connection string, JWT secret), add a .env.example file to the repo and document the variables here. Never commit the real .env. -->

## Project structure

```
job-tracker/
├── client/          # React + Vite frontend
├── server.js        # Express API entry point
└── package.json
```

## Live demo

🔗 Coming soon — deployment planned on Vercel (frontend) + Render (backend).

## Author

**Christian Laguador** — Computer Engineering graduate, Dubai, UAE
https://www.linkedin.com/in/christian-laguador 
