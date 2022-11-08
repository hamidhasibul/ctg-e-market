import React from 'react';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <>
      <div className="socials-section">
        <div className="container-fluid">
          <h4 className="text-center">Follow Us on Socials Networks</h4>
          <div className="row my-5">
            <div className="col-lg-4 mx-auto text-center">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/">
                    <i class="fa-brands fa-facebook fs-2 social-links"></i>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="/">
                    <i class="fa-brands fa-instagram fs-2 social-links"></i>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="/">
                    <i class="fa-brands fa-linkedin fs-2 social-links"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
