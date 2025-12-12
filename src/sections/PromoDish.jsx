import React from 'react'
import bowlImage from '../assets/placeholder-hero.jpeg'

export default function PromoDish(){
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0b4b3a] leading-tight">
            SOMETHING<br/>Fantastic<br/>EVERYONE
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Fresh herbs, authentic broth — served daily.
          </p>

          <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all">
            Nutrition Info
          </button>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img 
            src={bowlImage} 
            alt="bowl" 
            className="w-56 sm:w-72 md:w-96 rounded-full shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}