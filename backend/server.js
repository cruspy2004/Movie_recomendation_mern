import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connect } from "mongoose";
import {connectDB} from "./config/db.js"
dotenv.config(); // Load .env file

const app = express();
const PORT = ENV_VARS.port
console.log('MONGO_URI:', process.env.MONGO_URI); // Use the correct variable name

app.use(express.json())// will allow to parse the req.body
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+ PORT);
    connectDB(); 
});
