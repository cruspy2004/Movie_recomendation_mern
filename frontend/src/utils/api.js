import axios from "axios";

// Use Vite env var VITE_API_URL. When undefined, axios will use relative paths.
const baseURL = import.meta.env.VITE_API_URL || "";

// Create axios instance with baseURL
const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Also set global axios defaults (for any remaining direct axios calls)
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

console.log("API Configuration:", {
  baseURL: baseURL || "relative paths",
  withCredentials: true
});

export default api;
