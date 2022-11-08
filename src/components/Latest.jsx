import React from 'react';
import { Link } from 'react-router-dom';

const Latest = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center my-2">New Fresh Products</h2>
            <div className="latest-products">
              <div className="row">
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"
                      class="card-img-top card-image"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link to="/" className="product-link text-dark">
                          Sunglass
                        </Link>
                      </h5>
                      <p class="card-text">
                        <span>Accessories</span>
                        <br />
                        <span>200 Taka</span>
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, eos!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/nordwood-themes-_sg8nXmpWDM-unsplash.jpg"
                      class="card-img-top card-image"
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Expedita, quibusdam!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/paolo-giubilato-ZwKCWVFdrcs-unsplash.jpg"
                      class="card-img-top card-image"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link to="/" className="product-link text-dark">
                          iPhone
                        </Link>
                      </h5>
                      <p class="card-text">
                        <span>Electronics</span>
                        <br />
                        <span>200 Taka</span>
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Modi, provident!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/yasin-hasan-_h50cvQCj_M-unsplash.jpg"
                      class="card-img-top card-image"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link to="/" className="product-link text-dark">
                          TWS Earbuds
                        </Link>
                      </h5>
                      <p class="card-text">
                        <span>Electronics</span>
                        <br />
                        <span>200 Taka</span>
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Modi, provident!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center py-2">Registered Sellers</h2>
            <div className="sellers-section">
              <div className="row">
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/users/28.jpg"
                      class="card-img-top card-image-user"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link to="/" className="product-link text-dark">
                          Lawrence Griffin
                        </Link>
                      </h5>
                      <p class="card-text">
                        <span>
                          <button className="btn btn-success btn-sm">
                            Follow
                          </button>
                        </span>
                        <br />
                        <span>Member Since : 8/11/2022</span>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="card mb-3">
                    <img
                      src="./assets/images/users/57.jpg"
                      class="card-img-top card-image-user"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <Link to="/" className="product-link text-dark">
                          Tyler Dean
                        </Link>
                      </h5>
                      <p class="card-text">
                        <span>
                          <button className="btn btn-success btn-sm">
                            Follow
                          </button>
                        </span>
                        <br />
                        <span>Member Since : 6/11/2022</span>
                        <br />
                      </p>
                    </div>
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

export default Latest;
