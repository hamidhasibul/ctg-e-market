import React from "react";
import AdminUserControlDetail from "../../components/admin/AdminUserControlDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminUserControlInd = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminUserControlDetail />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminUserControlInd;
