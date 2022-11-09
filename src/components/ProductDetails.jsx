import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <>
      <div className="container-lg">
        <div className="row my-5">
          <div className="col-lg-6 position-relative">
            <img
              src="../assets/images/yasin-hasan-_h50cvQCj_M-unsplash.jpg"
              alt=""
              className="img-fluid"
            />
            <Link to="/">
              <img
                src="../assets/images/users/57.jpg"
                alt=""
                className="img-fluid product-seller-img"
              />
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="product-info">
              <h3 className="product-title">TWS Earbuds</h3>
              <p className="product-category mb-1 fw-bold text-danger">
                Electronics
              </p>
              <p className="mb-1 product-price fw-bold">Price: 1000 taka</p>
              <p className="product-description mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                dolor est quia suscipit aspernatur iste porro quis eligendi
                autem veniam!
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
