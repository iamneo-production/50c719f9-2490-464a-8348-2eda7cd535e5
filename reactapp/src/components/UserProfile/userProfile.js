import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './userProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    password: '',
  });

  const userProfileRef = useRef(null);
  const loginDetailsRef = useRef(null);

  useEffect(() => {
    axios
      .get() //yet to be added
      .then((response) => {
        const data = response.data;
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  const [isButtonTouched, setIsButtonTouched] = useState(false);
  

  const scrollToUserProfile = () => {
    userProfileRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLoginDetails = () => {
    loginDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
 
//   const scrollToBookingHistory = () => {
//     bookingHistoryRef.current.scrollIntoView({ behavior: 'smooth' });
//   };
 


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar content */}
            <h4>USER</h4>
            <ul>
              <li>
              <button
               type="button"
             onClick={scrollToUserProfile}
               onTouchStart={() => setIsButtonTouched(true)}
               onTouchEnd={() => setIsButtonTouched(false)}
                 style={{
                   backgroundColor: isButtonTouched ? 'yellow' : '#290D7E',
                        border: 'none',
                         boxShadow: 'none',
                         outline: 'none',
                          color: isButtonTouched ? '#290D7E' : 'yellow',
            }}
>
                  User Profile
                </button>
              </li>
              <li>
                <button type="button" onClick={scrollToLoginDetails}
                style={{ backgroundColor: '#290D7E', border: 'none',
                 boxShadow: 'none',
                 outline: 'none',color:'yellow'}}>
                  Login Details
                </button>
              </li>
              {/* <li>
                <button type="button" onClick={scrollToBookingHistory}
                style={{ backgroundColor: '#290D7E', border: 'none',
                 boxShadow: 'none',
                 outline: 'none',color:'yellow'}}>
                  Booking History
                </button>
              </li> */}
             
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          {/* Main content */}
          <div className="card mb-3">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                fontSize: '30px',
                backgroundColor: '#290D7E',
                borderColor: '#290D7E',
                color: 'yellow',
              }}
              onClick={scrollToUserProfile}
            >
              User Profile <span className="badge badge-light"></span>
            </button>

            <div className="card-body" ref={userProfileRef}>
              {/* Profile content */}
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.fullName || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.email || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.phone || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">DOB</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.dob || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Gender</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.gender || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.address || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">City</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.city || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">State</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.state || 'Loading...'}
                </div>
              </div>
              <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-12">
            <a className="btn btn-info" style={{
                fontSize: '30px',
                backgroundColor: '#290D7E',
                borderColor: '#290D7E',
                color: 'yellow',
              }} >Edit</a>
          </div>
        </div>

              {/* ... rest of the code ... */}
            </div>
          </div>
          <div className="card mb-3">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                fontSize: '30px',
                backgroundColor: '#290D7E',
                borderColor: '#290D7E',
                color: 'yellow',
              }}
              onClick={scrollToLoginDetails}
            >
              Login Details <span className="badge badge-light"></span>
            </button>

            <div className="card-body" ref={loginDetailsRef}>
              {/* Profile content */}
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">UserName</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.userName || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.email || 'Loading...'}
                </div>
              </div>
              <hr />
              <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-sm-3">
                  <h6 className="mb-0">Password</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userData.password || 'Loading...'}
                </div>
              </div>
              

              <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-12">
            <a className="btn btn-info" style={{
                fontSize: '30px',
                backgroundColor: '#290D7E',
                borderColor: '#290D7E',
                color: 'yellow',
              }} > Change Password</a>
          </div>
        </div>
              {/* ... rest of the code ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
