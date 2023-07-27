import React,{useState} from "react";
import Styles from "./HomePage.module.css";
import Flight from "./Flight";
import FirstImage from "../Images/airasiaflightimage1.jpg";
import SecondImage from "../Images/Indigo.jpeg";
import ThirdImage from "../Images/australia.jpg";
import FourthImage from "../Images/Kingfisher.jpg";
import { DatePicker, Select } from "antd";;


const { RangePicker } = DatePicker;
const HomePage = () => {
const[imageState,setImageState] = useState("");

  return (
    <div className="container mt-5">
      <div className={`row ${Styles.firstRow}`}>
      <p className={Styles.textCenter}>Book Domestic and International Property Online. To list your property <span><a href="/">click here</a></span></p>
      <div className="col-lg-12 mt-2">
          <div className="row pb-4">
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
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Travellers</p>
              <Select
                defaultValue="FirstClass"
                onChange=""
                options={[
                  {
                    value: "FirstClass",
                    label: "FirstClass",
                  },
                  {
                    value: "SecondClass",
                    label: "SecondClass",
                  },
                  {
                    value: "EconomyClass",
                    label: "EconomyClass",
                  },
                  {
                    value: "BusinessClass",
                    label: "BusinessClass",
                  },
                ]}
              />
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

        <Flight
          image={FirstImage}
          setImageState = {setImageState}
          
          Heading="AirAsia"
          Description="It is the largest airline in Malaysia by fleet size and destinations. AirAsia operates scheduled domestic and international flights to more than 165 destinations spanning 25 countries"
        />
        <Flight
          image={SecondImage}
          setImageState = {setImageState}

          Heading="IndiGo"
          Description="IndiGo is India’s largest passenger airline with a domestic market share of 57.5% as of April, 2023. We primarily operate in India’s domestic air travel market as a low-cost carrier.."
        />
        <Flight
          image={ThirdImage}
          setImageState = {setImageState}

          Heading="Virgin Australia"
          Description="Fly with award-winning service and great value fares to popular destinations across Australia. We can't wait to welcome you onboard Virgin Australia soon.."
        />
        <Flight
          image={FourthImage}
          setImageState = {setImageState}

          Heading="Kingfisher"
          Description="It has a fleet of over 66 aircrafts comprising of the Airbus and ATR aircrafts. It flies domestic and international flights with more than 350 daily departures and connects over 60 cities in India and 10 international destinations.."
        />
      </div>
    </div>
  );
};

export default HomePage;
