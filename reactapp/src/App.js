import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";


import Success from "./components/Success/Success";
import Signup from "./components/Signup/Signup";
import Payment from "./components/Payment/Payment";
import Pay from "./components/Payment/Pay";
import PayHome from './components/Payment/PayHome';
// import Signup from "./components/Signup/Signup";

function App() {
  return (
    <>

      <Router>
      
        <Navbar isLogin={false}/>
        <Routes>
          {/* sakshi */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />


          {/* alok */}
          <Route path="/success" element={<Success booking='1' id='12345678' />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<PayHome/>} />
          <Route exact path='/pay' element={<Pay
            username="Alok kumar"
            card="1234567890"
            price="85"

          />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
