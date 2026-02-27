import express from "express";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Route files
import bootcamps from "./routes/bootcamps.js";

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

const app = express();

// Middelware logger
app.use(logger);

// Middleware para JSON (reemplaza body-parser)
app.use(express.json());

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

app.listen(PORT, () => {
    console.log(`Running on ${ENV} mode on port ${PORT}`);
});