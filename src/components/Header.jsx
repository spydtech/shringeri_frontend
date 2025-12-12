import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#191919]/95 backdrop-blur-sm text-white z-50 shadow-lg">

      
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 flex justify-between items-center h-16 sm:h-20">

       
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Shringeri Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        
        <nav className="hidden xl:flex items-center space-x-10 text-[18px] font-medium">

          <Link to="/menu" className="hover:text-[#e22927] transition">
            Menus
          </Link>

          <Link to="/locations" className="hover:text-[#e22927] transition">
            Locations ▾
          </Link>

          <Link to="/gift-vouchers" className="hover:text-[#e22927] transition">
            Gift Vouchers
          </Link>

          <Link
            to="/menu"
            className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
          >
            Dish To Go
          </Link>

          <Link
            to="/book-table"
            className="bg-[#e22927] px-6 py-2 rounded-full hover:bg-[#b61f1f] transition font-medium"
          >
            Book A Table
          </Link>
        </nav>

       
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden focus:outline-none text-white text-3xl active:scale-90 transition"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      
      <div className="h-[10px] sm:h-[12px] bg-[#d63232]" />

      
      <div
        className={`
          xl:hidden bg-[#191919] border-t border-[#333]
          px-6 py-5 space-y-5 text-lg
          transform transition-all duration-300
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <Link
          to="/menu"
          className="block hover:text-[#e22927] transition"
          onClick={() => setOpen(false)}
        >
          Menus
        </Link>

        <Link
          to="/locations"
          className="block hover:text-[#e22927] transition"
          onClick={() => setOpen(false)}
        >
          Locations
        </Link>

        <Link
          to="/gift-vouchers"
          className="block hover:text-[#e22927] transition"
          onClick={() => setOpen(false)}
        >
          Gift Vouchers
        </Link>

        <Link
          to="/menu"
          className="block border px-5 py-2 rounded-full text-center hover:bg-white hover:text-black transition font-medium"
          onClick={() => setOpen(false)}
        >
          Dish To Go
        </Link>

        <Link
          to="/book-table"
          className="block bg-[#e22927] px-5 py-2 rounded-full text-center hover:bg-[#b61f1f] transition font-medium"
          onClick={() => setOpen(false)}
        >
          Book A Table
        </Link>
      </div>
    </header>
  );
}
