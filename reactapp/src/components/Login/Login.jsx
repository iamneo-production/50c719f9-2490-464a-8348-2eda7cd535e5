import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { BASE_URL } from "../../utils/api";

function Login() {
  const navigate = useNavigate();
  const mystyle = {
    backgroundColor: "#E3F4F4",
    borderRadius: "10px",
    boxShadow: "1px 2px 9px #27374D",
  };

  const [data, setdata] = useState({});

  const onsubmit = () => {
    console.log(data);
    checkLogin(data); //check user valid or not
  };

  const checkLogin = async (data) => {
    await axios.post(`${BASE_URL}/api/v1/auth/login`, data).then(
      (res) => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem("token", token);

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
        navigate("/");
        window.location.reload();
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
    <MDBContainer className="my-4">
      <ToastContainer />
      <MDBCard>
        <MDBRow className="g-0" style={mystyle}>
          <MDBCol md="5">
            <MDBCardImage
              src="https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="5">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="fa-3x me-3" style={{ color: "#ff6219" }} />
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="email"
                type="email"
                size="lg"
                onChange={(e) => {
                  setdata({ ...data, email: e.target.value });
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
                size="lg"
                onChange={(e) => {
                  setdata({ ...data, password: e.target.value });
                }}
              />

              <MDBBtn
                className="mb-2 px-2"
                color="dark"
                size="lg"
                onClick={onsubmit}
              >
                Login
              </MDBBtn>

              <p
                className="mb-5 pb-lg-2 font-weight-bold"
                style={{ color: "#393f81" }}
              >
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#393f81" }}>
                  Register here
                </Link>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
