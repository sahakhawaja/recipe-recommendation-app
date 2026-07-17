<<<<<<< HEAD
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
=======
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
>>>>>>> 4cdb14dabdce2a66394254440e8fbd3c9a78fa1d
