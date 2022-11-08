import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';

const Shop = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <Filter />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Shop;
