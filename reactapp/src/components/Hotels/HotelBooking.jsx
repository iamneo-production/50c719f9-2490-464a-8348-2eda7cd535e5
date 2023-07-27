import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

// import Styles from "./ViewHotel.module.css"

const HotelBooking = () => {
  const image = window.localStorage.getItem("currentImage");
  const Heading = window.localStorage.getItem("Heading");
  const hotel_Id_prop = window.localStorage.getItem("hotelId");
  const price = window.localStorage.getItem("price");
  const hotellocation = window.localStorage.getItem("hotellocation");
  // const [data, setData] = useState([]);

  const [hotelBooking, setHotelBooking] = useState({
    hotelId: hotel_Id_prop,
    custName: "",
    custGender: "",
    custEmail: "",
    custPhone: "",
    custAddress: "",
    checkInDate: "",
    checkOutDate: "",
    paymentStatus: "false",
    totalCost: "",
    rooms: 0,
  });

  // destructuring data inside hotel state/object
  const {
    hotelId,
    custName,
    checkInDate,
    checkOutDate,
    custGender,
    custEmail,
    custPhone,
    custAddress,
    paymentStatus,
    totalCost,
    rooms,
  } = hotelBooking;

  const onInputChange = (e) => {
    setHotelBooking({ ...hotelBooking, [e.target.name]: e.target.value });
  };

  const calcTotalCost = () => {
    return price * rooms;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const calculatedTotalCost = calcTotalCost(); // Calculate totalCost before submitting the data
    const updatedHotelBooking = {
      ...hotelBooking,
      totalCost: calculatedTotalCost,
    };

    try {
      const response = await api.post(
        "/hotel/book",
        updatedHotelBooking
      );
      if (response.status === 200) {
        // Data posting to the server was successful
        alert("Success");
        window.location.href = "/payment";
        // Redirect to next page
      } else {
        alert("Failed to book the hotel. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    const propsToPass = {
      facility: Heading,
      location: hotellocation,
      username: hotelBooking.custName,
      travellers: hotelBooking.rooms,
      address: hotelBooking.custAddress,
      balance: price,
      date: hotelBooking.checkInDate,
      total: hotelBooking.totalCost,
    };

    // Use the navigate function and pass the props as the second argument
    navigate("/payment", { state: propsToPass });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <img
            className="rounded-circle"
            src={image}
            alt="hotels"
            style={{ height: "200px", width: "200px " }}
          />
          <br />
          <h3>{Heading}</h3>
          <div className="col-lg-12 d-flex flex-row justify-content-around mt-5 card p-3">
            <div>
              <p>Check In</p>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <p>Check Out</p>

              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="checkOutDate"
                value={checkOutDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <p>Rooms</p>
              <p>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  min="1"
                  max="5"
                  style={{ width: "80px" }}
                  value={rooms}
                  onChange={(e) => onInputChange(e)}
                />
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "0" }}>1 Night | 2 Adults</p>
            </div>
          </div>

          <div className="mt-3">
            <p>{Heading}</p>
            <small>2 Adults</small>
            <ul>
              <li>Room with breakfast</li>
              <li>Free Breakfast</li>
              <li>Free Early Check in, Subject to Availability</li>
            </ul>
          </div>
        </div>

        <div className={`col-lg-8 `}>
          <div className="mt-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Name"
              name="custName"
              value={custName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div>
            <p>Gender:</p>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="custGender"
                value="Male"
                checked={hotelBooking.custGender === "Male"}
                onChange={(e) => onInputChange(e)}
              />
              <label className="form-check-label">Male</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="custGender"
                value="Female"
                checked={hotelBooking.custGender === "Female"}
                onChange={(e) => onInputChange(e)}
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
          <br></br>
          <div>
            <label>Email:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Email"
              name="custEmail"
              value={custEmail}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Mobile Number"
              name="custPhone"
              value={custPhone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="my-5">
            <button
              type="submit"
              className="btn btn-primary bookNow"
              onClick={handleNavigate}
            >
              {/* <Link to="/payment" className="text-white"> */}
              Book now
              {/* </Link> */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelBooking;
