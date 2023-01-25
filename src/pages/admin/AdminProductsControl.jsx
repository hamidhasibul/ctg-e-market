import React from 'react';
import AdminProductControlMain from '../../components/admin/AdminProductControlMain';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const AdminProductsControl = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminProductControlMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminProductsControl;
