import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useState } from "react";

const Navbar = () => {
  const { userData, checkoutProducts } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-10 shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <span className="text-violet-700 text-2xl font-semibold">NexaMart</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-black hover:text-violet-500">Home</Link>
          <Link to="/products" className="text-black hover:text-violet-500">Products</Link>
          <Link to="/contact" className="text-black hover:text-violet-500">Contact</Link> 

          
          <button onClick={() => {navigate("/productUpload")}} className="bg-green-500 text-white p-2 rounded-md mr-2">Add Product</button>
     

          <Link
            to="/login"
            className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-1 rounded-md"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-1 rounded-md"
          >
            Sign up
          </Link>

          <Badge size="small" count={checkoutProducts.length}>
            <ShoppingCartOutlined
              style={{ fontSize: "22px", cursor: "pointer" }}
              onClick={() => navigate("/checkout")}
            />
          </Badge>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <Badge size="small" count={checkoutProducts.length}>
            <ShoppingCartOutlined
              style={{ fontSize: "22px", cursor: "pointer" }}
              onClick={() => navigate("/checkout")}
            />
          </Badge>

          <MenuOutlined
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-[800ms] ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cancel Icon at Top */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col mt-4 gap-6 p-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="px-2 py-1 rounded hover:bg-violet-400 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="px-2 py-1 rounded hover:bg-violet-400 hover:text-white transition"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="px-2 py-1 rounded hover:bg-violet-400 hover:text-white transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="bg-violet-500 text-white px-3 py-2 rounded-md text-center"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-violet-500 text-white px-3 py-2 rounded-md text-center"
            onClick={() => setMenuOpen(false)}
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;