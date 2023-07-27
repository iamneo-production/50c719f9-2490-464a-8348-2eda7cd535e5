import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    postData(data);
  };

  const postData = (data) => {
    axios.post("http://localhost:9000/api/v1/auth/users", data).then(
      (res) => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem("token", token);
        window.location.reload();
        toast.success("Signup Successfully", {
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
  };

  return (
    <>
      <div
        className="container bg-dark text-black mt-5 py-3"
        style={{
          borderRadius: "10px",
          backgroundImage: `url("https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="user">UserName</label>
              <input
                type="userName"
                {...register("username")}
                className="form-control"
                id="user"
                placeholder="UseNAme"
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label for="user">FirstName</label>
              <input
                type="userName"
                {...register("firstName")}
                className="form-control"
                id="user"
                placeholder="UseNAme"
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label for="user">LastName</label>
              <input
                type="userName"
                {...register("lastName")}
                className="form-control"
                id="user"
                placeholder="UseNAme"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              {...register("email")}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              {...register("address")}
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="Number">Mobile no.</label>
              <input
                type="text"
                {...register("phone")}
                className="form-control"
                id="Number"
                placeholder="0000000000"
                required
              />
            </div>
            <div className="form-group col-md-3">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                {...register("password")}
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlSelect1">Role</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                {...register("role")}
              >
                <option>CUSTOMER</option>
                <option>AGENT</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <br />
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>

      <ToastContainer />
    </>
  );
}

export default Signup;
