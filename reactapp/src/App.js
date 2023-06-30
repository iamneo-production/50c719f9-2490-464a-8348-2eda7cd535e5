import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import HomePage from "./components/Flighthome/HomePage";
import ViewFlight from "./components/Flighthome/ViewFlight";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/viewDetails" element={<ViewFlight/>} />
      </Routes>
     
    </div>
  );
}

export default App;
