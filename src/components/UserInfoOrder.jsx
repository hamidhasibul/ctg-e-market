import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserInfoOrder = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const userId = userInfo && userInfo._id;

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${id}`);

        setOrder(data);
      } catch (err) {
        alert("Order not found!");
      }
    };

    if (!userInfo) {
      return navigate("/");
    }

    fetchOrder();
  }, [id, navigate, userInfo]);

  function sendOtp() {
    var num = "88" + order.phone;
    var msg = text;

    axios
      .post("https://sowdaapp.com/sendotp.php", {
        num: num,
        msg: msg,
      })
      .then((res) => alert("User has been notified"))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container-lg">
        <Link className="nav-link" to="/account">
          Go Back
        </Link>
        <div className="row orderRow my-2">
          <h3 className="text-center my-2">Order No: {order._id}</h3>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr class="text-dark">
                    <th scope="col">Serial</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Base Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems
                    ?.filter((item) => {
                      return item.sellerId === userId;
                    })
                    ?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
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
            {/* Info Starts */}

            <div class="container-fluid pt-4 px-4">
              <div class="row bg-light rounded align-items-center justify-content-center mx-0 mb-3">
                <div class="col-md-12 text-center py-4">
                  <div className="infoGroups">
                    <div className="info-group">
                      <span className="fw-bold">Customer Name:</span>
                      <span> {order.name}</span>
                    </div>
                    <div className="info-group">
                      <span className="fw-bold">Email:</span>
                      <span> {order.email}</span>
                    </div>
                    <div className="info-group">
                      <span className="fw-bold">Phone:</span>
                      <span> {order.phone}</span>
                    </div>
                    <div className="info-group">
                      <span className="fw-bold">Address:</span>
                      <span> {order.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row bg-light rounded align-items-center justify-content-center mx-0 mb-3">
                <div className="col-md-12 py-4">
                  <div className="infoGroups">
                    <div className="info-group">
                      <span className="fw-bold">Sub Total Price:</span>
                      {/* that it does not count all ordered products, but only mine */}
                      <span>
                        {" "}
                        $
                        {order.orderItems
                          ?.filter((item) => item.sellerId === userId)
                          ?.reduce((a, v) => (a = a + v.price * v.quantity), 0)
                          ?.toFixed(2)}
                      </span>
                    </div>
                    <div className="info-group">
                      {/* Earnings for the main site administrator per Order -> minus -> 10% for earnings of the site's main administrator, for each order */}
                      <span className="fw-bold">Admin Fee:</span>
                      <span>
                        {" "}
                        $
                        {(
                          order.orderItems
                            ?.filter((item) => item.sellerId === userId)
                            ?.reduce(
                              (a, v) => (a = a + v.price * v.quantity),
                              0
                            ) * 0.1
                        )?.toFixed(2)}
                      </span>
                    </div>
                    <div className="info-group">
                      <span className="fw-bold">Total Price:</span>
                      <span>
                        {" "}
                        $
                        {(
                          order.orderItems
                            ?.filter((item) => item.sellerId === userId)
                            ?.reduce(
                              (a, v) => (a = a + v.price * v.quantity),
                              0
                            ) -
                          order.orderItems
                            ?.filter((item) => item.sellerId === userId)
                            ?.reduce(
                              (a, v) => (a = a + v.price * v.quantity),
                              0
                            ) *
                            0.1
                        )?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="infoGroups">
                    <div className="info-group">
                      <span className="fw-bold">Paid:</span>{" "}
                      {order.isPaid ? (
                        <span> Paid at {order.paidAt} </span>
                      ) : (
                        <span>Not Paid!</span>
                      )}
                    </div>
                    <div className="info-group">
                      <span className="fw-bold">Delivered:</span>{" "}
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

            {/* Info Ends */}

            <div className="infoGroups my-5">
              <div className="info-group">
                <h4 className="mb-3">Notify Customer</h4>
                <input
                  type="text"
                  className="form-control mb-2"
                  onChange={(e) => setText(e.target.value)}
                />
                <button className="btn btn-primary" onClick={sendOtp}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoOrder;
