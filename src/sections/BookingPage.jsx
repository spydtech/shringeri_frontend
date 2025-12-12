import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function BookingPage() {
  const { locationId } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:30");
  const [people, setPeople] = useState("2 People");

  const names = {
    soho: "Soho",
    spitalfields: "Spitalfields",
    stalbans: "St Albans",
  };

  return (
    <div className="min-h-screen bg-[#D71929] text-white px-10 pt-28">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold">{names[locationId]}</h2>
        <Link to="/book" className="underline">Reset Location</Link>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-12 max-w-3xl">
        <div>
          <label className="text-sm">DATE</label>
          <input type="date" className="w-full p-4 text-black rounded-xl"
            value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div>
          <label className="text-sm">TIME</label>
          <input type="time" className="w-full p-4 text-black rounded-xl"
            value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div>
          <label className="text-sm">NUMBER OF PEOPLE</label>
          <select className="w-full p-4 text-black rounded-xl"
            value={people} onChange={(e) => setPeople(e.target.value)}>
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
          </select>
        </div>
      </div>

      <button className="bg-black text-white w-full max-w-3xl p-5 rounded-full mt-10 text-xl font-bold">
        Book Now
      </button>

      <p className="mt-6 max-w-3xl">
        Pho is mostly a walk-in restaurant, and we always save the majority...
      </p>
    </div>
  );
}
