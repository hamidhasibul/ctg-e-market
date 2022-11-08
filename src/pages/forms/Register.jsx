import React from 'react';
import Footer from '../../components/Footer';
import Signup from '../../components/forms/Signup';
import Header from '../../components/Header';

const Register = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <Signup />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Register;
