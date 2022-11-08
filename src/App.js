import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/home/Home';
import Shop from './pages/shop/Shop';
import Seller from './pages/seller/Seller';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
