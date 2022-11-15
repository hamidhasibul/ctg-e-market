import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const FilterProductInfo = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const existUser = localStorage.getItem('userInfo');

  const addToCart = () => {
    if (!existUser) {
      window.alert('Sorry. You must login.');
    } else {
      const existItem = cart.cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
      });
    }
  };

  return (
    <>
      <div class="card mx-2 mb-4 w-25" key={product._id}>
        <img
          src={product.image}
          class="card-img-top card-image"
          alt={product.name}
        />
        <Link to={`../seller/${product.sellerId}`}>
          <img src={product.sellerImage} alt="" className="seller-image" />
        </Link>
        <div class="card-body">
          <h5 class="card-title">
            <Link to={`../${product.slug}`} className="product-link text-dark">
              {product.name}
            </Link>
          </h5>
          <p class="card-text ">
            <span>{product.category}</span>
            <br />
            <span>{product.price} Taka</span>
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

export default FilterProductInfo;
