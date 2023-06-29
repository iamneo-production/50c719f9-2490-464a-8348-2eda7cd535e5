import React from "react"
import { DatePicker, Select } from "antd"
// import "./FlightBooking.css"
import flightImage from "../images/flight_in.avif"
import SeatSelection from "./SeatSelection"

function FlightBooking() {
  return (
    <div className="container">
      <div className="row location-details">
        <div className="col-lg-12 mt-2">
          <h2 className="font-bold">Flight Summary</h2>
          <div className="row pb-4">
            <div className="col-lg-2 text-center p-3">
              <img
                className="w-50 h-50 rounded-circle"
                src={flightImage}
                alt="Flight"
              />
              <h3 className="font-bold1">AirAsia</h3>
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">From Location</p>
              <Select
                defaultValue="chennai"
                onChange=""
                options={[
                  {
                    value: "Hyderabad",
                    label: "Hyderabad",
                  },
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Bangloore",
                    label: "Bangloore",
                  },
                  {
                    value: "Trichy",
                    label: "Trichy",
                  },
                  {
                    value: "Delhi",
                    label: "Delhi",
                  },
                  {
                    value: "Salem",
                    label: "Salem",
                  },
                  {
                    value: "Pune",
                    label: "Pune",
                  },
                  {
                    value: "Kolkatta",
                    label: "Kolkatta",
                  },
                ]}
              />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">To Location</p>
              <Select
                defaultValue="Trichy"
                onChange=""
                options={[
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Vikshakapatnam",
                    label: "Vikshakapatna",
                  },
                  {
                    value: "Bangloore",
                    label: "Bangloore",
                  },
                  {
                    value: "Mumbai",
                    label: "Mumbai",
                  },
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Delhi",
                    label: "Delhi",
                  },
                  {
                    value: "Pune",
                    label: "Pune",
                  },
                  {
                    value: "Kolkatta",
                    label: "Kolkatta",
                  },
                ]}
              />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Departure Date</p>
              <DatePicker />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Passengers</p>
              <Select
                defaultValue="1"
                onChange=""
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                  {
                    value: "3",
                    label: "3",
                  },
                  {
                    value: "4",
                    label: "4",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row passenger-details">
        <div className="p-3 col-lg-12">
          <h2 className="font-bold">Passenger Details</h2>
          <div className="p-10 full-col">
            <form action="Passengers-details" method="POST">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name :</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email :</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="mobile">Mobile :</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="gender">Gender:</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      required
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="button" class="btn btn-outline-primary button">
                  Add Passenger
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-3 col-lg-12 seats-details">
          <h2 className="p-2 font-bold">Seats</h2>

          <div className="row pb-6 m-3">
            <div className="col-lg-8 ">
              <SeatSelection />
            </div>
          </div>
        </div>
      </div>

      <div className="row button-info mb-5 p-3">
        <div className="terms-condition">
          <p>
            By clicking on the Book button below to proceed with the booking, I
            confirm that I have read and I accept the
            <a href="">Fare Rules</a>, <a href="">the Privacy Policy</a>,
            <a href="">the User Agreement</a> and
            <a href="">Terms of Service</a>.
          </p>
        </div>
        <div className="button1">
          <button type="button" class="btn btn-primary button1">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlightBooking