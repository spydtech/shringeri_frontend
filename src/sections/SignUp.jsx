import React, { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: "",
    first: "",
    last: "",
    dob: "",
    location: "",
    optin: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.optin) {
      return alert("Please enter email & agree to opt-in!");
    }

    alert(" You are successfully signed up!");
  };

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#e22927] text-[#f4eae2] flex flex-col items-center py-16 md:py-24 px-4 sm:px-6">

     
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-center tracking-tight leading-tight">
        Newsletter Sign Up
      </h1>

      <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 text-center max-w-2xl">
        Sign up for exclusive news and offers
      </p>

      
      <form
        className="mt-14 sm:mt-16 w-full max-w-4xl space-y-10"
        onSubmit={handleSubmit}
      >
        
        <div>
          <label className="block text-sm mb-2 tracking-wide">EMAIL ADDRESS *</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 bg-white text-black text-lg outline-none rounded-md"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 tracking-wide">FIRST NAME</label>
            <input
              type="text"
              className="w-full p-4 bg-white text-black text-lg outline-none rounded-md"
              value={form.first}
              onChange={(e) => update("first", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 tracking-wide">LAST NAME</label>
            <input
              type="text"
              className="w-full p-4 bg-white text-black text-lg outline-none rounded-md"
              value={form.last}
              onChange={(e) => update("last", e.target.value)}
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 tracking-wide">DATE OF BIRTH</label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-4 bg-white text-black text-lg outline-none rounded-md"
              value={form.dob}
              onChange={(e) => update("dob", e.target.value)}
            />

            <p className="text-xs mt-2 opacity-80">
              Tell us your birthday and we'll send you a treat on us
            </p>
          </div>

          <div>
            <label className="block text-sm mb-2 tracking-wide">FAVOURITE LOCATION</label>
            <select
              className="w-full p-4 bg-white text-black text-lg outline-none rounded-md"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            >
              <option value="">Select a location</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
        </div>

        
        <div className="flex items-start sm:items-center gap-3">
          <input
            type="checkbox"
            className="w-5 h-5 sm:w-6 sm:h-6"
            checked={form.optin}
            onChange={(e) => update("optin", e.target.checked)}
          />
          <span className="text-xs sm:text-sm tracking-wide leading-tight">
            OPT IN TO OUR MAILING LIST *
          </span>
        </div>

        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-10 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
