import ProductCard from "./Productcard";

const products = [
  {
  id: 1,
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  name: "Smartphone Pro X",
  description: "Latest 5G smartphone with high performance processor.",
  price: 24999
},
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
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
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8",
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 1499,
  },
  {
  id: 6,
  image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
  name: "Tablet",
  description: "Fitness tracking smartwatch with Bluetooth calling.",
  price: 3999
},
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c",
    name: "Washing Machine",
    description: "Fully automatic top load washing machine.",
    price: 21999,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with deep bass.",
    price: 1799,
  }
];


const ProductList = () => {
  return (
  <div className="bg-violet-200 py-10 px-6 md:px-20">
  
    <div className="bg-violet-200 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
          />
      ))}
    </div>
  </div>
  );
};

export default ProductList;