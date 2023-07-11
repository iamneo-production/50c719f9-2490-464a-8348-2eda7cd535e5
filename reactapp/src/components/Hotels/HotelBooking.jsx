import React,{useEffect,useState} from 'react'
import { DatePicker} from "antd";
import Styles from "./ViewHotel.module.css"
import "./ViewHotel.css"
const HotelBooking = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8084/cabdetail/cabs")
    .then(res=>res.json())
    .then((result)=>{
        setData(result);
    console.log(data)})
        .catch(error=>console.error(error));
},[])
    return (
    <div className='container'>
        <div className='row'>
        <h3>Hotel Kohinoor</h3>
            <div className='col-lg-12 d-flex flex-row justify-content-around mt-5 card'>
                <div>
                <p>Check In</p>
                
                <DatePicker/>
                </div>
                <div>
                <p>Check Out</p>
                <DatePicker/>
                
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
                    
                <label>Name:</label>
                    <input type="text" className="form-control col-lg-12 mb-3" placeholder='Enter your Name'/>
                </div>
                <div>
                    <p>Gender:</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="name" />
                        <label class="form-check-label">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="name" />
                        <label class="form-check-label">Female</label>
                    </div>
                </div><br></br>
                <div>
                    
                <label>Email:</label>
                <input type="text" className="form-control col-lg-12 mb-3" placeholder='Enter your Email'
                />

                </div>
                <div>
    
                <label>Mobile:</label>
                <input type="text" className="form-control col-lg-12 mb-3" placeholder='Enter your Mobile Number'/>

                </div>


                <div className='my-5'>
                    <button className={`btn ${Styles.bookNow}`}>Confirm Booking</button>
                </div>
        </div>

{data.map(HotelBooking=>(<li key={HotelBooking.id}>
    id:{HotelBooking.nbr}
</li>))}
    </div>
  )
}

export default HotelBooking