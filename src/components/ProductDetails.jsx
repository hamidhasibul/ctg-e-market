import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        console.log(result.data);
        setProduct(result.data);
      } catch (err) {
        console.log('Error!');
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <div className="container-lg">
        <div className="row my-5">
          <div className="col-lg-6 position-relative">
            <img src={product.image} alt={product.name} className="img-fluid" />
            <Link to={`../${product._id}`}>
              <img
                src={product.sellerImage}
                alt={product.seller}
                className="img-fluid product-seller-img"
              />
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-category mb-1 fw-bold text-danger">
                {product.category}
              </p>
              <p className="mb-1 product-price fw-bold">
                Price: {Number(product.price).toFixed(2)} taka
              </p>
              <p className="product-description mb-5">{product.description}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
