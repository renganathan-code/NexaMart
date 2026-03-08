export default (mongoose) => {

  const productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },
      description: String,
      price: {
        type: Number,
        required: true
      },
      image: String
    },
    {
      timestamps: true
    }
  );

  const Product = mongoose.model("Product", productSchema);

  return Product;
};