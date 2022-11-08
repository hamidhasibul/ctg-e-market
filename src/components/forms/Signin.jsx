import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="signin-form mt-5">
              <form action="">
                <div class="mb-3">
                  <label for="emailInput" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    placeholder="Email...."
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="passwordInput" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <button className="btn btn-success w-100">Login</button>
                </div>
                <div className="mb-3 text-center">
                  <p className="m-0">
                    Don't have an Account ?{' '}
                    <Link to="/register" className="linkReset text-primary">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
