import express from "express";
import { createProduct, getProducts } from "../controller/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getProducts);

export default router;
