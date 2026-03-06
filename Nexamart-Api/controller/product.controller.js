import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const product = new Product({
      title,
      description,
      price,
      image: req.file.path
    });

    await product.save();

    res.json({
      success: true,
      message: "Product created",
      data: product
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};