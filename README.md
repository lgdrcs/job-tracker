# Job Tracker

A tracker for job applications, built specifically for how fresh grads actually job hunt — company, role, status, link, notes, all in one place instead of scattered across a spreadsheet.

**Status:** actively building this. Auth works, the actual tracking features are next. Roadmap below.

## Why

I graduated in Computer Engineering and started applying everywhere — LinkedIn, company portals, referrals, the works. My spreadsheet turned into a mess within a week: duplicate rows, statuses I forgot to update, links I lost. This is me building the tool I actually wanted instead.

Also doubling as my learning project for full-stack dev, so expect the commit history to show a lot of trial and error.

## Features

**Working:**
- User signup
- Login / logout with session

**Not built yet:**
- Add / edit / delete applications
- Status pipeline (applied → interviewing → offer → hired, or rejected/withdrawn along the way)
- Search and filter on the dashboard
- Notes + follow-up reminders
- Basic stats — applications per week, response rate
- CSV export
- Actually deployed somewhere
- Python for AI integration — planning a small Python microservice for auto-filling applications from a pasted job posting

## Tech stack

React + Vite on the frontend, Node/Express on the backend, Supabase for the database (Postgres) and auth.

## Getting started

**Prerequisites:** Node.js 20.19+ (Node 22 LTS recommended) and a free [Supabase](https://supabase.com) account.

**1. Clone the repo**

```bash
git clone https://github.com/lgdrcs/job-tracker.git
cd job-tracker
```

**2. Set up Supabase**

Create a new Supabase project with email/password auth enabled, and an `applications` table. (Full schema documentation coming soon.)

**3. Configure environment variables**

```bash
# Backend — from the project root
cp .env.example .env

# Frontend
cp client/.env.example client/.env
```

Then open both `.env` files and fill in your Supabase URL and keys.

**4. Run the backend**

```bash
npm install
npm start        # or: npm run dev (auto-restarts on file changes)
```

**5. Run the frontend** (in a second terminal)

```bash
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5173` (Vite default), with the API on `http://localhost:5000` by default (configurable via `PORT` in `.env`).

## Project structure

```
job-tracker/
├── client/          # React + Vite frontend
├── server.js        # Express API entry point
└── package.json
```

## Live demo

Not deployed yet. Planning Vercel for the frontend, Render for the backend — as a seeded demo rather than open public signup, to avoid strangers eating into my Supabase/API usage.

## Author
Christian Laguador — Computer Engineering graduate, Dubai, UAE https://www.linkedin.com/in/christian-laguador