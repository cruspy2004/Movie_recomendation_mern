import axios from "axios";

// Use Vite env var VITE_API_URL. When undefined, axios will use relative paths.
const baseURL = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
