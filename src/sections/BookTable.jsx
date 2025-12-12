import React, { useState, useEffect } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const RESTAURANTS = [
  { id: "hyd", city: "Hyderabad", address: "Gachibowli, Hyderabad" },
  { id: "blr", city: "Bangalore", address: "Indiranagar, Bangalore" },
  { id: "mum", city: "Mumbai", address: "Bandra West, Mumbai" },
  { id: "del", city: "Delhi", address: "Connaught Place, Delhi" },
];

export default function BookATable() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(RESTAURANTS);
  const [active, setActive] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:30 PM");
  const [people, setPeople] = useState("2");

  
  useEffect(() => {
    document.body.style.overflow = showConfirm ? "hidden" : "auto";
  }, [showConfirm]);

  const handleSearch = () => {
    const q = query.toLowerCase().trim();
    if (!q) return setResults(RESTAURANTS);
    setResults(
      RESTAURANTS.filter(
        (r) =>
          r.city.toLowerCase().includes(q) ||
          r.address.toLowerCase().includes(q)
      )
    );
  };

  const handleKey = (e) => e.key === "Enter" && handleSearch();

  const selectLocation = (r) => {
    setActive(r);
    setTimeout(() => {
      document
        .getElementById("booking-panel")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  
  const handleBooking = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

   
    localStorage.setItem(
      "shringeBooking",
      JSON.stringify({
        location: active?.city,
        date,
        time,
        people,
      })
    );

    
    setShowConfirm(true);
  };

  return (
    <section className="min-h-screen bg-[#d72638] text-white py-14 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[34px] sm:text-[48px] md:text-[68px] font-extrabold text-center mb-4">
          BOOK A TABLE
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-10 text-sm sm:text-base opacity-90">
          Reserve your table instantly at Shringeri Kitchen.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#1a1a1a] p-4 sm:p-6 rounded-3xl">
          
          <div className="bg-[#e6dcc5] rounded-2xl p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-black mb-4">
              Choose location:
            </h3>

            <div className="bg-[#efe6d7] rounded-xl p-3 divide-y divide-[#d1c7b6]">
              {results.length === 0 && (
                <p className="text-center py-6 text-gray-700">No results found</p>
              )}

              {results.map((r) => {
                const isActive = active?.id === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => selectLocation(r)}
                    className={`p-4 sm:p-6 cursor-pointer flex justify-between rounded-lg transition ${
                      isActive
                        ? "bg-[#d72638] text-white"
                        : "text-black hover:bg-[#d1c7b6]"
                    }`}
                  >
                    <div>
                      <div className="text-xl sm:text-2xl font-bold">{r.city}</div>
                      <div className="mt-2 flex items-center gap-2 text-sm sm:text-base">
                        <FiMapPin />
                        <span className="underline">{r.address}</span>
                      </div>
                    </div>

                    {!isActive && (
                      <span className="hidden sm:block text-gray-600">Select →</span>
                    )}
                  </div>
                );
              })}
            </div>

           
            <div className="mt-6">
              <label className="block text-black font-medium mb-2">
                Search address:
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Enter address"
                  className="flex-1 p-4 text-black rounded-full outline-none"
                />

                <div className="flex gap-2">
                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-white border border-black rounded-full active:scale-95"
                  >
                    <FiSearch className="text-black text-xl" />
                  </button>

                  <button
                    onClick={() => {
                      setQuery("");
                      setResults(RESTAURANTS);
                    }}
                    className="px-4 py-3 border border-black text-black rounded-lg active:scale-95"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div
            id="booking-panel"
            className="bg-[#1a1a1a] rounded-2xl p-6 text-white"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-extrabold">
                {active ? active.city : "Select a location"}
              </h2>

              {active && (
                <button
                  onClick={() => setActive(null)}
                  className="underline text-white/70"
                >
                  Reset
                </button>
              )}
            </div>

            {!active ? (
              <div className="text-center py-10 text-gray-400 text-lg">
                Select a location to continue
              </div>
            ) : (
              <div className="space-y-6">
                
                <div>
                  <label className="text-white/90 block mb-2">DATE</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full p-3 rounded-lg bg-white text-black"
                  />
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-white/90">TIME</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full p-3 bg-white text-black rounded-lg"
                    >
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>1:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-white/90">
                      NO. OF PEOPLE
                    </label>
                    <select
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                      className="w-full p-3 bg-white text-black rounded-lg"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                </div>

               
                <button
                  onClick={handleBooking}
                  className="w-full bg-black text-white py-4 rounded-full text-xl font-bold active:scale-95"
                >
                  Book Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center text-black animate-scaleIn">
            <h3 className="text-3xl font-bold mb-4">Booking Confirmed!</h3>

            <p className="mb-6 text-lg">
              Your booking at <b>{active?.city}</b> on <b>{date}</b> at{" "}
              <b>{time}</b> for <b>{people}</b> people.
            </p>

            <button
              onClick={() => {
                setShowConfirm(false);
                setActive(null);
                setDate("");
              }}
              className="w-full bg-[#d72638] text-white py-3 rounded-lg font-bold active:scale-95"
            >
              Done
            </button>
          </div>
        </div>
      )}

      
      <style>
        {`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}
      </style>
    </section>
  );
}
