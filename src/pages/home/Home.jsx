import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Latest from '../../components/Latest';
import Socials from '../../components/Socials';

const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main>
        <Slider />
        <Latest />
        <Socials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
