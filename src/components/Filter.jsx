import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterProduct from './FilterProduct';

// const pagiActive = ({ isActive }) => (isActive ? 'page-link' : 'page-link');

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      console.log(result.data);
      setProducts(result.data);

      const res = await axios.get('/api/category');
      console.log(res.data);
      setCategory(res.data);
    };

    fetchData();
  }, []);

  const filterResult = (catItem) => {
    const catResult = products.filter((curCat) => {
      return curCat.category === catItem;
    });
    setProducts(catResult);
  };

  const keys = ['name', 'seller'];

  const search = () => {
    return products.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const handleReset = async (e) => {
    e.preventDefault();
    const result = await axios.get('/api/products');
    console.log(result.data);
    setProducts(result.data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row my-4">
              <div className="col-lg-6 d-flex justify-content-evenly">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={handleReset}
                >
                  All
                </button>
                {category.map((cat) => (
                  <button
                    className="btn btn-sm btn-secondary"
                    key={cat._id}
                    onClick={() => filterResult(cat.name)}
                  >
                    {cat.name}
                  </button>
                ))}
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
