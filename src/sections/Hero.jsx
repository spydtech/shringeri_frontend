import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/placeholder-bowl.jpeg')" }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 w-full px-6 lg:px-20 flex items-center justify-between">

       
        <div
          className="text-[#efe6df] font-extrabold leading-none tracking-tight
                     animate-[fadeInUp_1s_ease-out]"
        >
          <h1
            className="
              text-[48px] sm:text-[70px] md:text-[110px] lg:text-[150px]
              drop-shadow-xl
            "
          >
            INDIAN
          </h1>

          <h1
            className="
              text-[48px] sm:text-[70px] md:text-[110px] lg:text-[150px]
              drop-shadow-xl
            "
          >
            FOOD
          </h1>
        </div>

       
        <div className="hidden lg:flex ml-auto items-end animate-[fadeIn_1.2s_ease-out]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#efe6df] rounded-full shadow-lg"></div>
            <div className="w-4 h-24 bg-[#efe6df] mt-3 rounded-xl shadow-lg"></div>
          </div>
        </div>
      </div>

      
      <div className="absolute left-6 sm:left-10 bottom-8 sm:bottom-10 z-20">
        <div className="w-10 h-14 sm:w-12 sm:h-16 rounded-lg border-4 border-white flex items-center justify-center">
          <div className="w-1.5 h-7 sm:w-2 sm:h-8 bg-white rounded animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
