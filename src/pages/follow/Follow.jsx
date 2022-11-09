import React from 'react';
import FollowSeller from '../../components/FollowSeller';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Follow = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <FollowSeller />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Follow;
