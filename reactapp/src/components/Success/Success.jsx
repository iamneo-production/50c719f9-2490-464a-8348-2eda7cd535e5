import React from "react";
import { Link } from "react-router-dom";

function Success(props) {
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken")); // Retrieve decodedToken from localStorage

  return (
    <>
      {props.booking ? (
        <div className="container mt-3">
          <div className="jumbotron">
            <h1 className="display-4">Booking Successful!!</h1>
            <p className="lead">Congratulation {decodedToken.firstName} !! your booking has successfully confirmed...</p>
            <hr className="my-4" />
            <p>For more Bookings..</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mt-3">
          <div className="jumbotron">
            <h1 className="display-4">Booking failed!!</h1>
            <p className="lead">Please try again later!!!...</p>
            <hr className="my-4" />
            {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}

            <Link className="btn btn-primary btn-lg" to="/" role="button">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Success;
