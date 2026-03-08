import express from "express";
import { upload } from "../uploads/upload.js";
import { createProduct, getProducts } from "../controller/productController.js";

const router = express.Router();

router.post("/create", upload.single("image"), createProduct);
router.get("/", getProducts);

export default router;
