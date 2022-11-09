import React from 'react';
import { Link } from 'react-router-dom';

const AccountsUser = () => {
  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h2 className="text-center mb-4">My Account</h2>
          <div className="col-lg-6">
            <img
              src="../assets/images/users/57.jpg"
              alt=""
              className="img-fluid mb-3"
            />
            <button className="btn btn-light ms-4">Change Image</button>

            <form>
              <div class="mb-3">
                <label for="fullnameInput" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="fullnameInput"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-3">
                <label for="emailInput" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control w-50"
                  id="emailInput"
                  placeholder="tyleremarket@gmail.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="addressInput" class="form-label">
                  Address
                </label>
                <textarea
                  class="form-control w-50"
                  id="addressInput"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="phoneInput" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="phoneInput"
                  required
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-secondary w-50">Update</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="account-group">
              <h5 className="mb-4 text-center">My Products</h5>
              <div className="account-products">
                <div className="d-flex flex-wrap  mb-4">
                  <div class="card mx-2 mb-4 my-product-card">
                    <img
                      src="./assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"
                      class="card-img-top my-product-card-image"
                      alt="..."
                    />

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
                        <button className="btn btn-success btn-sm mx-auto mt-3 w-50">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm mx-auto mt-3 w-50">
                          Delete
                        </button>
                      </p>
                    </div>
                  </div>
                  <div class="card mx-2 mb-4 my-product-card">
                    <img
                      src="./assets/images/nordwood-themes-_sg8nXmpWDM-unsplash.jpg"
                      class="card-img-top my-product-card-image "
                      alt="..."
                    />

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
                        <button className="btn btn-success btn-sm mx-auto mt-3 w-50">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm mx-auto mt-3 w-50">
                          Delete
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
              <h5 className="mb-4 text-center">My Orders</h5>
              <div className="account-orders text-center">
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
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
        </div>
      </div>
    </>
  );
};

export default AccountsUser;
