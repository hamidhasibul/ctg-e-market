import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({
  idSeller,
  setOpenCheckout,
  cartItems,
  itemsPrice,
  taxPrice,
  totalPrice,
}) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const [name, setName] = useState(userInfo && userInfo.name);
  const [email, setEmail] = useState(userInfo && userInfo.email);
  const [address, setAddress] = useState(userInfo && userInfo.address);
  const [phone, setPhone] = useState(userInfo && userInfo.phone);

  const handlerAddProduct = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        id: userInfo._id,
        name: name,
        email: email,
        address: address,
        phone: phone,
        sellerId: idSeller,
        itemsPrice: itemsPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      });

      if (data) {
        localStorage.removeItem('cartItems');
        setOpenCheckout(false);
        navigate('/account');
      }
    } catch (error) {
      console.log('Order Failed!');
    }
  };
  return (
    <>
      <div className="passwords">
        <form onSubmit={handlerAddProduct}>
          <h5>You Will Pay After Delivery</h5>
          <div className="mb-3 ">
            <p
              className="mb-0 text-end close-btn"
              onClick={() => setOpenCheckout(false)}
            >
              X
            </p>
          </div>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control "
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="slug" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control "
              id="slug"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="category" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control "
              id="category"
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">
              Phone
            </label>
            <textarea
              type="text"
              class="form-control "
              id="description"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></textarea>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
