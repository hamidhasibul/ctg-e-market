import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const ProductItem = ({ pro }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const id = pro._id;

  const handlerDeleteProduct = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(`/api/products/delete/${id}`);

      if (data) {
        alert(`Product Deleted Successfully`);
      }
    } catch (error) {
      alert('Product not Deleted');
    }
  };

  return (
    <>
      <div class="card mx-2 mb-4 my-product-card" key={pro._id}>
        <img
          src={pro.image}
          class="card-img-top my-product-card-image"
          alt={pro.name}
        />

        <div class="card-body">
          <h5 class="card-title">
            <Link to={`../${pro.slug}`} className="product-link text-dark">
              {pro.name}
            </Link>
          </h5>
          <p class="card-text ">
            <span>{pro.category}</span>
            <br />
            <span>{pro.price} Taka</span>
            <br />
            <button
              className="btn btn-success btn-sm mx-auto mt-3 w-50"
              onClick={() => setOpenEdit(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm mx-auto mt-3 w-50"
              onClick={handlerDeleteProduct}
            >
              Delete
            </button>
          </p>
        </div>
      </div>
      {openEdit && <EditProduct pro={pro} setOpenEdit={setOpenEdit} />}
    </>
  );
};

export default ProductItem;
