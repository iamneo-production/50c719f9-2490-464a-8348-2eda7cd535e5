import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";


import Success from "./components/Success/Success";
import Signup from "./components/Signup/Signup";
import Payment from "./components/Payment/Payment";
import Pay from "./components/Payment/Pay";
// import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* sakshi */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />


        {/* alok */}
        <Route path="/success" element={<Success booking='1' id='12345678' />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment
          facility="hotel"
          location="Kolkata"
          username="Alok kumar"
          travellers="3"
          address="Dhanbad,Jharkahnd, 828114"
          balance="$71"
          date="29/06/2023"
          total='85'
        />} />
        <Route exact path='/pay' element={<Pay
          username="Alok kumar"
          card="1234567890"
          price="85"

        />}></Route>



      </Routes>

    </div>
  );
}

export default App;
