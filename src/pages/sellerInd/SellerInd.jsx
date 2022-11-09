import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SellerInfo from '../../components/SellerInfo';

const SellerInd = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <SellerInfo />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default SellerInd;
