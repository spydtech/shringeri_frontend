import React from "react";
import { Link } from "react-router-dom";

export default function Specials() {
  return (
    <section className="py-14 bg-[var(--brand-red)]">
      <div className="container mx-auto px-4 md:px-8">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          
          <div className="bg-[#c92a2f] rounded-2xl p-8 md:p-10 shadow-inner">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Our Menu</h3>
            <p className="mt-3 text-white/90 text-sm md:text-base">
              Everything is made fresh in each restaurant, every day.
            </p>

            <Link
              to="/menu"
              className="block mt-6 md:mt-8 bg-black text-center text-white px-6 py-3 rounded-full w-full md:w-auto"
            >
              View Menu
            </Link>
          </div>

          
          <div className="bg-[#c92a2f] rounded-2xl p-8 md:p-10 shadow-inner">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Dish To Go</h3>
            <p className="mt-3 text-white/90 text-sm md:text-base">
              Order for delivery or Click & Collect
            </p>

            <Link
              to="/book-table"
              className="block mt-6 md:mt-8 bg-black text-center text-white px-6 py-3 rounded-full w-full md:w-auto"
            >
              Order Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
