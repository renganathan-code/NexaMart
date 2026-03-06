import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/productRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nexa-mart-one.vercel.app"
  ]
}));

app.use("/uploads", express.static("uploads"));

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