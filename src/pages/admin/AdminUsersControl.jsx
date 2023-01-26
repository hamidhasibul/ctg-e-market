import React from "react";
import AdminUserControlMain from "../../components/admin/AdminUserControlMain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminUsersControl = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminUserControlMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminUsersControl;
