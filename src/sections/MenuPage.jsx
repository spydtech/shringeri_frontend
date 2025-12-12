import React, { useEffect, useState, useRef } from "react";
import { FiShoppingCart, FiX, FiPlus, FiMinus } from "react-icons/fi";

// Correct image imports
import img1 from "../assets/panneer_tikka.jpeg";
import img2 from "../assets/chicken_65.jpg";
import img3 from "../assets/gobi_manchuria.jpg";
import img4 from "../assets/samosa.jpeg";
import img5 from "../assets/Tandoori-chicken.jpg";
import img6 from "../assets/Veg-Springroll.jpeg";
import img7 from "../assets/Tandoori Aloo Tikka.jpeg";
import img8 from "../assets/crispy-corn.jpg";
import img9 from "../assets/Chicken-Lollipop.jpg";
import img10 from "../assets/Fish-fry.jpg";
import img11 from "../assets/Popcorn-Chicken.jpg";
import img12 from "../assets/hyderabadi-chicken-biryani.webp";
import img13 from "../assets/Mutton-biryani.jpg";
import img14 from "../assets/veg-biryani.jpg";
import img15 from "../assets/egg-biriyani.jpeg";
import img16 from "../assets/Paneer-Biryani.jpg";
import img17 from "../assets/Prawn-Biryani.jpeg";
import img18 from "../assets/butter-chicken.jpg";
import img19 from "../assets/paneer-butter-masala.jpg";
import img20 from "../assets/rogan-josh.jpeg";
import img21 from "../assets/veg-kadai.jpg";
import img22 from "../assets/Chicken-tikka-masala.jpg";
import img23 from "../assets/palak-paneer.jpg";
import img24 from "../assets/Naan.jpg";
import img25 from "../assets/Butter-Naan.jpg";
import img26 from "../assets/roti.jpg";
import img27 from "../assets/paratha.jpg";
import img28 from "../assets/Garlic-Naan.jpg";
import img29 from "../assets/jeera-rice.jpg";
import img30 from "../assets/Ghee-Rice.jpg";
import img31 from "../assets/plai-basmati-rice.jpg";
import img32 from "../assets/lemon-rice.jpg";
import img33 from "../assets/Bisi-Bele-Bath.jpg";
import img34 from "../assets/Gulab-jamun.webp";
import img35 from "../assets/Rasmalai.jpg";
import img36 from "../assets/kulfi.jpg";
import img37 from "../assets/tiramisu.jpg";
import img38 from "../assets/Choco-chip.jpg";
import img39 from "../assets/Virgin+Mojito.jpg";
import img40 from "../assets/Sweet-lassi.jpg";
import img41 from "../assets/filter-coffee.jpg";

const categories = [
  "Starters & Sides",
  "Biryani",
  "Curries",
  "Breads",
  "Rice",
  "Desserts",
  "Beverages",
];

const menuData = {
  "Starters & Sides": [
    { id: "paneer-tikka", name: "Paneer Tikka", price: 260, unit: "₹", img: img1 },
    { id: "chicken-65", name: "Chicken 65", price: 320, unit: "₹", img: img2 },
    { id: "gobi-manchurian", name: "Gobi Manchurian", price: 220, unit: "₹", img: img3 },
    { id: "samosa", name: "Samosa", price: 80, unit: "₹", img: img4 },
    { id: "tandoori-chicken", name: "Tandoori Chicken", price: 420, unit: "₹", img: img5 },
    { id: "veg-spring-roll", name: "Veg Spring Roll", price: 180, unit: "₹", img: img6 },
    { id: "Tandoori Aloo Tikka", name: "Tandoori Aloo Tikka", price: 200, unit: "₹", img: img7 },
    { id: "Crispy Corn", name: "Crispy Corn", price: 200, unit: "₹", img: img8 },
    { id: "Chicken Lollipop", name: "Chicken Lollipop", price: 300, unit: "₹", img: img9 },
    { id: "Fish Fry", name: "Fish fry", price: 400, unit: "₹", img: img10 },
    { id: "Chicken Popcorn", name: "Chicken Popcorn", price: 500, unit: "₹", img: img11 },
  ],
  Biryani: [
    { id: "hyderabadi-biryani", name: "Hyderabadi Chicken Biryani", price: 380, unit: "₹", img: img12 },
    { id: "mutton-biryani", name: "Mutton Biryani", price: 420, unit: "₹", img: img13 },
    { id: "veg-biryani", name: "Veg Biryani", price: 260, unit: "₹", img: img14 },
    { id: "egg-biryani", name: "Egg Biryani", price: 300, unit: "₹", img: img15 },
    { id: "Paneer-biryani", name: "Paneer Biryani", price: 300, unit: "₹", img: img16 },
    { id: "Prawn-biryani", name: "Prawn Biryani", price: 500, unit: "₹", img: img17 },
  ],
  Curries: [
    { id: "butter-chicken", name: "Butter Chicken", price: 360, unit: "₹", img: img18 },
    { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 320, unit: "₹", img: img19 },
    { id: "rogan-josh", name: "Rogan Josh (Mutton)", price: 420, unit: "₹", img: img20 },
    { id: "veg-kadai", name: "Veg Kadai", price: 280, unit: "₹", img: img21 },
    { id: "Chicken-Tikka-Masala", name: "Chicken Tikka Masala", price: 320, unit: "₹", img: img22 },
    { id: "Palak-Paneer", name: "Palak Paneer", price: 220, unit: "₹", img: img23 },
  ],
  Breads: [
    { id: "naan", name: "Naan", price: 40, unit: "₹", img: img24 },
    { id: "butter-naan", name: "Butter Naan", price: 50, unit: "₹", img: img25 },
    { id: "roti", name: "Roti", price: 25, unit: "₹", img: img26 },
    { id: "paratha", name: "Paratha", price: 60, unit: "₹", img: img27 },
    { id: "Garlic-Naan", name: "Garlic Naan", price: 50, unit: "₹", img: img28 },
  ],
  Rice: [
    { id: "jeera-rice", name: "Jeera Rice", price: 140, unit: "₹", img: img29 },
    { id: "ghee-rice", name: "Ghee Rice", price: 160, unit: "₹", img: img30 },
    { id: "plain-rice", name: "Plain Basmati Rice", price: 120, unit: "₹", img: img31 },
    { id: "Lemon-Rice", name: "Lemon Rice", price: 120, unit: "₹", img: img32 },
    { id: "Bisi-Bele-Bath", name: "Bisi Bele Bath", price: 180, unit: "₹", img: img33 },
  ],
  Desserts: [
    { id: "gulab-jamun", name: "Gulab Jamun", price: 120, unit: "₹", img: img34 },
    { id: "rasmalai", name: "Rasmalai", price: 140, unit: "₹", img: img35 },
    { id: "kulfi", name: "Kulfi", price: 110, unit: "₹", img: img36 },
    { id: "Tiramisu", name: "Tiramisu", price: 350, unit: "₹", img: img37 },
    { id: "Mini-chocolate-chip", name: "Mini chocolate chip", price: 250, unit: "₹", img: img38 },
  ],
  Beverages: [
    { id: "Virgin Mojito", name: "Virgin Mojito", price: 150, unit: "₹", img: img39 },
    { id: "sweet-lassi", name: "Sweet Lassi", price: 90, unit: "₹", img: img40 },
    { id: "filter-coffee", name: "Filter Coffee", price: 50, unit: "₹", img: img41 },
  ],
};

const fmtCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

function FloatingCartButton({ count, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open cart"
      className="fixed right-5 bottom-6 z-50 flex items-center gap-3 bg-[#F13C44] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
    >
      <FiShoppingCart className="w-5 h-5" />
      <span className="hidden sm:inline font-bold">Cart</span>
      {count > 0 && <span className="ml-2 bg-white text-[#F13C44] font-bold rounded-full px-2 py-0.5 text-xs">{count}</span>}
    </button>
  );
}

function ItemModal({ item, visible, onClose, onAdd }) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [item]);

  if (!visible || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src={item.img} alt={item.name} className="w-full h-64 md:h-full object-cover" />
          </div>

          <div className="md:w-1/2 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-extrabold">{item.name}</h3>
                <div className="text-gray-500 mt-1">{item.unit}{item.price} • {fmtCurrency(item.price)}</div>
              </div>
              <button onClick={onClose} aria-label="Close modal" className="text-gray-600 hover:text-gray-900">
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <p className="mt-4 text-gray-700">{item.desc || "Delicious and freshly prepared."}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center rounded-full overflow-hidden border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg"
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <div className="px-6 py-2 font-bold">{qty}</div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2 text-lg"
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>

              <button
                onClick={() => {
                  onAdd(item, qty);
                  onClose();
                }}
                className="ml-auto bg-[#F13C44] text-white px-5 py-3 rounded-xl font-bold shadow hover:opacity-95"
              >
                Add • {item.unit}{item.price * qty}
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-500">Free cancellation • No hidden fees</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, cart, onUpdate, onClear }) {
  const total = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      </div>

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full md:w-[420px] bg-white shadow-2xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">Your Cart</h2>
            <button onClick={onClose} aria-label="Close cart" className="text-gray-600 hover:text-gray-900">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="mt-8 text-gray-600">Your cart is empty. Add some delicious items to get started.</div>
          ) : (
            <div className="mt-6 flex-1 overflow-auto space-y-4">
              {cart.map((it) => (
                <div key={it.id} className="flex gap-3 items-center">
                  <img src={it.img} alt={it.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold">{it.name}</div>
                        <div className="text-sm text-gray-500">{it.unit}{it.price}</div>
                      </div>
                      <div className="font-extrabold">{it.unit}{it.price * it.qty}</div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => onUpdate(it.id, Math.max(1, it.qty - 1))} className="p-2 rounded bg-gray-100">
                        <FiMinus />
                      </button>
                      <div className="px-3">{it.qty}</div>
                      <button onClick={() => onUpdate(it.id, it.qty + 1)} className="p-2 rounded bg-gray-100">
                        <FiPlus />
                      </button>
                      <button onClick={() => onUpdate(it.id, 0)} className="ml-auto text-sm text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm text-gray-500">Subtotal</div>
              <div className="font-extrabold text-lg">₹{total}</div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-[#F13C44] text-white py-3 rounded-xl font-bold shadow">Checkout</button>
              <button onClick={onClear} className="px-4 py-3 rounded-xl border">Clear</button>
            </div>

            <div className="mt-3 text-xs text-gray-500">Secure checkout coming soon — this is a demo flow.</div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function MenuPage() {
  const [active, setActive] = useState(categories[0]);
  const [modalItem, setModalItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabsRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("menu_cart_v2");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to parse saved cart", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("menu_cart_v2", JSON.stringify(cart));
    } catch (e) {
      console.warn("Failed to save cart", e);
    }
  }, [cart]);

  const items = menuData[active] || [];

  const handleAdd = (item, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty, img: item.img, unit: item.unit }];
    });
    setCartOpen(true);
  };

  const updateCart = (id, qty) => {
    setCart((prev) => {
      if (qty <= 0) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, qty } : p));
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  useEffect(() => {
    const el = tabsRef.current?.querySelector(`[data-cat='${CSS.escape(active)}']`);
    if (el?.scrollIntoView) el.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [active]);

  return (
    <div className="min-h-screen bg-[#FFF9F6] pb-24">
      <div className="w-full bg-[#111827] text-white">
        <div className="max-w-[1400px] mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-extrabold">Shringeri</div>
            <div className="text-sm text-gray-300 hidden md:block">— Indian Kitchen</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { setSidebarOpen((s) => !s); }}
              className="bg-white/5 text-white px-3 py-2 rounded-full hidden lg:inline"
              aria-expanded={sidebarOpen}
              aria-controls="left-sidebar"
            >
              Filters
            </button>

            <button onClick={() => setCartOpen(true)} className="bg-white/5 px-3 py-2 rounded-full text-white flex items-center gap-2">
              <FiShoppingCart /> <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && <span className="ml-2 bg-[#F13C44] text-white rounded-full px-2 text-xs">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold">Menu</h1>

          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <div className="px-3 py-2 bg-gray-100 rounded-full"></div>
            <div className="px-3 py-2 bg-gray-100 rounded-full"></div>
          </div>
        </div>

        <div
          ref={tabsRef}
          className="mt-4 flex gap-3 overflow-x-auto pb-2 hide-scrollbar"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => {
            const activeClass = active === cat ? "bg-[#111827] text-white shadow-lg" : "bg-white text-gray-800 border";
            return (
              <button
                key={cat}
                data-cat={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2 rounded-full font-semibold ${activeClass} transition`}
                role="tab"
                aria-selected={active === cat}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 mt-8 flex flex-col lg:flex-row gap-8">
        <aside
          id="left-sidebar"
          className={`lg:w-[300px] w-full lg:block ${sidebarOpen ? "block" : "hidden"} lg:static lg:translate-x-0`}
        >
          <div className="bg-[#E6DCCF] rounded-xl p-5 shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-700">Close</button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="font-semibold text-sm mb-2">Sort</div>
                <select className="w-full p-3 rounded-lg border bg-white">
                  <option>Popular</option>
                  <option>Price — Low to High</option>
                  <option>Price — High to Low</option>
                </select>
              </div>

              <div>
                <div className="font-semibold text-sm mb-2">Diet</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-full bg-white">Veg</button>
                  <button className="px-3 py-1 rounded-full bg-white">Non-Veg</button>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-2">Price Range</div>
                <input type="range" min="50" max="1000" defaultValue="500" className="w-full" />
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="relative">
                  <img src={item.img} alt={item.name} className="w-full h-44 object-cover" onClick={() => setModalItem(item)} />
                  <div className="absolute left-3 bottom-3 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                    {item.unit}{item.price}
                  </div>
                </div>

                <div className="p-4 flex items-center">
                  <div className="flex-1">
                    <h4 className="font-bold truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                  </div>

                  <div className="ml-4 flex flex-col items-end gap-2">
                    <button
                      onClick={() => setModalItem(item)}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleAdd(item, 1)}
                      aria-label={`Add ${item.name} to cart`}
                      className="bg-[#111827] text-white rounded-full px-3 py-2 shadow"
                    >
                      + <span className="sr-only">Add</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {items.length === 0 && (
            <div className="mt-8 text-center text-gray-600">
              Items coming soon for <strong>{active}</strong>.
            </div>
          )}
        </main>
      </div>

      <ItemModal item={modalItem} visible={!!modalItem} onClose={() => setModalItem(null)} onAdd={handleAdd} />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onUpdate={updateCart} onClear={clearCart} />

      <FloatingCartButton count={cartCount} onClick={() => setCartOpen(true)} />
    </div>
  );
}