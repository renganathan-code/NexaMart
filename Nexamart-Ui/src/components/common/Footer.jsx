const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-inner">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            NexaMart
          </h2>
          <p className="text-sm text-white">
            Your one-stop shop for Electronics, Gaming Accessories & Home Appliances.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-violet-700 transition underline">Home</a></li>
            <li><a href="/products" className="hover:text-violet-700 transition underline">Products</a></li>
            <li><a href="/contact" className="hover:text-violet-700 transition underline">Contact</a></li>
            <li><a href="/about" className="hover:text-violet-700 transition underline">About Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm underline">
            <li className="cursor-pointer hover:text-violet-700 transition">Electronics</li>
            <li className="cursor-pointer hover:text-violet-700 transition">Gaming Accessories</li>
            <li className="cursor-pointer hover:text-violet-700 transition">Home Appliances</li>
            <li className="cursor-pointer hover:text-violet-700 transition">New Arrivals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Contact
          </h3>
          <p className="text-sm mb-2 underline cursor-pointer">📍 Madurai, Tamil Nadu</p>
          <p className="text-sm mb-2 underline cursor-pointer">📧 support@nexamart.com</p>
          <p className="text-sm underline cursor-pointer">📞 +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-black">
        © {new Date().getFullYear()} NexaMart. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;