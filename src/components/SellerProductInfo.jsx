import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const SellerProductInfo = ({ pro }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const existUser = localStorage.getItem('userInfo');

  const addToCart = () => {
    if (!existUser) {
      window.alert('Sorry. You must login.');
    } else {
      const existItem = cart.cartItems.find((x) => x._id === pro._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;

      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...pro, quantity },
      });
    }
  };

  return (
    <>
      <div class="card mx-2 mb-4 seller-info-card">
        <img
          src={pro.image}
          class="card-img-top card-image card-image-seller-ind"
          alt={pro.name}
        />
        <div class="card-body">
          <h5 class="card-title">
            <Link to={`../${pro.slug}`} className="product-link text-dark">
              {pro.name}
            </Link>
          </h5>
          <p class="card-text ">
            <span>{pro.category}</span>
            <br />
            <span>{pro.price} Taka</span>
            <br />
            <button
              onClick={addToCart}
              className="btn btn-primary btn-sm mx-auto mt-3"
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerProductInfo;
