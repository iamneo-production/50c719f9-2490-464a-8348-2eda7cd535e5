import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

function Payment(props) {
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  const [data, setdata] = useState({
    customerName: props.username,
    price: props.balance,
    date: props.date,
    location: props.location,
    type: props.facility,
  });

  const navigate = useNavigate();

  const handlesubmit = () => {
    api.post(`/booking/${decodedToken.id}`, data).then(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

    navigate("/pay", { state: data });

  };

  return (
    <div className="container mt-3">
      <section>
        <div class="d-flex justify-content-between align-items-center mb-5">
          <div class="d-flex flex-row align-items-center">
            <h4 class="text-uppercase mt-1">Eligible</h4>
            <span class="ms-2 me-3">Pay</span>
          </div>
          <a href="#!">Cancel and return to the website</a>
        </div>

        <div class="row">
          <div class="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
            <h6 class="mb-0 text-success">${props.balance}</h6>
            <h5 class="mb-3">{props.facility} Booking</h5>
            <h6 class="mb-0">Location : {props.location}</h6>
            <div>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row mt-1">
                  <h6>Name - {props.username}</h6>
                </div>
                <div class="d-flex flex-row mt-1">
                  <h6>No of Travellers :{props.travellers}</h6>
                </div>
                {/* <div class="d-flex flex-row align-items-center text-primary">
                                    <span class="ms-1">Add Insurer card</span>
                                </div> */}
              </div>
              <p>Address : {props.location}</p>
              <p>{props.date}</p>
              <div
                class="p-2 d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#eee" }}
              >
                <span>Aetna - Open Access</span>
                <span>Aetna - OAP</span>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row mt-1">
                  <h6>Traveller Balance: </h6>
                  <h6 class="fw-bold text-success ms-1">{props.balance}</h6>
                </div>
                <div class="d-flex flex-row align-items-center text-primary">
                  <span class="ms-1">Add Payment card</span>
                </div>
              </div>
              <p>
                Address:
                {props.address}
              </p>
              <div class="d-flex flex-column mb-3">
                <div
                  class="btn-group-vertical"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option1"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary btn-lg" for="option1">
                    <div class="d-flex justify-content-between">
                      <span>VISA </span>
                      <span>**** 5436</span>
                    </div>
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option2"
                    autocomplete="off"
                    checked
                  />
                  <label class="btn btn-outline-primary btn-lg" for="option2">
                    <div class="d-flex justify-content-between">
                      <span>MASTER CARD </span>
                      <span>**** 5038</span>
                    </div>
                  </label>
                </div>
              </div>
              <button
                class="btn btn-success btn-lg btn-block"
                onClick={handlesubmit}
              >
                Proceed to payment
              </button>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
            <div class="p-3" style={{ backgroundColor: "#eee" }}>
              <span class="fw-bold">Order Recap</span>
              <div class="d-flex justify-content-between mt-2">
                <span>Price</span> <span>{props.balance}</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>Amount Deductible</span> <span>$0.0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>GST(5%)</span> <span>+ ${5}</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>Copayment </span> <span>+ 40.00</span>
              </div>

              <hr />
              <div class="d-flex justify-content-between mt-2">
                <span>Total </span>{" "}
                <span class="text-success">${props.balance}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
