import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {

    const { title, description, price } = req.body;

    const product = new Product({
      title: title,
      description: description,
      price: price,
      image_path: req.file.filename
    });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: product
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};