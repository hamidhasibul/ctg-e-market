import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminDashMain = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/posts/`);

        setAllPosts(res.data);
      } catch (err) {
        console.log('Error!');
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await axios.get(`/api/users/all`);

        setAllUsers(res.data);
      } catch (error) {
        console.log('Error!');
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/products/`);

        setAllProducts(res.data);
      } catch (error) {
        console.log('Error!');
      }
    };

    const fetchOrders = async () => {
      try {
        const res = await axios.get(`/api/orders/`);
        setAllOrders(res.data);
      } catch (error) {
        console.log('Error!');
      }
    };

    fetchPosts();
    fetchUsers();
    fetchProducts();
    fetchOrders();
  }, []);
  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">Admin Dashboard</h4>

          {/* Statistics Section Start */}

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-user fa-3x text-primary"></i>

                  <div className="ms-3">
                    <p className="mb-2 text-secondary fw-bold">Users</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allUsers.length}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-bag-shopping fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2  text-secondary fw-bold">Products</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allProducts.length}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-cart-shopping fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2  text-secondary fw-bold">Orders</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allOrders.length}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-hashtag fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2  text-secondary fw-bold">Posts</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allPosts.length}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section Ends */}

          {/* Recent Sales Section Starts */}

          <div class="container-fluid pt-4 px-4">
            <div class="bg-light text-center rounded p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="mb-0">Recent Sales</h5>
              </div>
              <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr class="text-dark">
                      <th scope="col">Date</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Seller</th>
                      <th scope="col">Product Amount</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Delivery Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...allOrders]
                      .reverse()
                      .slice(-5)
                      .map((orders) => (
                        <tr>
                          <td>{orders.createdAt.slice(0, 10)}</td>
                          <td>{orders._id}</td>
                          <td>{orders.name}</td>
                          <td>
                            {orders.orderItems.map((item) => (
                              <p className="mb-1">{item.seller}</p>
                            ))}
                          </td>
                          <td>{orders.orderItems.length}</td>
                          <td>
                            {orders.isPaid ? <p>Paid</p> : <p>Not Paid</p>}
                          </td>
                          <td>
                            {orders.isDelivered ? (
                              <p>Delivered</p>
                            ) : (
                              <p>Not Delivered</p>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Sales Section Ends */}

          {/* Recent Registered Users Section Start */}

          <div class="container-fluid pt-4 px-4">
            <div class="bg-light text-center rounded p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="mb-0">Recent Registered User</h5>
              </div>
              <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr class="text-dark">
                      <th scope="col">Name</th>
                      <th scope="col">Seller ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Joined At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...allUsers]
                      .reverse()
                      .slice(-5)
                      .map((users) => (
                        <tr>
                          <td>{users.name}</td>
                          <td>{users._id}</td>
                          <td>{users.email}</td>
                          <td>{users.phone}</td>
                          <td>{users.address}</td>
                          <td>{users.createdAt.slice(0, 10)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Registered Users Section Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminDashMain;
