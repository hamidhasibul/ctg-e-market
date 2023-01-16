import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import Checkout from './Checkout';

const CartItems = () => {
  const navigate = useNavigate();

  const [openCheckout, setOpenCheckout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const idSeller = cartItems.map((sellId) => sellId.sellerId);

  //console.log(idSeller);

  const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0) + '/ Items ';

  const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const itemsPrice = roundPrice(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  const taxPrice = roundPrice(0.2 * itemsPrice); //for tax in Serbia 20%
  const totalPrice = itemsPrice + taxPrice;

  const updateQuantityHandler = async (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeProduct = (item) => {
    ctxDispatch({
      type: 'CART_REMOVE_ITEM',
      payload: item,
    });
  };

  return (
    <>
      <div class="container-lg">
        <div className="row my-4">
          <div className="col-lg-12">
            <h3 className="text-center mb-4">My Cart</h3>
            <div className="cart-items">
              <div className="row">
                <div className="col-lg-8">
                  {cartItems.length === 0 ? (
                    <h3 className="text-center">Your Bag is empty!</h3>
                  ) : (
                    <div className="cart-cards d-flex flex-wrap">
                      {cartItems.map((item) => (
                        <div class="card mx-2 mb-4 cart-card" key={item._id}>
                          <img
                            src={item.image}
                            class="card-img-top"
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
                              <span>{Number(item.price).toFixed(2)} Taka</span>
                              <br />
                              <div className="card-action my-2">
                                <button
                                  onClick={() =>
                                    updateQuantityHandler(
                                      item,
                                      item.quantity - 1
                                    )
                                  }
                                  disabled={item.quantity === 1}
                                  className="btn btn-light"
                                >
                                  <i class="fa-solid fa-minus"></i>
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                  onClick={() =>
                                    updateQuantityHandler(
                                      item,
                                      item.quantity + 1
                                    )
                                  }
                                  className="btn btn-light"
                                >
                                  <i class="fa-solid fa-plus"></i>
                                </button>
                              </div>
                              <button
                                onClick={() => removeProduct(item)}
                                className="btn btn-primary btn-sm mx-auto mt-3"
                              >
                                Remove
                              </button>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-lg-4">
                  <div className="cart-bill bg-light p-4 border border-dark">
                    <h4 className="text-center mb-5">My Bill</h4>
                    {cartItems.length === 0 ? (
                      <h3 className="info">No Products!</h3>
                    ) : (
                      <div className="bill-groups mb-3">
                        {cartItems.map((product) => (
                          <div className="bil-group ">
                            <p className="mb-1 d-flex justify-content-between">
                              {product.name} <span>{product.price} Taka</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bill-total mb-4">
                      <div className="bill-group">
                        <p className="mb-1 d-flex justify-content-between">
                          Sub-Total :{' '}
                          <span>
                            {totalItems} {itemsPrice} Taka
                          </span>
                        </p>
                      </div>
                      <div className="bill-group">
                        <p className="mb-1 d-flex justify-content-between">
                          Tax 20% : <span>{taxPrice} Taka</span>
                        </p>
                      </div>
                      <div className="bill-group">
                        <p className="mb-1 fw-bold d-flex justify-content-between">
                          Total : <span>{totalPrice.toFixed(2)} Taka</span>
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenCheckout(true)}
                      className="btn btn-secondary"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openCheckout && (
          <Checkout
            cartItems={cartItems}
            idSeller={idSeller}
            itemsPrice={itemsPrice}
            taxPrice={taxPrice}
            totalPrice={totalPrice}
            setOpenCheckout={setOpenCheckout}
          />
        )}
      </div>
    </>
  );
};

export default CartItems;
