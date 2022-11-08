import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 px-0">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="./assets/images/hector-martinez-EG49vTtKdvI-unsplash.jpg"
                    class="d-block w-100 sliderImage"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Buy the Best Electronics Products</h5>
                    <p>
                      <Link to="/shop" className="sliderLink text-white ">
                        <button className="btn btn-danger rounded-pill">
                          View More
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="./assets/images/scott-warman-NpNvI4ilT4A-unsplash.jpg"
                    class="d-block w-100 sliderImage"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
