import dotenv from "dotenv";

dotenv.config();

console.log("Environment Variables:");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("TMDB_API_KEY:", process.env.TMDB_API_KEY);

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
};

