import React from "react";
import AdminSocialControlMain from "../../components/admin/AdminSocialControlMain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminSocialControl = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminSocialControlMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminSocialControl;
