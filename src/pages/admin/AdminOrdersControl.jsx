import React from "react";
import AdminOrderControlMain from "../../components/admin/AdminOrderControlMain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminOrdersControl = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminOrderControlMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminOrdersControl;
