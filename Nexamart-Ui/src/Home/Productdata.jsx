import ProductCard from "./Productcard";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartphone Pro X",
    description: "Latest 5G smartphone with high performance processor.",
    price: 24999,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    name: "Wireless Headphones",
    description: "Noise cancellation over-ear headphones.",
    price: 2999,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    name: "Gaming Keyboard RGB",
    description: "Mechanical RGB gaming keyboard.",
    price: 1999,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    name: "Ultra HD Laptop",
    description: "High performance laptop for work & gaming.",
    price: 54999,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f3",
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 1499,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    name: "Refrigerator 300L",
    description: "Energy efficient double door refrigerator.",
    price: 28999,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    name: "Washing Machine",
    description: "Fully automatic top load washing machine.",
    price: 21999,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with deep bass.",
    price: 1799,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with AMOLED display.",
    price: 3999,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1581093588401-12f01b8f5b03",
    name: "Microwave Oven",
    description: "25L convection microwave oven.",
    price: 8999,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartphone Pro X",
    description: "Latest 5G smartphone with high performance processor.",
    price: 24999,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    name: "Wireless Headphones",
    description: "Noise cancellation over-ear headphones.",
    price: 2999,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    name: "Gaming Keyboard RGB",
    description: "Mechanical RGB gaming keyboard.",
    price: 1999,
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    name: "Ultra HD Laptop",
    description: "High performance laptop for work & gaming.",
    price: 54999,
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f3",
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 1499,
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    name: "Refrigerator 300L",
    description: "Energy efficient double door refrigerator.",
    price: 28999,
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    name: "Washing Machine",
    description: "Fully automatic top load washing machine.",
    price: 21999,
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with deep bass.",
    price: 1799,
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with AMOLED display.",
    price: 3999,
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1581093588401-12f01b8f5b03",
    name: "Microwave Oven",
    description: "25L convection microwave oven.",
    price: 8999,
  },
];


const ProductList = () => {
  return (
    <div className="bg-violet-200 min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;