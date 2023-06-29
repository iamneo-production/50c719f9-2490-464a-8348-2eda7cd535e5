import React from 'react'
import Styles from "./ViewHotel.module.css";
const ViewHotel = () => {
    const image = window.localStorage.getItem("currentImage");
    const Heading = window.localStorage.getItem("Heading");
  return (
    <div className='container my-3'>
    <div className='row card'>
    <div className="col-lg-12 mt-5 card">
        <div className="py-4">
        <img src={image} alt="hotel" className={Styles.hotel_image} />
        </div>
    <h3 className='text text-center'>{Heading}</h3>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div className={`${Styles.bank_offer}col-lg-8  py-3 my-5`} >
        <p className='text text-center'>SBI Bank Offers</p>
        <div className='d-flex flex-row justify-content-center'>
            <button className='btn btn-sm btn-dark'>USE CODE </button>
            <button>50%</button>
        </div>
        <div className={Styles.bookNowDiv}>

        <button className={`btn btn-md ${Styles.bookNow}`}>
          <a href="/book" style={{color:"white"}}>Book Now</a>
        </button>
        </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default ViewHotel