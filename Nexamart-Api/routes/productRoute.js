const express = require("express");
const upload = require("../uploads/upload");
const { createProduct } = require("../controller/productController");

const router = express.Router();

router.post("/create", upload.single("image"), createProduct);

module.exports = router;