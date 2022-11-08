import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SellFilter from '../../components/SellFilter';

const Seller = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <SellFilter />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Seller;
