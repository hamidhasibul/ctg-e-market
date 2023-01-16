import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ setOpenAdd }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageProduct, setImageProduct] = useState(null);

  const [uploadingImageProduct, setUploadingImageProduct] = useState(false);
  const [previewImageProduct, setPreviewImageProduct] = useState(false);

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const validateImageProduct = async (e) => {
    const fileProduct = e.target.files[0];
    if (fileProduct.size >= 1048576) {
      return alert('Max Size for Image is 1MB');
    } else {
      setImageProduct(fileProduct);
      setPreviewImageProduct(URL.createObjectURL(fileProduct));
    }
  };

  const uploadImageProduct = async () => {
    const dataProduct = new FormData();
    dataProduct.append('file', imageProduct);
    dataProduct.append('upload_preset', 'ctg-e-market');
    try {
      setUploadingImageProduct(true);
      let res = await fetch(
        'https://api.cloudinary.com/v1_1/dpxmimqsi/image/upload',
        {
          method: 'post',
          body: dataProduct,
        }
      );
      const urlDataProduct = await res.json();
      setUploadingImageProduct(false);
      return urlDataProduct.url;
    } catch (error) {
      setUploadingImageProduct(false);
      console.log(error);
    }
  };

  const handlerAddProduct = async (e) => {
    e.preventDefault();

    if (!imageProduct) {
      return alert('Please select your Product  Image');
    }
    const url = await uploadImageProduct(imageProduct);

    try {
      const { data } = await axios.post('/api/products/add', {
        name,
        slug,
        category,
        description,
        price,
        image: url,
        sellerId: userInfo._id,
        seller: userInfo.name,
        sellerImage: userInfo.image,
      });
      console.log(data);
      alert('You have successfully added Product!');
      navigate('/account');
      setOpenAdd(false);
    } catch (error) {
      alert('Add Failed ! try again.');
    }

    // const url = await uploadImageProduct(imageProduct);
    // console.log(url);

    /* try {
      const { data } = await axios.post('/api/products/add', {
        name,
        slug,
        category,
        description,
        price,
        image: url,
        sellerId: userInfo._id,
        seller: userInfo.name,
        sellerImage: userInfo.image,
      });
      console.log(data);
      alert('You have successfully added Product!');
      navigate('/account');
      setOpenAdd(false);
    } catch (error) {
      console.log('Error!');
      alert('Add failed, please try again!');
    } */
  };

  return (
    <>
      <div className="passwords">
        <form onSubmit={handlerAddProduct}>
          <div className="mb-3 ">
            <p
              className="mb-0 text-end close-btn"
              onClick={() => setOpenAdd(false)}
            >
              X
            </p>
          </div>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Product Name
            </label>
            <input
              type="text"
              class="form-control "
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="slug" class="form-label">
              Product Slug
            </label>
            <input
              type="text"
              class="form-control "
              id="slug"
              required
              onChange={(e) => setSlug(e.target.value)}
              value={slug}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="category" class="form-label">
              Product Category
            </label>
            <input
              type="text"
              class="form-control "
              id="category"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">
              Product Description
            </label>
            <textarea
              type="text"
              class="form-control "
              id="description"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div class="mb-3">
            <label htmlFor="price" class="form-label">
              Product Price
            </label>
            <input
              type="text"
              class="form-control "
              id="price"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div class="mb-3 accImage">
            <img
              src={
                previewImageProduct ||
                'https://res.cloudinary.com/dpxmimqsi/image/upload/v1668429059/surgery_ogknku.png'
              }
              alt=""
              className="img-fluid mb-3 productImageStl "
            />

            {uploadingImageProduct ? (
              'Uploading....'
            ) : (
              <label htmlFor="image_upload_product" className="uploadIcon">
                <i class="fa-solid fa-circle-plus"></i>
              </label>
            )}

            <input
              type="file"
              hidden
              id="image_upload_product"
              accept="image/png, image/jpeg"
              onChange={validateImageProduct}
            />
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">
              {uploadingImageProduct ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
