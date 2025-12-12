import React from "react";
import { Link } from "react-router-dom";

export default function FooterBig() {
  return (
    <footer className="bg-[#1f1f1f] text-white pt-16">

      
      <div
        className="
        max-w-[1400px] mx-auto px-4 md:px-10
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
        gap-12 pb-16
      "
      >
        
        <div className="flex justify-center sm:justify-start">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 sm:w-40 object-contain"
          />
        </div>

        
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-lg mb-4 tracking-wide">ABOUT US</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
            <li><Link to="/our-story" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/franchise" className="hover:text-white">Franchise</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

       
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-lg mb-4 tracking-wide">OUR MENU</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/nutrition" className="hover:text-white">Nutrition Info</Link></li>
            <li><Link to="/gluten-free" className="hover:text-white">Gluten Free</Link></li>
            <li><Link to="/allergens" className="hover:text-white">Allergens</Link></li>
          </ul>
        </div>

        
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-lg mb-4 tracking-wide">KEEP UP</h4>

          <Link
            to="/signup"
            className="
              inline-block mt-4 
              text-[26px] sm:text-[28px] 
              font-extrabold uppercase 
              text-[#E31E32] 
              hover:opacity-80 transition
            "
          >
            SIGN UP →
          </Link>
        </div>
      </div>

      
      <div className="border-t border-red-600/40">
        <div
          className="
          max-w-[1400px] mx-auto px-4 md:px-10 
          py-8 flex flex-col sm:flex-row 
          items-center justify-between gap-6
        "
        >
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center 
              rounded-full border border-red-500 text-red-500 
              hover:bg-red-600 hover:text-white transition"
            >
              IG
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center 
              rounded-full border border-red-500 text-red-500 
              hover:bg-red-600 hover:text-white transition"
            >
              FB
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center 
              rounded-full border border-red-500 text-red-500 
              hover:bg-red-600 hover:text-white transition"
            >
              X
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-gray-400 text-sm text-center sm:text-right">
            © {new Date().getFullYear()} Shringeri Kitchen — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
