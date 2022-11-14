import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Store } from '../Store';
import SellerProduct from './SellerProduct';

const SellerInfo = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const [seller, setSeller] = useState([]);
  const [product, setProduct] = useState([]);

  const params = useParams();
  const { id } = params;

  const existUser = localStorage.getItem('userInfo');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/users/user/${id}`);
        console.log(result.data);
        setSeller(result.data);

        const res = await axios.get(`/api/products/seller/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log('Error!');
      }
    };
    fetchData();
  }, [id]);

  const handlerFollow = () => {
    if (!existUser) {
      window.alert('Sorry. You must login.');
    } else {
      //If there is a user I am already following (localstorage), his id, from db
      const existItem = wish.wishItems.find((x) => x._id === seller._id);
      const quantity = existItem ? existItem.quantity : 1;

      if (existItem) {
        window.alert('Sorry. You are already following this user.');
        return;
      }

      ctxDispatch({
        type: 'WISH_ADD_ITEM',
        payload: { ...seller, quantity },
      });
    }
  };

  const handlerUnfollow = (seller) => {
    ctxDispatch({
      type: 'WISH_REMOVE_ITEM',
      payload: seller,
    });
  };

  const sellerExists = wish.wishItems.find((x) => x._id === seller._id);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-6">
            <h2 className="text-center mb-5">Seller Info</h2>
            <div className="seller-info">
              <div className="seller-info-header text-center">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="img-fluid mb-4 seller-info-img"
                />
              </div>
              <div className="seller-info-body text-center">
                <p className="mb-1  fw-bold">{seller.name}</p>
                <p className="mb-1 ">{seller.address}</p>
                <p className="mb-1 ">{seller.email}</p>
                <p className="mb-1 ">{seller.phone}</p>

                {existUser && sellerExists ? (
                  <span
                    key={seller._id}
                    onClick={() => handlerUnfollow(seller)}
                    className="btn btn-danger btn-sm mt-4"
                  >
                    Unfollow
                  </span>
                ) : (
                  <span
                    onClick={handlerFollow}
                    className="btn btn-success btn-sm mt-4"
                  >
                    Follow
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="text-center mb-5">
              All Products from {seller.name}
            </h2>
            <div className="seller-products">
              <SellerProduct product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;
