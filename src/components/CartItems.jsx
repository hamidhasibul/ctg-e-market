import React from 'react';
import { Link } from 'react-router-dom';

const CartItems = () => {
  return (
    <>
      <div class="container-lg">
        <div className="row my-4">
          <div className="col-lg-12">
            <h3 className="text-center mb-4">My Cart</h3>
            <div className="cart-items">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart-cards d-flex flex-wrap">
                    <div class="card mx-2 mb-4 cart-card">
                      <img
                        src="./assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"
                        class="card-img-top"
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
                          <div className="card-action my-2">
                            <button className="btn btn-light">
                              <i class="fa-solid fa-minus"></i>
                            </button>
                            <span className="mx-2">1</span>
                            <button className="btn btn-light">
                              <i class="fa-solid fa-plus"></i>
                            </button>
                          </div>
                          <button className="btn btn-primary btn-sm mx-auto mt-3">
                            Remove
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cart-bill bg-light p-4 border border-dark">
                    <h4 className="text-center mb-5">My Bill</h4>
                    <div className="bill-groups mb-3">
                      <div className="bil-group ">
                        <p className="mb-1 d-flex justify-content-between">
                          Sunglass <span>200 Taka</span>
                        </p>
                      </div>
                      <div className="bil-group">
                        <p className="mb-1 d-flex justify-content-between">
                          Sunglass <span>200 Taka</span>
                        </p>
                      </div>
                    </div>
                    <div className="bill-total mb-4">
                      <div className="bill-group">
                        <p className="mb-1 d-flex justify-content-between">
                          Sub-Total : <span>120.00 Taka</span>
                        </p>
                      </div>
                      <div className="bill-group">
                        <p className="mb-1 d-flex justify-content-between">
                          Tax 20% : <span>30.00 Taka</span>
                        </p>
                      </div>
                      <div className="bill-group">
                        <p className="mb-1 fw-bold d-flex justify-content-between">
                          Total : <span>150.00 Taka</span>
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-secondary">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
