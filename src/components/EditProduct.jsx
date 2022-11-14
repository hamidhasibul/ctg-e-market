import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProduct = ({ setOpenEdit, pro }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(pro.name);
  const [slug, setSlug] = useState(pro.slug);
  const [category, setCategory] = useState(pro.category);
  const [description, setDescription] = useState(pro.description);
  const [price, setPrice] = useState(pro.price);
  const [imageProduct, setImageProduct] = useState(null);

  const [uploadingImageProduct, setUploadingImageProduct] = useState(false);
  const [previewImageProduct, setPreviewImageProduct] = useState(pro.image);

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

  const handlerEditProduct = async (e) => {
    e.preventDefault();

    if (previewImageProduct) {
      try {
        const { data } = await axios.put('/api/products/update', {
          _id: pro._id,
          name,
          slug,
          category,
          description,
          price,
          image: previewImageProduct,
          sellerId: userInfo._id,
          seller: userInfo.name,
          sellerImage: userInfo.image,
        });
        console.log(data);
        alert('You have successfully updated Product!');
        navigate('/account');
        setOpenEdit(false);
      } catch (error) {
        console.log('Error!');
        alert('Updated failed, please try again!');
      }
      //if set new image, than set url link for new image
    } else {
      const url = await uploadImageProduct(imageProduct);
      console.log(url);

      try {
        const { data } = await axios.put('/api/products/update', {
          id: pro._id,
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
        alert('You have successfully updated Product!');
        navigate('/account');
        setOpenEdit(false);
      } catch (error) {
        console.log('Error!');
        alert('Updated failed, please try again!');
      }
    }

    const url = await uploadImageProduct(imageProduct);
    console.log(url);

    /* const url = await uploadImageProduct(imageProduct);
    console.log(url);

    try {
      const { data } = await axios.put('/api/products/update', {
        _id: pro._id,
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
      alert('You have successfully updated Product!');
      navigate('/account');
      setOpenEdit(false);
    } catch (error) {
      alert('Update Failed ! try again.');
    } */
  };

  return (
    <>
      <div className="passwords">
        <form onSubmit={handlerEditProduct}>
          <div className="mb-3 ">
            <p
              className="mb-0 text-end close-btn"
              onClick={() => setOpenEdit(false)}
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
              src={previewImageProduct}
              alt=""
              className="img-fluid mb-3 productImageStl "
            />

            {uploadingImageProduct ? (
              'Uploading....'
            ) : (
              <label htmlFor="image_update_product" className="uploadIcon">
                <i class="fa-solid fa-circle-plus"></i>
              </label>
            )}

            <input
              type="file"
              hidden
              id="image_update_product"
              accept="image/png, image/jpeg"
              onChange={validateImageProduct}
            />
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">
              {uploadingImageProduct ? 'Changing...' : 'Edit Product'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
