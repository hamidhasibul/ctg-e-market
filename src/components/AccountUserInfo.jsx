import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfoOrders from './UserInfoOrders';

const AccountUserInfo = () => {
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const id = userInfo && userInfo._id;

  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/orders/userorders/${id}`);
        console.log(result.data);
        setUserOrders(result.data);
      } catch (err) {
        console.log('Error!');
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="row userINfo">
        <p className="mb-1">
          My Earnings : <strong>1000 Taka</strong>{' '}
        </p>
      </div>
      <div className="row userINfo">
        <p className="mb-1">User's Orders</p>

        {userOrders.length === 0 ? (
          <h3 className="info userOrders">You currently have no orders!</h3>
        ) : (
          <UserInfoOrders userOrders={userOrders} />
        )}
      </div>
    </>
  );
};

export default AccountUserInfo;
