import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Password = ({ setOpen }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const handlerUpdatePassword = async (e) => {
    e.preventDefault();

    if (password === rePassword) {
      try {
        const { data } = await axios.put('/api/users/update', {
          _id: userInfo._id,
          password,
        });
        localStorage.removeItem('userInfo', JSON.stringify(data));
        alert(`Password Updated !!`);
        navigate('/login');
      } catch (error) {
        alert('Password not Updated');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <>
      <div className="passwords">
        <form onSubmit={handlerUpdatePassword}>
          <div className="mb-3 ">
            <p
              className="mb-0 text-end close-btn"
              onClick={() => setOpen(false)}
            >
              X
            </p>
          </div>
          <div class="mb-3">
            <label htmlFor="pass" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control "
              id="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="re_pass" class="form-label">
              Retype Password
            </label>
            <input
              type="password"
              class="form-control "
              id="re_pass"
              required
              onChange={(e) => setRePassword(e.target.value)}
              value={rePassword}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Update Password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Password;
