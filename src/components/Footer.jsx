import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const linksCol1 = [
    { label: "Locations", to: "/locations" },
    { label: "Our Story", to: "/our-story" },
    { label: "Franchise", to: "/franchise" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
    { label: "FAQs", to: "/faqs" },
  ];

  const linksCol2 = [
    { label: "Menu", to: "/menu" },
    { label: "Nutritional Info", to: "/nutrition" },
    { label: "Gluten Free", to: "/gluten-free" },
    { label: "Allergens", to: "/allergens" },
  ];

  const linksCol3 = [
    { label: "Gift Vouchers", to: "/gift-vouchers" },
    { label: "Students", to: "/students" },
    { label: "Gender Pay", to: "/gender-pay" },
    { label: "Reporting", to: "/reporting" },
  ];

  const socialIcons = [
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaSnapchatGhost,
  ];

  return (
    <footer className="bg-[#111111] text-[#efe6df] pt-16 md:pt-24 pb-44 relative overflow-hidden">
      {/* MAIN GRID */}
      <div
        className="
        max-w-7xl mx-auto
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        xl:grid-cols-[170px,1fr,1fr,1.6fr,2fr]
        gap-10 sm:gap-12 lg:gap-16
        px-5 sm:px-10
      "
      >
        {/* LOGO */}
        <div className="flex flex-col items-center xl:items-start">
          <div className=" w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center rounded-lg">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* COLUMN 1 */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-3">ABOUT US</h3>
          <ul className="space-y-3 text-base sm:text-lg opacity-90">
            {linksCol1.map((item, i) => (
              <li key={i}>
                <Link className="hover:text-white cursor-pointer" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-3">OUR MENU</h3>
          <ul className="space-y-3 text-base sm:text-lg opacity-90">
            {linksCol2.map((item, i) => (
              <li key={i}>
                <Link className="hover:text-white cursor-pointer" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-3">MORE</h3>
          <ul className="space-y-3 text-base sm:text-lg opacity-90">
            {linksCol3.map((item, i) => (
              <li key={i}>
                <Link className="hover:text-white cursor-pointer" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="text-center xl:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-2">
            NEWSLETTER SIGN UP
          </h3>

          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            KEEP UP TO DATE WITH
            <br />
            ALL THINGS SHRINGERI
          </p>

          <Link
            to="/signup"
            className="
            text-[#e31c32] text-3xl sm:text-4xl md:text-5xl font-extrabold
            mt-4 block hover:opacity-80
          "
          >
            SIGN UP →
          </Link>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-16 px-5">
        {socialIcons.map((Icon, i) => (
          <div
            key={i}
            className="
            w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
            border-[3px] border-[#e31c32] rounded-full
            flex items-center justify-center
            cursor-pointer hover:bg-[#e31c32] transition-all
          "
          >
            <Icon className="text-xl sm:text-2xl" />
          </div>
        ))}
      </div>

      {/* TERMS */}
      <div className="text-center mt-12 text-[10px] sm:text-xs md:text-sm tracking-widest opacity-90 space-x-6">
        <span className="cursor-pointer hover:text-white">TERMS & CONDITIONS</span>
        <span className="cursor-pointer hover:text-white">PRIVACY</span>
        <span className="cursor-pointer hover:text-white">COOKIES POLICY</span>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-3 text-[10px] sm:text-xs md:text-sm tracking-widest">
        ©SHRINGERI 2024 | CREATIVE BY{" "}
        <span className="underline cursor-pointer hover:text-[#e31c32]">
          IGNITE
        </span>
      </div>

      {/* BACK TO TOP */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        bg-[#e31c32] rounded-full
        font-black text-black
        flex items-center justify-center
        mx-auto mt-8 cursor-pointer
      "
      >
        TOP
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-[#e31c32] rounded-t-[60%]"></div>
    </footer>
  );
}
