import React from "react";
import Styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const Hotel = ({ image, Heading, Description, setImageState }) => {
  const setWindowLocation = () => {
    window.localStorage.setItem("currentImage", image);
    window.localStorage.setItem("Heading", Heading);
  };
  return (
    <div className="card col-lg-5 my-3 py-3 mx-3">
      <div className="row">
        <div className="col-lg-5">
          <img src={image} alt="hotels" className="img-fluid" />
        </div>
        <div className="col-lg-7">
          <p className={`${Styles.HotelName}`}>{Heading}</p>
          <p className="text text-justify">{Description}</p>
          <div className={`${Styles.viewDetailsBtnDiv}`}>
            <button
              className={`${Styles.viewDetailsBtn}`}
              onClick={setWindowLocation}
            >
              <Link to={`/viewhotel`} className="text text-white">
                View Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
