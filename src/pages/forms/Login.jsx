import React from 'react';
import Footer from '../../components/Footer';
import Signin from '../../components/forms/Signin';
import Header from '../../components/Header';

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <Signin />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Login;
