import React, { useState } from "react";
import Styles from "./HomePage.module.css";
import Hotel from "./Hotel";
import HotelSearch from "./HotelSearch";
import { DatePicker, Select } from "antd";
import { Link } from "react-router-dom";
import api from "../../utils/api";

const HotelHomePage = () => {
  const [imageState, setImageState] = useState("");
  const [data, setdata] = useState({
    location: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));

  // adding hotel props
  const [hotels, setHotels] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handlesubmit = () => {
    // Destructure the data state to get individual search parameters
    const { location, checkin, checkout } = data;

    // Perform the API call to retrieve hotels based on the search parameters
    api.get(
      `/hotels/search?location=${location}&checkInDate=${checkin}&checkOutDate=${checkout}`
    )
      .then((response) => setHotels(response.data))
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });

    // Set the isSearchPerformed to true after the search button is clicked
    setIsSearchPerformed(true);
  };

    window.localStorage.setItem("hotellocation", data.location);


  // useEffect(() => {
  //   loadHotels();
  // },[]);

  // const loadHotels = async() =>{
  //   const res = await api.get("http://localhost:8081/hotels")
  //   console.log(res);
  // }

  return (
    <div className="container mt-5">
      <h3>Hotels</h3>
      {decodedToken
        ? decodedToken.role === "ADMIN" && (
            <div>
              <button className="btn btn-primary ">
                <Link className="text-white" to="/hoteladmin">
                  ADMIN ADD
                </Link>{" "}
              </button>
            </div>
          )
        : ""}

      <div className={`row ${Styles.firstRow}`}>
        <p className={Styles.textCenter}>
          Book Domestic and International Property Online. To list your property{" "}
          <span>
            <a href="/">click here</a>
          </span>
        </p>
        <div className="col-lg-12">
          <div className="row pb-3">
            <div className="col-lg-6 card" style={{ justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "2px 50px",
                }}
              >
                <div>
                  <p className="m-2">City Name</p>
                </div>
                <div>
                  <Select
                    defaultValue="Hyderabad"
                    style={{
                      width: 250,
                    }}
                    onChange={(e) => {
                      setdata({ ...data, location: e });
                    }}
                    options={[
                      {
                        value: "Hyderabad",
                        label: "Hyderabad",
                      },
                      {
                        value: "Vikshakapatnam",
                        label: "Vikshakapatna",
                      },
                      {
                        value: "Bangloore",
                        label: "Bangloore",
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

            <div className="col-lg-3 card py-2">
              <p>Check In</p>

              <input
                type="date"
                id="checkin"
                onChange={(e) => {
                  setdata({ ...data, checkin: e.target.value });
                }}
              />
            </div>
            <div className="col-lg-3 card py-2">
              <p>Check Out</p>

              <input
                type="date"
                id="checkout"
                onChange={(e) => {
                  setdata({ ...data, checkout: e.target.value });
                }}
              />
            </div>
            {/* adding inputs for room and guests */}
            {/* <div className="col-lg-2 card">
              <p>Rooms</p>
              <p>
              <input 
              type="number"
              id="rooms"
              name="rooms" 
              min="1" 
              max="5"
              style={{width:"80px"}}
              onChange={(e) => {
                setdata({ ...data, rooms: e.target.value });
              }}
              
              />
              </p>
            </div> */}
            {/* <div className="col-lg-2 card">
              <p>Guests</p>
              <p>
              <input 
              type="number" 
              id="guests"
              name="guests" 
              min="1"
              style={{width:"80px"}}
              onChange={(e) => {
                setdata({ ...data, guests: e.target.value });
              }}
              />
              </p>
            </div> */}
            {/* 
            I think no need of displaying price at searching point
            <div className="col-lg-2 card">
              <p>Price per night</p>
              <p>&#8377; 0- &#8377;1500</p>
              <p>&#8377; 1500- &#8377;2000</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className={`row ${Styles.secondRow}`}>
        <div>
          <button className={Styles.searchBtn} onClick={handlesubmit}>
            SEARCH
          </button>
        </div>
      </div>

      {isSearchPerformed && (
        <div className="row mt-5">
          {/* Display the retrieved hotels */}
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              <HotelSearch
                key={hotel.id}
                title={hotel.hotelName}
                location={hotel.location}
                image={hotel.image}
                price={hotel.price}
                hotelId={hotel.id}
              />
            ))
          ) : (
            <p>No hotels found.</p>
          )}
        </div>
      )}

      <div className={`row ${Styles.thirdRow} py-3`}>
        <Hotel
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/73/61/92/hotel-kohinoor.jpg?w=700&h=-1&s=1"
          setImageState={setImageState}
          Heading="Kohinoor Hotel"
          Description=" Location: The Kohinoor Hotel is situated in the bustling city of
            Mumbai, specifically in the area of Prabhadevi. It enjoys a
            convenient location with close proximity to various business
            districts, shopping centers, and tourist attractions..."
        />
        <Hotel
          image="https://a.otcdn.com/imglib/hotelfotos/8/286/hotel-ama-andalucia-islantilla-053.jpg"
          setImageState={setImageState}
          Heading="Hotel Ama"
          Description=" Location: The Hotel Ama is situated in the bustling city of
            Mumbai, specifically in the area of Prabhadevi. It enjoys a
            convenient location with close proximity to various business
            districts, shopping centers, and tourist attractions..."
        />
        <Hotel
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/44648000.jpg?k=0561c1a367585c184fe3ae0498c727152500d675595e7d77770f120e5ed24ade&o=&hp=1"
          setImageState={setImageState}
          Heading="Hotel SAROVAR"
          Description=" Location: The Hotel SAROVAR is situated in the bustling city of
            Mumbai, specifically in the area of Prabhadevi. It enjoys a
            convenient location with close proximity to various business
            districts, shopping centers, and tourist attractions..."
        />
        <Hotel
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/425204753.jpg?k=407f4577fa4f6e197fb8879868670a30c131f81780a7ddb4f09a5a206e21d81a&o=&hp=1"
          setImageState={setImageState}
          Heading="Hotel Home Stay"
          Description=" Location: The Hotel Home Stay is situated in the bustling city of
            Mumbai, specifically in the area of Prabhadevi. It enjoys a
            convenient location with close proximity to various business
            districts, shopping centers, and tourist attractions..."
        />
      </div>
    </div>
  );
};

export default HotelHomePage;
