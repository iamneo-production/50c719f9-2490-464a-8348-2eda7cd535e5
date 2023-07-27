import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";

function Hoteladmin() {
  let navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   postData(data);
  // };

  // const postData = (data) => {
  //   api.post("", data).then(
  //     (res) => {
  //       console.log(res);
  //       const { token } = res.data;
  //       localStorage.setItem("token", token);
  //       window.location.reload();
  //       toast.success("Signup Successfully", {
  //         position: "bottom-left",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //       toast.error("Signup failed", {
  //         position: "bottom-left",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     }
  //   );
  // };

  // ... bhagya makhija

  const [hotel, setHotel] = useState({
    hotelName: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    location: "",
    price: "",
  });

  // destructuring data inside hotel state/object
  const { hotelName, roomType, checkInDate, checkOutDate, location, price } =
    hotel;

  const onInputChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post("/hotel", hotel).then(
      (res) => {
        console.log(res);
        toast.success("Hotel Added Successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Signup failed", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    );
    // navigate("/hotel");
  };

  return (
    <>
      <ToastContainer />
      <div className="container bg-light mt-3 p-4">
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Hotel Name</label>
              <select
                id="inputState"
                className="form-control"
                name="hotelName"
                value={hotelName}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Choose...</option>{" "}
                {/* Set value attribute for default option */}
                <option value="Home Stay">Home Stay</option>
                <option value="Kohinoor hotel">Kohinoor hotel</option>
                <option value="Hotel Sarovar">Hotel Sarovar</option>
                <option value="Hotel Ama">Hotel Ama</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Location</label>
              <select
                id="inputState"
                class="form-control"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
                // {...register("Location")}
              >
                <option value="">Choose...</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Vikshakapatnam">Vikshakapatnam</option>
                <option value="Bangloore">Bangloore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Kolkatta">Kolkatta</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">room Type</label>
              <select
                id="inputState"
                class="form-control"
                name="roomType"
                value={roomType}
                onChange={(e) => onInputChange(e)}
                // {...register("roomType")}
              >
                <option value="">Choose...</option>
                <option value="single bed">single bed</option>
                <option value="double bed">double bed</option>
                <option value="Queen">Queen</option>
                <option value="king">king</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="dateInput">checkinDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => onInputChange(e)}
                // {...register("checkinDate")}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="dateInput">checkoutDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput1"
                name="checkOutDate"
                value={checkOutDate}
                onChange={(e) => onInputChange(e)}
                // {...register("checkoutDate")}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">price</label>
              <input
                type="number"
                class="form-control"
                id="inputCity"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                // {...register("HotelPrice")}
              />
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-outline-primary mx-2">
            Add
          </button>
          <Link to="/" class="btn btn-outline-danger mx-2">
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
}

export default Hoteladmin;
