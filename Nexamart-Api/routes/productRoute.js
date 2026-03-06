import express from "express";
import upload from "../uploads/upload.js";
import { createProduct } from "../controller/productController.js";

const router = express.Router();

router.post("/create", upload.single("image"), createProduct);

export default router;