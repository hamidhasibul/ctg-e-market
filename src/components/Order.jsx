import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Order = () => {
  const userInfo = localStorage.getItem("userInfo");

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${id}`);

        console.log(data);
        setOrder(data);
      } catch (err) {
        alert("Order not found!");
      }
    };

    /* const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/user/${order.sellerId}`);

        console.log(data);
        setUser(data);
      } catch (err) {
        alert("Seller not found!");
      }
    }; */

    if (!userInfo) {
      return navigate("/");
    }

    fetchOrder();
    // fetchUser();
  }, [id, navigate, userInfo]);

  return (
    <>
      <div className="container-lg orderContainer">
        <Link className="nav-link" to="/account">
          Go Back
        </Link>
        <div className="row orderRow">
          <h3 className="text-center mb-5">My Order No: {order._id}</h3>
        </div>
        <div className="row orderRow products">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr class="text-dark">
                    <th scope="col">Serial</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Base Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <Link
                          to={`../${item.slug}`}
                          className="product-link text-dark"
                        >
                          {item.name}
                        </Link>
                      </td>
                      <td>
                        {item.image ? (
                          <img
                            src={item.image}
                            alt=""
                            style={{ height: "4rem" }}
                          />
                        ) : (
                          <p>No Image Posted</p>
                        )}
                      </td>
                      <td>{item.quantity}</td>

                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="containner-fluid pt-4 px-4">
              <div class="row bg-light rounded align-items-center justify-content-center mx-0 mb-3">
                <div className="col-md-12 py-4 text-center">
                  <h6 className="border border-dark p-2">Your Order Details</h6>
                  <div className="info-groups">
                    <div className="info-group mb-1">
                      <span className="fw-bold">Customer Name: </span>
                      <span>{order.name}</span>
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Customer Email: </span>
                      <span>{order.email}</span>
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Customer Phone: </span>
                      <span>{order.phone}</span>
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Customer Address: </span>
                      <span>{order.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bg-light rounded align-items-center justify-content-center mx-0 mb-3">
                <div className="col-md-12 py-4">
                  <div className="infoGroups">
                    <div className="info-group mb-1">
                      <span className="fw-bold">Item Price:</span>
                      <span> ${order.itemsPrice?.toFixed(2)}</span>
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Tax Price:</span>
                      <span> ${order.taxPrice?.toFixed(2)}</span>
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Total Price:</span>
                      <span> ${order.totalPrice?.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="infoGroups">
                    <div className="info-group mb-1">
                      <span className="fw-bold">Paid: </span>
                      {order.isPaid ? (
                        <span> Paid at {order.paidAt} </span>
                      ) : (
                        <span>Not Paid!</span>
                      )}
                    </div>
                    <div className="info-group mb-1">
                      <span className="fw-bold">Delivered: </span>
                      {order.isDelivered ? (
                        <span> Delivered at {order.deliveredAt} </span>
                      ) : (
                        <span>Not Delivered!</span>
                      )}
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

export default Order;
