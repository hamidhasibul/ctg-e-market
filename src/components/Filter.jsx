import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterProduct from './FilterProduct';

// const pagiActive = ({ isActive }) => (isActive ? 'page-link' : 'page-link');

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      console.log(result.data);
      setProducts(result.data);
    };

    fetchData();
  }, []);

  const keys = ['name', 'seller'];

  const search = () => {
    return products.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row my-4">
              <div className="col-lg-6 d-flex justify-content-evenly">
                <button className="btn btn-sm btn-secondary">All</button>
                <button className="btn btn-sm btn-secondary">
                  Accessories
                </button>
                <button className="btn btn-sm btn-secondary">
                  Electronics
                </button>
              </div>
              <div className="col-lg-6">
                <input
                  type="search"
                  className="form-control rounded-0 border-dark"
                  placeholder="Search...."
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Product Cards / All Products */}

        <FilterProduct products={search(FilterProduct)} />
      </div>
    </>
  );
};

export default Filter;
