import React from 'react';
import AccountsUser from '../../components/AccountsUser';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Account = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AccountsUser />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Account;
