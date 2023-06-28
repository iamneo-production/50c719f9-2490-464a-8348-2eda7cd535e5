import React, { useState } from "react";
import Car from "./Car";
import FirstImage from "../images/c1.png";
import SecondImage from "../images/c1.png";
import ThirdImage from "../images/c1.png";
import FourthImage from "../images/c1.png";
import { DatePicker, TimePicker, Select } from "antd";

const { Option } = Select;

const CarHome = () => {
  const [imageState, setImageState] = useState("");

  const setWindowLocation = (image, heading) => {
    window.localStorage.setItem("currentImage", image);
    window.localStorage.setItem("Heading", heading);
  };

  return (
    <div className="container mt-5">
      <div className="row card py-3">
        <div className="col-lg-12">
          <p className="text-center">Grab your car!!! And Enjoy your Vacations!!!</p>
          <div className="row pb-3">
            <div className="col-lg-4 card">
              <p className="mt-4">Pickup Location:</p>
              <Select defaultValue="Hyderabad" style={{ width: 200 }}>
                <Option value="Hyderabad">Hyderabad</Option>
                <Option value="Vikshakapatnam">Vikshakapatnam</Option>
                <Option value="Bangloore">Bangloore</Option>
                <Option value="Mumbai">Mumbai</Option>
                <Option value="Chennai">Chennai</Option>
                <Option value="Delhi">Delhi</Option>
                <Option value="Pune">Pune</Option>
                <Option value="Kolkatta">Kolkatta</Option>
              </Select>
            </div>
            <div className="col-lg-2 card py-2">
              <p>Drop Location:</p>
              <Select defaultValue="Hyderabad" style={{ width: 165 }}>
                <Option value="Hyderabad">Hyderabad</Option>
                <Option value="Vikshakapatnam">Vikshakapatnam</Option>
                <Option value="Bangloore">Bangloore</Option>
                <Option value="Mumbai">Mumbai</Option>
                <Option value="Chennai">Chennai</Option>
                <Option value="Delhi">Delhi</Option>
                <Option value="Pune">Pune</Option>
                <Option value="Kolkatta">Kolkatta</Option>
              </Select>
            </div>
            <div className="col-lg-2 card py-2">
              <p>pickup Date:</p>
              <DatePicker />
            </div>
            <div className="col-lg-2 card">
              <p>Drop Date:</p>
              <DatePicker />
            </div>
            <div className="col-lg-2 card">
              <p>Pickup Time:</p>
              <TimePicker />
            </div>
          </div>
        </div>
      </div>

      <div className="row card py-3">
        <div className="col-lg-12">
          <div className="d-flex flex-row justify-content-around">
            <h3>Offers</h3>
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
        </div>
      </div>

      <div className="row">
        <Car
          image={FirstImage}
          setImageState={setImageState}
          Heading="Sedan Cars"
          Description="Sedan Cars are best for family usage!!! In sedan cars, five members can travel easily with ample boot space."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image={SecondImage}
          setImageState={setImageState}
          Heading="Miniature Cars"
          Description="Mini cars are best for small family usage!!! In mini cars, four members can travel comfortably with lower fuel costs."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image={ThirdImage}
          setImageState={setImageState}
          Heading="SUV Cars"
          Description="SUV cars are also great for family usage!!! In SUV cars, five members can travel easily, although there is limited boot space."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image={FourthImage}
          setImageState={setImageState}
          Heading="MPV Cars"
          Description="MPV cars are perfect for large family travel!!! In MPV cars, more than six members can travel comfortably, but running costs may be higher."
          setWindowLocation={setWindowLocation}
        />
      </div>
    </div>
  );
};

export default CarHome;