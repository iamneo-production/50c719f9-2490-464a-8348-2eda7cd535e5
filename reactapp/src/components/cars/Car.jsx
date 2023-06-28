import React from 'react';


const Car = ({ image, Heading, Description, setImageState }) => {
  const setWindowLocation = () => {
    window.localStorage.setItem('currentImage', image);
    window.localStorage.setItem('Heading', Heading);
  };

  return (
    <div className="card col-lg-5 my-3 py-3 mx-3">
      <div className="row">
        <div className="col-lg-5">
          <img src={image} alt="Car" className="img-fluid" />
        </div>
        <div className="col-lg-7">
          <p className="car-name">{Heading}</p>
          <p className="text-justify">{Description}</p>
          <div className="text-right">
            <button className="btn btn-primary view-details-btn" onClick={setWindowLocation}>
              <a href={`/viewDetails/${image}/${Heading}/`} className="text-white">View Details</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;