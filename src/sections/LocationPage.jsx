import React, { useState } from "react";
import { FiCrosshair } from "react-icons/fi";

const restaurantData = [
  { name: "Shringeri Hyderabad", city: "hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Shringeri Bangalore", city: "bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Shringeri Mumbai", city: "mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Shringeri Delhi", city: "delhi", lat: 28.6139, lng: 77.209 },
];

export default function LocationsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [mapUrl, setMapUrl] = useState(null);

  const handleSearch = () => {
    if (!query.trim()) return alert("Enter a location");

    const filtered = restaurantData.filter((item) =>
      item.city.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);

    if (filtered.length > 0) {
      const { lat, lng } = filtered[0];
      setMapUrl(`https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`);
    } else {
      alert("No restaurants found");
      setMapUrl(null);
    }
  };

  const detectLocation = () => {
    if (!navigator.geolocation)
      return alert("Geolocation not supported on this device.");

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;

      const nearest = restaurantData.reduce((closest, curr) => {
        const distA = Math.hypot(closest.lat - latitude, closest.lng - longitude);
        const distB = Math.hypot(curr.lat - latitude, curr.lng - longitude);
        return distB < distA ? curr : closest;
      });

      setResults([nearest]);
      setMapUrl(
        `https://www.google.com/maps?q=${nearest.lat},${nearest.lng}&z=14&output=embed`
      );
    });
  };

  const viewAll = () => {
    setResults(restaurantData);
    setMapUrl(null);
  };

  return (
    <div className="pt-[120px] pb-20 bg-[#D72638] min-h-screen flex flex-col items-center px-4 sm:px-6">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-6 drop-shadow-md">
        Find your nearest Restaurant
      </h1>

      {/* Search Bar */}
      <div className="w-full flex justify-center">
        <div className="flex items-center rounded-full bg-[#EEE7DD] border-4 border-[#717374] w-full max-w-[900px] overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Enter location..."
            className="flex-1 px-5 py-3 text-lg bg-transparent outline-none text-[#717374]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button
            className="px-4 md:px-5 hover:opacity-80 transition"
            onClick={detectLocation}
          >
            <FiCrosshair className="text-[#D72638] text-xl md:text-2xl" />
          </button>

          <button
            className="bg-[#D72638] text-[#EEE7DD] font-semibold text-xl md:text-2xl px-6 md:px-8 py-3 md:py-4 hover:bg-[#b51d2e] transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      
      <div className="w-full max-w-[900px] h-[3px] bg-[#1A1A1A] mt-5"></div>

      
      <div
        className="text-black font-bold text-xl md:text-2xl mt-5 hover:opacity-80 cursor-pointer"
        onClick={viewAll}
      >
        View All Locations ▸
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-10 text-white text-center w-full px-2">
          {results.map((item, i) => (
            <p
              key={i}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 bg-black/20 py-3 rounded-lg"
            >
              📍 {item.name} — {item.city.toUpperCase()}
            </p>
          ))}
        </div>
      )}

      {/* Google Map */}
      {mapUrl && (
        <iframe
          title="map"
          src={mapUrl}
          className="
            rounded-lg border-4 border-black 
            mt-8 w-full max-w-[900px]
            h-[250px] sm:h-[320px] md:h-[400px]
            shadow-2xl
          "
          loading="lazy"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
