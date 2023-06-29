import React from 'react'
import "./ViewFlight.css";
const ViewFlight = () => {
    const image = window.localStorage.getItem("currentImage");
    const Heading = window.localStorage.getItem("Heading");
  return (
    <div className='container my-3'>
    <div className='row card'>
    <div className="col-lg-12 mt-5 card">
        <div className="py-4">
        <img src={image} alt="Flight" className="flight_image" />
        </div>
    <h3 className='text text-center'>{Heading}</h3>
    <div>

    Everyone requires an easy and rapid form of transportation in today’s fast-paced society. In a similar case, airways are the best innovation. Reaching the location on time is extremely vital and necessary, especially for business travelers and travel enthusiasts.

    </div>
    <div className="col-lg-8 bank_offers py-3 my-5">
        <p className='text text-center'>SBI Bank Offers</p>
        <div className='d-flex flex-row justify-content-center'>
            <button className='btn btn-sm btn-dark'>USE CODE </button>
            <button>50%</button>
        </div>
        <div className='bookNowDiv'>

        <button className="btn btn-md bookNow">
          <a href="/book" style={{color:"white"}}>Book Now</a>
        </button>
        </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default ViewFlight