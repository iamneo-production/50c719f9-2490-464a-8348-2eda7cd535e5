import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "./defaultHotelJpeg.jpeg";

function HotelSearch(props) {
  const onViewDetailsClickSave = () => {
    const imageToSet = props.image ? props.image : defaultImage;
    window.localStorage.setItem("currentImage", imageToSet);
    window.localStorage.setItem("Heading", props.title);
    window.localStorage.setItem("hotelId", props.hotelId);
    window.localStorage.setItem("price", props.price);
  };
  return (
    <>
      {/* <div
        class="card mb-3"
        style={{ maxWidth: "90vw", Height: "200px", fontSize: "15px" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.image}
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
              <p class="card-text text-success">{props.facility}</p>
              <p class="card-text">
                <li class="text-muted">{props.price}</li>
              </p>
              <button className="btn btn-primary text-white">view</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-md-4 col-sm-6 ">
        <div class="card m-3" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            style={{ width: "290px", height: "220px" }}
            src={props.image || defaultImage}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <p class="card-text">{props.facility}</p>
            <p class="card-text">{props.price}</p>
            <button
              className="btn btn-primary view-details-btn"
              onClick={onViewDetailsClickSave}
            >
              <Link to="/viewhotel" className="text-white">
                ViewDetails
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelSearch;
