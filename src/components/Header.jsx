import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const Header = () => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const { state } = useContext(Store);
  const { cart, wish } = state;

  const signoutHandler = () => {
    localStorage.removeItem('userInfo');
    alert(`You've logged out!!`);
    navigate('/login');
  };

  const activeLink = ({ isActive }) =>
    isActive ? 'nav-link active_link' : 'nav-link';

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <Link to="/" class="nav-link">
          <h3 class="navbar-brand">Ctg E-Market</h3>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/shop" className={activeLink}>
                Shops
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/seller" className={activeLink}>
                Sellers
              </NavLink>
            </li>

            {userInfo && (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    {cart.cartItems.length ? (
                      <span className="badge badge-light text-dark">
                        {cart.cartItems.length}
                      </span>
                    ) : (
                      <span class="badge badge-light text-dark">0</span>
                    )}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/follow">
                    <i class="fa-solid fa-comments"></i>
                    {wish.wishItems.length ? (
                      <span class="badge badge-light text-dark">
                        {wish.wishItems.length}
                      </span>
                    ) : (
                      <span class="badge badge-light text-dark">0</span>
                    )}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/account">
                    <i class="fa-solid fa-user"></i> {userInfo.name}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/social">
                    <i class="fa-solid fa-hashtag"></i> Social
                  </Link>
                </li>
                {userInfo && userInfo.isAdmin && (
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle text-secondary"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-gear"></i> Admin Panel
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link
                            class="dropdown-item nav-link"
                            to="/admin/dashboard"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item nav-link"
                            to="/admin/productcontrol"
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item nav-link"
                            to="/admin/socialcontrol"
                          >
                            Social Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
          <form class="d-flex">
            {userInfo ? (
              <span class="nav-link px-3 logout" onClick={signoutHandler}>
                <i class="fa-solid fa-right-to-bracket me-2"></i>
                Logout
              </span>
            ) : (
              <Link to="/login" class="nav-link px-3">
                <i class="fa-solid fa-right-to-bracket me-2"></i>
                Login
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
