import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminProductControlMain = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(`/api/products/`);

        setAllProducts(res.data);
      } catch (error) {
        console.log('Error Fetching Products!!');
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">
            Admin Product Control
          </h4>

          {/* Social Control Stats Section Starts */}

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3 mx-auto">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-bag-shopping fa-3x text-primary"></i>

                  <div className="ms-3">
                    <p className="mb-2 text-secondary fw-bold">
                      Total Products
                    </p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allProducts.length}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Control Stats Section Ends */}

          {/* Social Control Section Starts */}

          <div class="container-fluid pt-4 px-4">
            <div class="bg-light text-center rounded p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="mb-0">All Products</h5>
              </div>
              <div class="table-responsive" style={{ height: '15rem' }}>
                <table class="table text-start align-middle table-bordered table-hover mb-0 position-relative">
                  <thead className="sticky-top bg-light">
                    <tr class="text-dark">
                      <th scope="col">Serial</th>
                      <th scope="col">Product ID</th>
                      <th scope="col">Category</th>
                      <th scope="col">Image</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Seller</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProducts.map((products, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{products._id}</td>
                        <td>{products.category}</td>
                        <td>
                          {products.image ? (
                            <img
                              src={products.image}
                              alt=""
                              style={{ height: '4rem' }}
                            />
                          ) : (
                            <p>No Image Posted</p>
                          )}
                        </td>
                        <td>{products.description}</td>
                        <td>{products.price}</td>
                        <td>{products.seller}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Social Control Section Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminProductControlMain;
