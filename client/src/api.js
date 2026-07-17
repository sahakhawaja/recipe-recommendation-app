import axios from 'axios';

// In production (Vercel), set VITE_API_URL in project Environment Variables
// to your deployed backend URL, e.g. https://your-backend.onrender.com
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({ baseURL });

export default api;
