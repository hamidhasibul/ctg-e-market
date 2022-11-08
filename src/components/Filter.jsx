import React from 'react';
import { Link } from 'react-router-dom';

// const pagiActive = ({ isActive }) => (isActive ? 'page-link' : 'page-link');

const Filter = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row my-4">
              <div className="col-lg-6 d-flex justify-content-evenly">
                <button className="btn btn-sm btn-secondary">All</button>
                <button className="btn btn-sm btn-secondary">
                  Accessories
                </button>
                <button className="btn btn-sm btn-secondary">
                  Electronics
                </button>
              </div>
              <div className="col-lg-6">
                <input
                  type="search"
                  className="form-control rounded-0 border-dark"
                  placeholder="Search...."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Product Cards / All Products */}

        <div className="filter-cards">
          <div className="d-flex flex-wrap justify-content-center mb-4">
            <div class="card mx-2 mb-4 w-25">
              <img
                src="./assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"
                class="card-img-top card-image"
                alt="..."
              />
              <Link to="/">
                <img
                  src="./assets/images/users/28.jpg"
                  alt=""
                  className="seller-image"
                />
              </Link>
              <div class="card-body">
                <h5 class="card-title">
                  <Link to="/" className="product-link text-dark">
                    Sunglass
                  </Link>
                </h5>
                <p class="card-text ">
                  <span>Accessories</span>
                  <br />
                  <span>200 Taka</span>
                  <br />
                  <button className="btn btn-primary btn-sm mx-auto mt-3">
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
            <div class="card mx-2 mb-4 w-25">
              <img
                src="./assets/images/nordwood-themes-_sg8nXmpWDM-unsplash.jpg"
                class="card-img-top card-image"
                alt="..."
              />
              <Link to="/">
                <img
                  src="./assets/images/users/57.jpg"
                  alt=""
                  className="seller-image"
                />
              </Link>
              <div class="card-body">
                <h5 class="card-title">
                  <Link to="/" className="product-link text-dark">
                    Laptop
                  </Link>
                </h5>
                <p class="card-text">
                  <span>Electronics</span>
                  <br />
                  <span>200 Taka</span>
                  <br />
                  <button className="btn btn-primary btn-sm mx-auto mt-3">
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <ul class="pagination d-flex justify-content-center">
            <li class="page-item">
              <Link to="#" class="page-link " aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li class="page-item">
              <Link to="#" className="page-link">
                1
              </Link>
            </li>
            <li class="page-item">
              <Link to="#" class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
