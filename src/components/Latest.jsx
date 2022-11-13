import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Latest = () => {
  const [users, setUsers] = useState([]); //Default is empty
  const [products, setProducts] = useState([]); //Default is empty

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/users/all');
      console.log(result.data);
      setUsers(result.data);

      const res = await axios.get('/api/products/');
      console.log(res.data);
      setProducts(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center my-2">New Fresh Products</h2>
            <div className="latest-products d-flex flex-wrap justify-content-center">
              {products.slice(-3).map((product) => (
                <div class="card w-25 mx-2 mb-4" key={product._id}>
                  <img
                    src={product.image}
                    class="card-img-top card-image"
                    alt={product.name}
                  />
                  <Link to="/">
                    <img
                      src={product.sellerImage}
                      alt=""
                      className="seller-image"
                    />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link
                        to={`${product.slug}`}
                        className="product-link text-dark"
                      >
                        {product.name}
                      </Link>
                    </h5>
                    <p class="card-text">
                      <span>{product.category}</span>
                      <br />
                      <span>{product.price} Taka</span>
                      <br />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center py-2">Registered Sellers</h2>
            <div className="sellers-section d-flex flex-wrap justify-content-center">
              {users.slice(-5).map((user) => (
                <div class="card mb-4 w-25 mx-2" key={user._id}>
                  <img
                    src={user.image}
                    class="card-img-top card-image-user"
                    alt={user.name}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link
                        to={`seller/${user._id}`}
                        className="product-link text-dark"
                      >
                        {user.name}
                      </Link>
                    </h5>
                    <p class="card-text">
                      <span>
                        <button className="btn btn-success btn-sm">
                          Follow
                        </button>
                      </span>
                      <br />
                      <span>Member Since : {user.createdAt.slice(0, 10)}</span>
                      <br />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
