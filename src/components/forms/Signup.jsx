import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
        address,
        phone,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert(`You've successfully Registered!!`);
      navigate('/');
    } catch (error) {
      alert('Registration Failed ! try again.');
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="signup-form mt-4">
              <form onSubmit={submitHandler}>
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
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-success w-100">Register</button>
                </div>
                <div className="mb-3 text-center">
                  <p className="m-0">
                    Already have an Account ?{' '}
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
