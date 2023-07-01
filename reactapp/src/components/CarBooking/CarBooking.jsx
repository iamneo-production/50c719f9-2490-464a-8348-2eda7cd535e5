import React from 'react'
import { DatePicker,Select } from "antd";
import FirstImage from "../images/c1.png";
// import './history.css';
// import 'bootstrap/dist/css/bootstrap.css';


const CarBooking=()=> {
    
  return (
    <div className='container'>
        <h3 className='Bookpage'>Booking Page</h3>
            <div className='row'>           
                <h3>Miniature cabs</h3>
                <div className='col-lg-12 d-flex flex-row justify-content-around mt-5 card form-control-lg'>
                    <div>
                        <p>Pickup Date</p>                
                        <DatePicker/>
                    </div>
                    <div>
                        <p>Drop Date</p>               
                        <DatePicker/>
                    </div>
                    <div>
                        <p>Pick up Location</p>
                        <Select
                        //defaultValue="Banglore"
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
                        label: "Vikshakapatnam",
                        },
                        {
                        value: "Banglore",
                        label: "Banglore",
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
                    <div>
                        <p>Drop Location</p>
                        <Select
                        // defaultValue="Chennai"
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
                        label: "Vikshakapatnam",
                        },
                        {
                        value: "Banglore",
                        label: "Banglore",
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
                </div>
            </div>
                <div className='row'>
                <div className='col-sm flex-row mt-5 card'>
                    

                        
                            <div className='col-lg-7 mt-3'>
                            <p>Cab Details</p>                        
                            <img src={FirstImage} alt="Car" className="history_image"/>
                            </div>
                        
                        <div className=' col-lg-12 miniature'>
                            <h3>Miniature Cabs</h3><br/>
                            <h5>4 Seater</h5><br/>
                            <ul>
                        <li>Four Seater</li>
                        <li>Fuel Type : Diesel</li>
                        <li>Km Fare : $15 after 100kms</li>    
                        </ul>
                        </div>
                     
                    </div>                      
               </div><br/><br/>
        <div className='row card'>            
            <div className="guestDetails col-lg-8 ">
                <div>
                    <p>Name:</p>
                    <input type="text" className="form-control col-lg-6 my-3" placeholder='enter your name'/>
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
                </div><br/>
                <div>
                    <p>Contact No:</p>
                    <input type="text" className="form-control col-lg-9 my-3" placeholder='enter 10 digit mobile number'
                    />

                </div>
                <div>
                    <p>Pick Up Address : </p>
                    <input type="text" className="form-control col-lg-9 my-3" placeholder='enter your address'/>

                </div>
                <div>
                    <p>Drop off Address : </p>
                    <input type="text" className="form-control col-lg-9 my-3" placeholder='enter your address'/>

                </div>

                
                <div className='my-5'>
                    <button className="btn bookNow">Confirm Booking</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CarBooking