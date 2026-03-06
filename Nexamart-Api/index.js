const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");

const productRoutes = require("./routes/productRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nexa-mart-one.vercel.app"
  ]
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err=> console.log(err));

app.use("/api/product", productRoutes);

app.get("/", (req,res)=>{
  res.json({message:"Welcome to NexaMart API"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
  console.log(`Server running on ${PORT}`);
});