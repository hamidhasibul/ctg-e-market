import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="signup-form mt-4">
              <form action="">
                <div class="mb-3">
                  <label for="fullnameInput" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullnameInput"
                    placeholder="Enter Full Name...."
                    required
                  />
                </div>
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
                <div class="mb-3">
                  <label for="repasswordInput" class="form-label">
                    Retype Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="repasswordInput"
                    required
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="addressInput" class="form-label">
                    Address
                  </label>
                  <textarea
                    class="form-control"
                    id="addressInput"
                    rows="2"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="phoneInput" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneInput"
                    required
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-success w-100">Register</button>
                </div>
                <div className="mb-3 text-center">
                  <p className="m-0">
                    Already have an Account ?
                    <Link to="/login" className="linkReset text-primary">
                      Login
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

export default Signup;
