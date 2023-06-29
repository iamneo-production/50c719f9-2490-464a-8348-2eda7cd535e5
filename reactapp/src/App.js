import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import HotelBooking from "./components/HotelBooking/HotelBooking";
import History from "./components/HotelBooking/History";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/HotelBooking" element={<HotelBooking />} />
      <Route path="/History" element={<History />} />

      </Routes>
     
    </div>
  );
}

export default App;
