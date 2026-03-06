const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {

    const { title, description, price } = req.body;

    const product = new Product({
      title,
      description,
      price,
      image_path: req.file ? req.file.filename : ""
    });

    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: savedProduct
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};