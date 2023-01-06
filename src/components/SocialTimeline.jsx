import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SocialTimeline = () => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const id = userInfo && userInfo._id;

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  }, [navigate, id]);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-4">
            <Link to="/" class="nav-link">
              <h1 class="navbar-brand text-center">Ctg E-Market</h1>
            </Link>
          </div>
          <div className="col-lg-8">
            <p>another asd</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialTimeline;
