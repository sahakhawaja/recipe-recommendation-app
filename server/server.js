const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Recipe Management Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});