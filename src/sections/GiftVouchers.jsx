import React from "react";
import { useNavigate } from "react-router-dom";

export default function GiftVouchers() {
  const navigate = useNavigate();

  const vouchers = [
    {
      title: "For the Meal Lover!",
      price: "From ₹300",
      desc: "A perfect gift for someone who loves South Indian meals.",
      img: "/src/assets/meals.jpg",
      id: 1,
    },
    {
      title: "For the Biriyani Lover!",
      price: "From ₹350",
      desc: "Nothing says love like a plate full of aromatic biriyani.",
      img: "/src/assets/hyderabadi-chicken-biryani.webp",
      id: 2,
    },
    {
      title: "For the Noodle Craver!",
      price: "From ₹250",
      desc: "Gift a tasty Indo-Chinese bowl of joy.",
      img: "/src/assets/noodles.jpeg",
      id: 3,
    },
    {
      title: "For the Dessert Craver!",
      price: "From ₹250",
      desc: "Gift a tasty Icecream bowl of joy.",
      img: "/src/assets/Icecream.jpg",
      id: 4,
    },
    {
      title: "For the Sweet Craver!",
      price: "From ₹250",
      desc: "Gift a tasty Cake of joy.",
      img: "/src/assets/cheesecake.jpeg",
      id: 5,
    },
  ];

  
  const handleBuyNow = (id) => {
    navigate(`/buy-voucher/${id}`);
  };

  return (
    <div className="bg-[#d63232] min-h-screen pt-32 pb-20 text-white">

      
      <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide mb-2">
        Shringeri Kitchen
      </h1>
      <p className="text-center text-xl md:text-2xl mb-12">
        The Gift of Taste…
      </p>

     
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">

        {vouchers.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 md:h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
              <p className="font-semibold text-gray-700 mb-3">{item.price}</p>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {item.desc}
              </p>

              <button
                onClick={() => handleBuyNow(item.id)}
                className="w-full bg-[#333] text-white py-3 rounded-lg 
                           hover:bg-black active:scale-95 
                           transition font-semibold"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
