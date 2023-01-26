import React from "react";
import AdminOrderControlDetail from "../../components/admin/AdminOrderControlDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminOrderControlInd = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <AdminOrderControlDetail />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AdminOrderControlInd;
