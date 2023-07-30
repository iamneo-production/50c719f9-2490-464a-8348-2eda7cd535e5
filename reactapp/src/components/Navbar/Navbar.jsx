import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar({ isLogin }) {
  return (
    <nav
      className="navbar  navbar-expand-sm navbar-dark "
      style={{ backgroundColor: "rgb(3, 2, 46)" }}
    >
      <Link
        className="navbar-brand font-weight-bold font-italic text-warning"
        to="/"
      >
        Travelista
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Facilities
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/car">
                Cars
              </Link>
              <Link className="dropdown-item" to="/hotel">
                Hotels
              </Link>
              <Link className="dropdown-item" to="/flight">
                Flights
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Help & Support
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/faq">
                FAQ
              </Link>
              <Link className="dropdown-item" to="/feedback">
                Feedback
              </Link>
              <Link className="dropdown-item" to="/help">
                Contact us
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/history">
              History
            </Link>
          </li>
          <li className="nav-item">
            {isLogin ? (
              <Link className="nav-link " to="/profile">
                <FontAwesomeIcon icon={faUser} beat />
              </Link>
            ) : (
              <Link className="nav-link " to="/login">
                Login
              </Link>
            )}
            {/* <Link className="nav-link " to="/login">
              Login
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
