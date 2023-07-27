import React from "react";
import { carousalData, homeData } from "../data/Homepage";

const Home = () => {
  
  const cards = {
    width:"400px"
  }
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {carousalData.map((e, i) => (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={`${e.id}`}
              className={`${e.active}`}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {carousalData.map((e, i) => (
            <div className={`carousel-item ${e.active}`} key={i}>
              <img
                className="d-block w-100"
                src={e.imgSrc}
                alt={e.alt}
                style={{ height: "60vh" }}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />

      <div classNameName="container ">
        <div className="card-columns text-center">
          {homeData.map((e, i) => (
            <div className="card" style={cards} key={i}>
              <img className="card-img-top" src={e.cardImg} alt={e.cardTitle} />
              <div className="card-body">
                <h5 className="card-title">{e.cardTitle}</h5>
                <p className="card-text">{e.cardText}</p>
                <p className="card-text">
                  <small className="text-muted">{e.update}</small>
                </p>
                <button type="button" className="btn btn-warning">
                  {e.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-lg-start bg-dark text-white pt-3">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> */}

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Home;
