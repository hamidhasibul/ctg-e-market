import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const FollowSellerInfo = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish } = state;

  const handlerUnfollow = (item) => {
    ctxDispatch({
      type: 'WISH_REMOVE_ITEM',
      payload: item,
    });
  };
  return (
    <>
      <div class="card mb-4 w-25 mx-2">
        <img
          src={item.image}
          class="card-img-top card-image-user"
          alt={item.name}
        />
        <div class="card-body">
          <h5 class="card-title">
            <Link
              to={`../seller/${item._id}`}
              className="product-link text-dark"
            >
              {item.name}
            </Link>
          </h5>
          <p class="card-text">
            <span>
              <button
                onClick={() => handlerUnfollow(item)}
                className="btn btn-danger btn-sm"
              >
                Unfollow
              </button>
            </span>
            <br />
            <span>Member Since : {item.createdAt.slice(0, 10)}</span>
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default FollowSellerInfo;
