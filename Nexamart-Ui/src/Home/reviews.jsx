const reviews = [
  {
    name: "John Doe",
    email: "john@example.com",
    review:
      "Amazing service! The products are top-notch and delivery was super fast.",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    review:
      "Good quality and reasonable prices. Will definitely shop again!",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    review:
      "Customer support was excellent. Very satisfied with my purchase.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-violet-200 py-16 px-6 md:px-20">
      
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-blue-600 font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              {item.email}
            </p>

            <div className="text-yellow-400 text-lg mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 text-sm">
              {item.review}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Reviews;