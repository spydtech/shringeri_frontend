import React, { useState } from "react";
import { FiTarget } from "react-icons/fi";

const restaurantData = [
  { name: "Shringeri Hyderabad", city: "hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Shringeri Bangalore", city: "bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Shringeri Mumbai", city: "mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Shringeri Delhi", city: "delhi", lat: 28.6139, lng: 77.209 },
];

export default function FindRestaurant() {
  const [query, setQuery] = useState("");
  const [mapUrl, setMapUrl] = useState(null);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please enter a location!");
      return;
    }

    const filtered = restaurantData.filter((item) =>
      item.city.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);

    if (filtered.length > 0) {
      const { lat, lng } = filtered[0];
      setMapUrl(`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`);
    } else {
      alert("No Shringeri restaurants found in this area 😔");
      setMapUrl(null);
    }
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported!");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;

      const nearest = restaurantData.reduce((prev, curr) => {
        const prevDist = Math.hypot(prev.lat - latitude, prev.lng - longitude);
        const currDist = Math.hypot(curr.lat - latitude, curr.lng - longitude);
        return currDist < prevDist ? curr : prev;
      });

      setResults([nearest]);
      setMapUrl(
        `https://www.google.com/maps?q=${nearest.lat},${nearest.lng}&z=15&output=embed`
      );
    });
  };

  const viewAllLocations = () => {
    setResults(restaurantData);
    setMapUrl(null);
  };

  return (
    <section className="py-20 bg-[#d91f33] text-black px-4 sm:px-8">

      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-white">
        Find your nearest Restaurant.
      </h2>

      
      <div className="max-w-3xl mx-auto">
        <div className="
          flex flex-col sm:flex-row bg-[#f5f0ea] rounded-2xl 
          border-4 border-gray-400 overflow-hidden shadow-lg
        ">

          
          <input
            className="flex-1 px-6 py-4 bg-[#f5f0ea] text-lg outline-none 
            text-center sm:text-left"
            placeholder="Enter location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          
          <button
            onClick={detectLocation}
            className="px-6 py-4 border-t sm:border-t-0 sm:border-l border-gray-400"
          >
            <FiTarget className="text-2xl text-red-600 mx-auto" />
          </button>

          
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-8 py-4 font-semibold text-lg"
          >
            Search
          </button>
        </div>
      </div>

      
      <div
        onClick={viewAllLocations}
        className="mt-6 text-white text-center text-lg sm:text-xl font-bold cursor-pointer hover:opacity-80"
      >
        View All Locations ▸
      </div>

      
      {results.length > 0 && (
        <div className="mt-10 text-center text-white px-4">
          {results.map((r, i) => (
            <div key={i} className="text-xl sm:text-2xl font-semibold mb-2">
              📍 {r.name} — {r.city.toUpperCase()}
            </div>
          ))}
        </div>
      )}

      {/* MAP */}
      {mapUrl && (
        <div className="mt-10 flex justify-center">
          <iframe
            title="restaurant-map"
            src={mapUrl}
            className="rounded-xl border-4 border-black w-full max-w-3xl h-[280px] sm:h-[350px] md:h-[420px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </section>
  );
}
