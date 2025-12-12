import React from "react";

export default function Offers() {
  return (
    <div
      className="py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/placeholder-offer.jpeg')" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-black/50 backdrop-blur-sm p-6 sm:p-10 lg:p-14 rounded-2xl text-white max-w-xl sm:max-w-2xl lg:max-w-3xl">

          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Shringeri Celebration
          </h3>

          
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Enjoy our signature dishes with special combo offers available now.
          </p>

          
          <button className="
            mt-6 bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full 
            text-sm sm:text-base lg:text-lg font-semibold 
            hover:bg-red-700 transition">
            Explore Offers
          </button>

        </div>
      </div>
    </div>
  );
}
