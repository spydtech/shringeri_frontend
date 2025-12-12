import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Specials from "./sections/Specials";
import PromoDish from "./sections/PromoDish";
import FindRestaurant from "./sections/FindRestaurant";
import Footer from "./components/Footer";
import MenuPage from "./sections/MenuPage";
import LocationsPage from "./sections/LocationPage";
import GiftVouchers from "./sections/GiftVouchers";
import SignUp from "./sections/SignUp";
import BookTable from "./sections/BookTable"; 
import BookingPage from "./sections/BookingPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="mt-[100px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Specials />
                <PromoDish />
                <FindRestaurant />
              </>
            }
          />

          <Route path="/menu" element={<MenuPage />} />

          <Route path="/locations" element={<LocationsPage />} />

          <Route path="/gift-vouchers" element={<GiftVouchers />} />

          <Route path="/signup" element={<SignUp />} />

         
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/book/:locationId" element={<BookingPage/>}/>

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
