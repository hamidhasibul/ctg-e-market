import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) =>
  isActive ? 'nav-link active_link' : 'nav-link';

const Header = () => {
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
              <NavLink to="/shops" className={activeLink}>
                Shops
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/seller" className={activeLink}>
                Sellers
              </NavLink>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="badge badge-light text-dark">0</span>
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <Link to="/" class="nav-link px-3">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
