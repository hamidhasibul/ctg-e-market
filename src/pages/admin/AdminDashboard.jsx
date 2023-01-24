import React from "react";
import AdminDashMain from "../../components/admin/AdminDashMain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const AdminDashboard = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminDashMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
