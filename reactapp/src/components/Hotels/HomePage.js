import React,{useState} from "react";
import Styles from "./HomePage.module.css";
import Hotel from "./Hotel";
import FirstImage from "../images/FirstHotelImage.jpg";
import SecondImage from "../images/SecondHotelImage.jpg";
import ThirdImage from "../images/ThirdHotelImage.jpg";
import FourthImage from "../images/FourthHotelImage.jpg";
import { DatePicker, Select } from "antd";;

const { RangePicker } = DatePicker;
const HomePage = () => {
const[imageState,setImageState] = useState("");

  return (
    <div className="container mt-5">
      <div className={`row ${Styles.firstRow}`}>
      <p className={Styles.textCenter}>Book Domestic and International Property Online. To list your property <span><a href="/">click here</a></span></p>
        <div className="col-lg-12">
          <div className="row pb-3">
            <div className="col-lg-4 card">
              <p className="mt-4">City Name</p>
              <Select
                defaultValue="Hyderabad"
                style={{
                  width: 200,
                }}
                onChange=""
                options={[
                  {
                    value: "Hyderabad",
                    label: "Hyderabad",
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
            <div className="col-lg-2 card py-2">
              <p>Check In</p>
              <p>29th May 2023</p>
              <RangePicker />
            </div>
            <div className="col-lg-2 card py-2">
              <p>Check Out</p>
              <p>30th May 2023</p>
              <RangePicker />
            </div>
            <div className="col-lg-2 card">
              <p>Rooms & Guest</p>
              <p>
                <span className={Styles.one}>1</span> Room{" "}
                <span className={Styles.two}>2 </span>Adults
              </p>
            </div>
            <div className="col-lg-2 card">
              <p>Price per night</p>
              <p>&#8377; 0- &#8377;1500</p>
              <p>&#8377; 1500- &#8377;2000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${Styles.secondRow}`}>
        <div>
          <button className={Styles.searchBtn}>SEARCH</button>
        </div>
      </div>

      <div className={`row ${Styles.thirdRow} py-3`}>
        <div className="col-lg-12 card">
          <div className="d-flex flex-row justify-content-around ">
            <h3>Offers</h3>
            <p>Hotels</p>
            <p>All Offers</p>
            <p>Flights</p>
            <p>Holidays</p>
            <p>Trains</p>
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
        </div>

        <Hotel
          image={FirstImage}
          setImageState = {setImageState}
          
          Heading="Kohinoor Hotel"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.."
        />
        <Hotel
          image={SecondImage}
          setImageState = {setImageState}

          Heading="Hotel Ama"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.."
        />
        <Hotel
          image={ThirdImage}
          setImageState = {setImageState}

          Heading="Hotel SAROVAR"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.."
        />
        <Hotel
          image={FourthImage}
          setImageState = {setImageState}

          Heading="Hotel Home Stay"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.."
        />
      </div>
    </div>
  );
};

export default HomePage;
