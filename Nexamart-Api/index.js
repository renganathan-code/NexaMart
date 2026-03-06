const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");

const productRoutes = require("./routes/productRoute");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nexa-mart-one.vercel.app"
  ],
  credentials: true
}));

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/nexamart")
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});

// routes
app.use("/api/product", productRoutes);

// test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NexaMart Application." });
});

// start server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});