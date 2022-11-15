import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Password from './forms/Password';
import UserProduct from './UserProduct';
import AddProduct from './AddProduct';

const AccountsUser = () => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const [name, setName] = useState(userInfo && userInfo.name);
  const [email, setEmail] = useState(userInfo && userInfo.email);
  const [address, setAddress] = useState(userInfo && userInfo.address);
  const [phone, setPhone] = useState(userInfo && userInfo.phone);

  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);

  const [product, setProduct] = useState([]);

  const id = userInfo && userInfo._id;

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/products/seller/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log('Error!');
      }
    };

    fetchData();
  }, [navigate, id]);

  const handlerUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put('/api/users/update', {
        _id: userInfo._id,
        name,
        email,
        address,
        phone,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert(`User Updated !!`);
    } catch (error) {
      alert('Account Update failed!');
    }
  };

  const validateImage = async (e) => {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert('Max Size for Image is 1MB');
    } else {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ctg-e-market');
    try {
      setUploadingImage(true);
      let res = await fetch(
        'https://api.cloudinary.com/v1_1/dpxmimqsi/image/upload',
        {
          method: 'post',
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    } catch (error) {
      setUploadingImage(false);
      console.log(error);
    }
  };

  const handlerUpdateImage = async (e) => {
    e.preventDefault();

    if (!image) {
      return alert('Please select your Profile Image');
    }

    const url = await uploadImage(image);
    console.log(url);

    const { data } = await axios.put('/api/users/update', {
      _id: userInfo._id,
      image: url,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    alert('Profile Image updated successfully!');
  };

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h2 className="text-center mb-4">My Account</h2>
          <div className="col-lg-6">
            <form onSubmit={handlerUpdateImage} className="accImage">
              <img
                src={previewImage || (userInfo && userInfo.image)}
                alt=""
                className="img-fluid mb-3 accImageStl"
              />

              {uploadingImage ? (
                'Uploading....'
              ) : (
                <label htmlFor="image_upload" className="uploadIcon">
                  <i class="fa-solid fa-circle-plus"></i>
                </label>
              )}

              <input
                type="file"
                hidden
                id="image_upload"
                accept="image/png, image/jpeg"
                onChange={validateImage}
              />
              <button className="btn btn-light ms-4">
                {uploadingImage ? 'Uploading...' : 'Upload'}
              </button>
            </form>
            {/* btn btn-light ms-4 */}
            <form onSubmit={handlerUpdate}>
              <div class="mb-3">
                <label for="fullnameInput" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="fullnameInput"
                  placeholder=""
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div class="mb-3">
                <label for="emailInput" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control w-50"
                  id="emailInput"
                  placeholder="tyleremarket@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="mb-3">
                <label for="addressInput" class="form-label">
                  Address
                </label>
                <textarea
                  class="form-control w-50"
                  id="addressInput"
                  rows="2"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="phoneInput" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="phoneInput"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label changePass"
                  onClick={() => setOpen(true)}
                >
                  Change Password
                </label>
              </div>
              <div className="mb-3">
                <button className="btn btn-secondary w-50">Update</button>
              </div>
            </form>
            {open && <Password setOpen={setOpen} />}
          </div>
          <div className="col-lg-6">
            <div className="account-group">
              <h5 className="mb-4 text-center">My Products</h5>

              <button
                className="btn btn-secondary mb-5 "
                onClick={() => setOpenAdd(true)}
              >
                Add Product
              </button>
              <div className="account-products">
                {product.length === 0 ? (
                  <h4 className="text-center mb-4">No products added</h4>
                ) : (
                  <UserProduct product={product} />
                )}
              </div>
              <h5 className="mb-4 text-center">My Orders</h5>
              <div className="account-orders text-center">
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
                <h6>
                  Order no : 123456789{' '}
                  <Link to="/" className="linkReset">
                    <i class="fa-solid fa-eye text-dark"></i>
                  </Link>
                </h6>
              </div>
              {/* Pagination */}
              <ul class="pagination d-flex justify-content-center">
                <li class="page-item">
                  <Link to="#" class="page-link " aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li class="page-item">
                  <Link to="#" className="page-link">
                    1
                  </Link>
                </li>
                <li class="page-item">
                  <Link to="#" class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </div>
            {openAdd && <AddProduct setOpenAdd={setOpenAdd} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsUser;
