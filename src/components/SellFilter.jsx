import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellFilterMain from './SellFilterMain';
import { useNavigate } from 'react-router-dom';

const SellFilter = () => {
  const [seller, setSeller] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/users/all');
      console.log(result.data);
      setSeller(result.data);
    };

    fetchData();
  }, []);

  const keys = ['name', 'email', 'address'];

  const search = () => {
    return seller.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row my-4">
          <div className="col-lg-8 mx-auto">
            <input
              type="search"
              className="form-control rounded-0 border-dark"
              placeholder="Search...."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <SellFilterMain seller={search(SellFilterMain)} />
      </div>
    </>
  );
};

export default SellFilter;
