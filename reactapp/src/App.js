import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import  Accordion from "./components/HelpAndSupport/FAQ/faq";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
       <Route path="/faq" element={<Accordion />} />
       
      </Routes>
     
    </div>
  );
}

export default App;
