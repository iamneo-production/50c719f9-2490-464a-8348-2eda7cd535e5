import React from 'react'
import FirstImage from "../images/flight_in.avif";
import SecondImage from "../images/flight_in.avif";
import ThirdImage from "../images/flight_in.avif";
// import "./History.css";

const History = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h4 className='history_heading'>Your Booking History</h4>
                <div className='col-lg-12 card history_card'>
                    <div className="row">

                        <div className='col-lg-7 mt-4'>
                            <img src={FirstImage} alt="flight" className="history_image" />
                        </div>

                        <div className='col-lg-4 mt-5'>
                            <h5>Your Flight Booking Details</h5>
                            <p>From Location - Chennai</p>
                            <p>To Location - Bangloore</p>
                            <p>Passengers - 2 </p>
                            <p>Seat number : 1A,1B</p>
                            <p>Payment Status - Paid</p>
                        </div>
                    </div>
                    <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
                </div>

                <div className='col-lg-12 mt-3 card history_card'>
                    <div className="row">

                        <div className='col-lg-7 mt-3'>
                            <img src={SecondImage} alt="hotel" className="history_image" />
                        </div>

                        <div className='col-lg-4 mt-5'>
                            <h5>Your Flight Booking Details</h5>
                            <p>From Location - Bangloore</p>
                            <p>To Location - Trichy</p>
                            <p>Passengers - 2 </p>
                            <p>Seat number : 3A,3B</p>
                            <p>Payment Status - Paid</p>
                        </div>
                    </div>
                    <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
                </div>


                <div className='col-lg-12 mt-3 card history_card'>
                    <div className="row">
                       
                        <div className='col-lg-7 mt-3'>
                            <img src={ThirdImage} alt="hotel" className="history_image" />
                        </div>
                  
                        <div className='col-lg-4 mt-5'>
                            <h5>Your Flight Booking Details</h5>
                            <p>From Location - Delhi</p>
                            <p>To Location - Mumbai</p>
                            <p>Passengers - 1 </p>
                            <p>Seat number : 2A</p>
                            <p>Payment Status - Paid</p>
                        </div>
                    </div>
                    <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
                </div>
            </div>
        </div>
    )
}

export default History