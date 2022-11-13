import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

const SellerInfo = () => {
  const [seller, setSeller] = useState([]);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/users/user/${id}`);
        console.log(result.data);
        setSeller(result.data);
      } catch (err) {
        console.log('Error!');
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-6">
            <h2 className="text-center mb-5">Seller Info</h2>
            <div className="seller-info">
              <div className="seller-info-header text-center">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="img-fluid mb-4 seller-info-img"
                />
              </div>
              <div className="seller-info-body text-center">
                <p className="mb-1  fw-bold">{seller.name}</p>
                <p className="mb-1 ">{seller.address}</p>
                <p className="mb-1 ">{seller.email}</p>
                <p className="mb-1 ">{seller.phone}</p>
                <button className="btn btn-success btn-sm mt-4">Follow</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="text-center mb-5">
              All Products from {seller.name}
            </h2>
            <div className="seller-products">
              <div className="filter-cards">
                <div className="d-flex flex-wrap justify-content-center mb-4">
                  <div class="card mx-2 mb-4 seller-info-card">
                    <img
                      src="./assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"
                      class="card-img-top card-image card-image-seller-ind"
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
                        <button className="btn btn-primary btn-sm mx-auto mt-3">
                          Add to Cart
                        </button>
                      </p>
                    </div>
                  </div>
                  <div class="card mx-2 mb-4 seller-info-card">
                    <img
                      src="./assets/images/nordwood-themes-_sg8nXmpWDM-unsplash.jpg"
                      class="card-img-top card-image card-image-seller-ind"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;
