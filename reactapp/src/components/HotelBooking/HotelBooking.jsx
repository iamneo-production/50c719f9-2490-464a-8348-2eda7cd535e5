import React from 'react'
import Styles from "./ViewHotel.module.css"
const HotelBooking = () => {
  return (
    <div className='container'>
        <div className='row'>
        <h3>Hotel Kohinoor</h3>
            <div className='col-lg-12 d-flex flex-row justify-content-around mt-5 card'>
                <div>
                <p>Check In</p>
                <p>30th May 2023</p>
                </div>
                <div>
                <p>Check Out</p>
                <p>30th May 2023</p>
                </div>
                <div>
                    <p>1 Night | 2 Adults | 1 Room</p>
                </div>
            </div>

            <div className="mt-3">
                <p>Hotel Kohinoor</p>
                <small>2 Adults</small>
                <ul>
                    <li>Room with breakfast</li>
                    <li>Free Breakfast</li>
                    <li>Free Early Check in, Subject to Availability</li>    
                </ul>
            </div>

            
        </div>
        <div className={`col-lg-8 ${Styles.guestDetails}`}>
                <div className="mt-3">
                <label>Name</label>
                    <input type="text" className="form-control col-lg-12 mb-3" placeholder='enter your name'/>
                </div>
                <div>
                <label>Email</label>
                <input type="text" className="form-control col-lg-12 mb-3" placeholder='enter your mobile'
                />

                </div>
                <div>
                <label>Mobile</label>
                <input type="text" className="form-control col-lg-12 mb-3" placeholder='enter your address'/>

                </div>

                {/* <div className='my-4'>
                    <label>Select Payment Method</label>
                    <br/>
                    <input type="radio" name="phonePay" /> Phone Pay &nbsp;&nbsp;&nbsp;
                    <input type="radio" name="phonePay" /> Google Pay&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="phonePay" /> Net Banking  
                </div> */}

                <div className='my-5'>
                    <button className={`btn ${Styles.bookNow}`}>Book Now</button>
                </div>
        </div>


    </div>
  )
}

export default HotelBooking