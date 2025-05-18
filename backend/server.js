// Import necessary modules
import express from "express";
import dotenv from "dotenv"; // For loading environment variables from .env file
import authRoutes from "./routes/auth.route.js"; // Auth-related API routes
import { ENV_VARS } from "./config/envVars.js"; // Custom wrapper to access environment variables
import { connect } from "mongoose"; // (Optional: not used directly here)
import { connectDB } from "./config/db.js"; // Custom function to connect to MongoDB

// Load environment variables from .env into process.env
dotenv.config();

const app = express(); // Create an Express app instance
const PORT = ENV_VARS.port; // Port defined in envVars.js or fallback

// Log MongoDB URI (for debug purposes only, remove in production)
console.log('MONGO_URI:', process.env.MONGO_URI);

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Route handler for authentication-related API endpoints
// Example: /api/v1/auth/login, /api/v1/auth/register
app.use("/api/v1/auth", authRoutes);

// Start server and connect to database
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
    connectDB(); // Establish connection to MongoDB
});
