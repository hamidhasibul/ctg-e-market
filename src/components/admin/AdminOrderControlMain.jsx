import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminOrderControlMain = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get(`/api/orders/`);

        setAllOrders(res.data);
      } catch (error) {
        console.log("Error Fetching Orders");
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">
            Admin Orders Control
          </h4>

          {/* Social Control Stats Section Starts */}

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3 mx-auto">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-hashtag fa-3x text-primary"></i>

                  <div className="ms-3">
                    <p className="mb-2 text-secondary fw-bold">Total Orders</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allOrders.length}
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
                <h5 class="mb-0">All Posts</h5>
              </div>
              <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr class="text-dark">
                      <th scope="col">Serial</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Customer Email</th>
                      <th scope="col">Customer Phone</th>
                      <th scope="col">Customer Address</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Delivery Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...allOrders].reverse().map((orders, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{orders._id}</td>
                        <td>{orders.createdAt.slice(0, 10)}</td>
                        <td>{orders.name}</td>
                        <td>{orders.email}</td>
                        <td>{orders.phone}</td>
                        <td>{orders.address}</td>
                        <td>
                          {orders.isPaid ? (
                            <p className="mb-1">Paid</p>
                          ) : (
                            <p className="mb-1">Not Paid</p>
                          )}
                        </td>
                        <td>
                          {orders.isDelivered ? (
                            <p className="mb-1">Delivered</p>
                          ) : (
                            <p className="mb-1">Not Delivered</p>
                          )}
                        </td>
                        <td>
                          <Link
                            to={`/admin/ordercontrol/${orders._id}`}
                            className="btn btn-info fw-bold"
                          >
                            Details
                          </Link>
                        </td>
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

export default AdminOrderControlMain;
