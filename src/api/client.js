import axios from "axios";

// One shared Axios instance. Change VITE_API_URL in .env to point at a real backend.
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

// Attach the JWT (if any) to every outgoing request.
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("cheap_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;
