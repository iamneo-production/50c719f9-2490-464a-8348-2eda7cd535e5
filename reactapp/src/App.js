import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
