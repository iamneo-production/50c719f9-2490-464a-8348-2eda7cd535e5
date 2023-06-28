import React from 'react'

const Carview = () => {
    const image = window.localStorage.getItem("currentImage");
    const Heading = window.localStorage.getItem("Heading");
  return (
    <div className='container my-3'>
    <div className='row card'>
    <div className="col-lg-12 mt-5 card">
        <div className="py-4">
        <img src={image} alt="car" className="car_image" />
        </div>
    <h3 className='text text-center'>{Heading}</h3>
    <div>
    We have different types of Car like Miniature cars,Sedan Cars,Suv Cars,Mpv Cars,The Sedan and Suv cars are similar in capacity but different in boot space.In Mini Cars only four members able to travel.But in MPV whole family can travel.Mini Cars are Economic in class! According to Car Types Travelling cost will be Differ, Choose your best Cab!!!
    </div>
    <div className="col-lg-8 bank_offers py-3 my-5">
        <p className='text text-center'>SBI Bank Offers</p>
        <div className='d-flex flex-row justify-content-center'>
            <button className='btn btn-sm btn-dark'>USE CODE </button>
            <button>40%</button>
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

export default Carview