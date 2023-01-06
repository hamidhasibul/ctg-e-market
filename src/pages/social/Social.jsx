import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialTimeline from "../../components/SocialTimeline";

const Social = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main>
          <SocialTimeline />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Social;
