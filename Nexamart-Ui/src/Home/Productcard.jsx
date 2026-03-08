import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/product/Checkout";

const ProductCard = ({ id, image, name, description, price }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCart = () => {
    dispatch(
      Checkout({
        title: name,
        description: description,
        price: price,
        image: image
      })
    );

    alert("Product added to cart successfully!");
  };

  const handleBuyNow = () => {
    navigate(`/product/${id}`, {
      state: { id, image, name, description, price }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-2">

      <img src={image} alt={name} className="w-full h-56 object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-violet-700 mb-2">{name}</h3>

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <p className="text-lg font-bold text-violet-800 mb-4">₹{price}</p>

        <div className="flex gap-3">

          <button
            onClick={handleBuyNow}
            className="flex-1 border border-violet-500 text-violet-600 hover:bg-violet-100 py-2 rounded-lg transition duration-300"
          >
            Buy Now
          </button>

          <button
            onClick={handleAddCart}
            className="flex-1 bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg transition duration-300"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;