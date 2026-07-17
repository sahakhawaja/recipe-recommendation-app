# Recipe Recommendation App

## Structure
```
/client   → Vue 3 + Vite frontend
/server   → Express.js + MongoDB (Mongoose) backend
```

## Local Setup

### Server
```
cd server
npm install
# create a .env file (copy server/.env.example) and fill in your MongoDB URI
node server.js
```
Runs on http://localhost:5000

### Client
```
cd client
npm install
npm run dev
```
Runs on http://localhost:5173

## Deployment (Vercel)

Deploy this repo as **two separate Vercel projects** (import the same GitHub repo twice):

**1. Backend project**
- Root Directory: `server`
- Environment Variables: `MONGO_URI` = your MongoDB Atlas connection string
- Uses `server/vercel.json` (already included)

**2. Frontend project**
- Root Directory: `client`
- Environment Variables: `VITE_API_URL` = your deployed backend URL (from step 1)
- Uses `client/vercel.json` (already included)

MongoDB must be hosted on **MongoDB Atlas** (cloud) — a local `mongodb://127.0.0.1` URI will not work once deployed.
