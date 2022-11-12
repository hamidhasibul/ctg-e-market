import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert(`You've successfully logged in!!`);
      navigate('/');
    } catch (error) {
      alert('Invalid Email or Password');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="signin-form mt-5">
              <form onSubmit={submitHandler}>
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
