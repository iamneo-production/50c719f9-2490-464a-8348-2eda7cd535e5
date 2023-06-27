import React from "react";
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

function Login() {
  const mystyle = {
    backgroundColor: "#E3F4F4",
    borderRadius: "10px",
    boxShadow: "1px 2px 9px #27374D",
  };
  return (
    <MDBContainer className="my-4">
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
                <MDBIcon
                  fas
                  icon="fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
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
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-2 px-2" color="dark" size="lg">
                Login
              </MDBBtn>
              <a className="small text-muted font-weight-bold" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2 font-weight-bold" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/signup" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use  Privacy policy
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
