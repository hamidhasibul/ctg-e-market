import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const LatestSeller = ({ user }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const sellerExists = wish.wishItems.find((x) => x._id === user._id);

  const existUser = localStorage.getItem('userInfo');

  const handlerFollow = () => {
    if (!existUser) {
      window.alert('Sorry. You must login.');
    } else {
      const existItem = wish.wishItems.find((x) => x._id === user._id);
      const quantity = existItem ? existItem.quantity : 1;

      if (existItem) {
        window.alert('Sorry. You are already following this user.');
        return;
      }

      ctxDispatch({
        type: 'WISH_ADD_ITEM',
        payload: { ...user, quantity },
      });
    }
  };

  const handlerUnfollow = (seller) => {
    ctxDispatch({
      type: 'WISH_REMOVE_ITEM',
      payload: seller,
    });
  };

  return (
    <>
      <div class="card mb-4 w-25 mx-2" key={user._id}>
        <img
          src={user.image}
          class="card-img-top card-image-user"
          alt={user.name}
        />
        <div class="card-body">
          <h5 class="card-title">
            <Link to={`seller/${user._id}`} className="product-link text-dark">
              {user.name}
            </Link>
          </h5>
          <p class="card-text">
            <span>
              {existUser && sellerExists ? (
                <span
                  key={user._id}
                  onClick={() => handlerUnfollow(user)}
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
            </span>
            <br />
            <span>Member Since : {user.createdAt.slice(0, 10)}</span>
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestSeller;
