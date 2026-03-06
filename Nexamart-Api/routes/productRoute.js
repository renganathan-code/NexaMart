const express = require("express");
const upload = require("../uploads/upload");
const productController = require("../controller/productController");

const router = express.Router();

router.post("/create", upload.single("image"), productController.createProduct);

module.exports = router;