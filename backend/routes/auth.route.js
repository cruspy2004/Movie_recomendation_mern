// Import express and the required controller functions
import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

// Create a new Express Router instance
const router = express.Router();

// Route to handle user signup
// POST /api/v1/auth/signup
router.post("/signup", signup);

// Route to handle user login
// POST /api/v1/auth/login
router.post("/login", login);

// Route to handle user logout
// POST /api/v1/auth/logout
router.post("/logout", logout);

// Export the router so it can be used in other parts of the app
export default router;
