import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Order = () => {
  const userInfo = localStorage.getItem("userInfo");

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);

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
            <div className="order-cards d-flex flex-wrap justify-content-center">
              {order.orderItems?.map((item) => (
                <div class="card mx-2 mb-4 w-25" key={item._id}>
                  <img
                    src={item.image}
                    class="card-img-top card-image"
                    alt={item.name}
                  />
                  <Link to={`../seller/${item.sellerId}`}>
                    <img
                      src={item.sellerImage}
                      alt=""
                      className="seller-image"
                    />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link
                        to={`../${item.slug}`}
                        className="product-link text-dark"
                      >
                        {item.name}
                      </Link>
                    </h5>
                    <p class="card-text ">
                      <span>{item.category}</span>
                      <br />
                      <span>{item.price} Taka</span>
                      <br />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-groups">
              <div className="info-group mb-1">
                <span className="fw-bold">Name: </span>
                <span>{order.name}</span>
              </div>
              <div className="info-group mb-1">
                <span className="fw-bold">Email: </span>
                <span>{order.email}</span>
              </div>
              <div className="info-group mb-1">
                <span className="fw-bold">Phone: </span>
                <span>{order.phone}</span>
              </div>
              <div className="info-group mb-1">
                <span className="fw-bold">Address: </span>
                <span>{order.address}</span>
              </div>
            </div>
            <div className="infoGroups">
              <div className="info-group mb-1">
                <span className="fw-bold">Tax Price:</span>
                <span>${order.taxPrice?.toFixed(2)}</span>
              </div>
              <div className="info-group mb-1">
                <span className="fw-bold">Total Price:</span>
                <span>${order.totalPrice?.toFixed(2)}</span>
              </div>
            </div>
            <div className="infoGroups">
              <div className="info-group mb-1">
                <span className="fw-bold">Paid:</span>
                {order.isPaid ? (
                  <span> Paid at {order.paidAt} </span>
                ) : (
                  <span>Not Paid!</span>
                )}
              </div>
              <div className="info-group mb-1">
                <span className="fw-bold">Delivered:</span>
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
    </>
  );
};

export default Order;
