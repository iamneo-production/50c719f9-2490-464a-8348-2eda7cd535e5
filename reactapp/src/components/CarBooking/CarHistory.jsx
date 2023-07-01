import React from 'react'
import FirstImage from "../images/c1.png";
import SecondImage from "../images/c1.png";
import ThirdImage from "../images/c1.png";
// import "./history.css";
const Bookinghistory = () => {
  return (

    <div className='container'>
        <div className='row'>
            <h4 className='history_heading Bookpage'>Booking History</h4>
            <div className='col-lg-12 card history_card'>
                <div className="row">
                    {/* Car Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={FirstImage} alt="cab" className="history_image"/>
                    </div>
                    {/* Car Details */}
                    <div className='col-lg-4 mt-5'>
                        <h5>Your Booking Details</h5>
                        <p>Miniature car</p>
                        <p>Pickup  Date - 30th May 2023</p>
                        <p>Drop  Date - 30th May 2023</p>
                        <p>Pick UP Time - 5 PM</p>
                        <p>Booking Status- Booked</p>                            
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn-sm btn-warning '>Cancel Booking</button>
            </div>

            <div className='col-lg-12 mt-3 card history_card'>
                <div className="row">
                    {/* Car Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={SecondImage} alt="cab" className="history_image"/>
                    </div>
                    {/* Car Details */}
                    <div className='col-lg-4 mt-5'>
                        <h5>Your Booking Details</h5>
                        <p>Sedan Car</p>
                        <p>PickUp Date - 30th May 2023</p>
                        <p>Drop Date - 30th May 2023</p>
                        <p>PickUp Time - 4 PM</p>
                        <p>Booking Status-Booked</p>
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn-sm btn-warning'>Cancel Booking</button>
            </div>


            <div className='col-lg-12 mt-3 card history_card'>
                <div className="row">
                    {/* Car Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={ThirdImage} alt="cab" className="history_image"/>
                    </div>
                    {/* Car Details */}
                    <div className='col-lg-4 mt-5'>
                    <h5>Your Booking Details</h5>
                        <p>SUV Car</p>
                        <p>PickUp Date - 30th May 2023</p>
                        <p>Drop Date - 30th May 2023</p>
                        <p>PickUp Time - 4 PM</p>
                        <p>Booking Status-Booked</p>
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn-sm btn-warning'>Cancel Booking</button>
            </div>
        </div>
    </div>
  )
}

export default Bookinghistory