import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const colors = [
    { name: "Black", price: product.price },
    { name: "Blue", price: product.price + 200 },
    { name: "Red", price: product.price + 300 }
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg object-cover"
        />

        {/* Product Info */}

        <div>

          <h1 className="text-3xl font-bold text-violet-700">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-3">
            {product.description}
          </p>

          {/* Color Selection */}

          <div className="mt-6">
            <p className="font-semibold mb-2">Select Color</p>

            <div className="flex gap-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-1 border rounded-lg ${
                    selectedColor.name === color.name
                      ? "bg-violet-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}

          <p className="text-2xl font-bold text-violet-800 mt-6">
            ₹{selectedColor.price}
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-6">

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>

          </div>

          {/* Product Details */}

          <div className="mt-8">

            <h2 className="text-lg font-semibold mb-3">
              Product Details
            </h2>

            <ul className="list-disc ml-5 text-gray-600 space-y-1">

              <li>Premium high-quality material</li>
              <li>Modern stylish design</li>
              <li>Long-lasting durable build</li>
              <li>Lightweight and comfortable</li>
              <li>1 Year manufacturer warranty</li>

            </ul>

          </div>

          <button
              onClick={() => navigate("/")}
              className="border border-violet-500 text-violet-600 px-6 py-2 mt-5 rounded-lg hover:bg-violet-100"
            >
              Back to Home
            </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;