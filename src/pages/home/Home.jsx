import React from 'react';
import '../home/home.css';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
