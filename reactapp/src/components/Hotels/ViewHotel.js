import React from "react";
import Styles from "./ViewHotel.module.css";
import defaultImage from "./defaultHotelJpeg.jpeg";
const ViewHotel = () => {
  const image = window.localStorage.getItem("currentImage");
  const Heading = window.localStorage.getItem("Heading");
  return (
    <div className="container my-3">
      <div className="row card">
        <div className="col-lg-12 mt-5 card">
          <div className="py-4">
            <img src={image} alt="hotel" className={Styles.hotel_image} />
          </div>
          <h3 className="text text-center">{Heading}</h3>
          <div>
            Location: The {Heading} is situated in the bustling city of Mumbai,
            specifically in the area of Prabhadevi. It enjoys a convenient
            location with close proximity to various business districts,
            shopping centers, and tourist attractions. Accommodation: The hotel
            offers a range of accommodation options, including well-appointed
            rooms and suites. The rooms are designed to provide comfort and
            convenience to guests, equipped with modern amenities such as air
            conditioning, flat-screen TVs, Wi-Fi, and more. Dining: The{" "}
            {Heading} features multiple dining options that cater to different
            tastes and preferences. Guests can indulge in a variety of cuisines,
            including Indian, Asian, and international dishes, prepared by
            skilled chefs. The hotel also offers in-room dining services for
            guests who prefer dining in the privacy of their rooms. Facilities
            and Services: The hotel provides various facilities and services to
            ensure a pleasant stay for guests. This includes a fitness center,
            spa, swimming pool, conference rooms, banquet halls, 24-hour front
            desk, concierge services, and more. The staff is known for their
            hospitality and strives to deliver a memorable experience to guests.
            Accessibility: The {Heading} is well-connected to major
            transportation hubs, including airports, railway stations, and bus
            terminals, making it easily accessible for both domestic and
            international travelers. It is situated in a prime location that
            allows convenient access to popular tourist attractions and business
            centers within Mumbai.
          </div>
          <div className={`${Styles.bank_offer}col-lg-8  py-3 my-5`}>
            <p className="text text-center">SBI Bank Offers</p>
            <div className="d-flex flex-row justify-content-center">
              <button className="btn btn-sm btn-dark">USE CODE </button>
              <button>50%</button>
            </div>
            <div className={Styles.bookNowDiv}>
              <button className={`btn btn-md ${Styles.bookNow}`}>
                <a href="/hotelbooking" style={{ color: "white" }}>
                  Book Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHotel;
