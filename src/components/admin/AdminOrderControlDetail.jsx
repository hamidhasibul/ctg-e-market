import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AdminOrderControlDetail = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const params = useParams();
  const orderId = params;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await axios.get(`/api/orders/${orderId.id}`);

        setOrderDetails(res.data);
        setOrderItems(res.data.orderItems);
      } catch (error) {
        console.log("Error Fetching Order details");
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">Order Details</h4>

          {/* Order Details Section Starts */}

          <div class="container-fluid pt-4 px-4">
            <div class="row bg-light rounded align-items-center justify-content-center mx-0">
              <div class="col-md-12">
                <div className="orderSection">
                  <p className="mb-1">
                    <span className="fw-bold">Order ID: </span>
                    {orderDetails._id}
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Customer Name: </span>
                    {orderDetails.name}
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Customer Email: </span>
                    {orderDetails.email}
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Customer Phone: </span>
                    {orderDetails.phone}
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Customer Address: </span>
                    {orderDetails.address}
                  </p>
                </div>
                <div className="orderItemsSection">
                  <div class="table-responsive my-4">
                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                      <thead>
                        <tr class="text-dark">
                          <th scope="col">Serial</th>
                          <th scope="col">Product ID</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Product Image</th>
                          <th scope="col">Product Price</th>
                          <th scope="col">Seller</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItems.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt=""
                                  style={{ height: "4rem" }}
                                />
                              ) : (
                                <p>Image not Available</p>
                              )}
                            </td>
                            <td className="fw-bold">
                              {item.quantity} * {item.price}
                            </td>
                            <td>{item.seller}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details Section Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminOrderControlDetail;
