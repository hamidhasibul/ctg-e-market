import React from 'react';
import { Link } from 'react-router-dom';

const FollowSeller = () => {
  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-12">
            <h3 className="text-center">Followed List</h3>
            <div className="follow-seller-list d-flex justify-content-center mt-4">
              <div class="card mb-4 w-25 mx-2">
                <img
                  src="./assets/images/users/28.jpg"
                  class="card-img-top card-image-user"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <Link to="/seller/:id" className="product-link text-dark">
                      Lawrence Griffin
                    </Link>
                  </h5>
                  <p class="card-text">
                    <span>
                      <button className="btn btn-danger btn-sm">
                        Unfollow
                      </button>
                    </span>
                    <br />
                    <span>Member Since : 8/11/2022</span>
                    <br />
                  </p>
                </div>
              </div>

              <div class="card mb-4 w-25 mx-2">
                <img
                  src="./assets/images/users/57.jpg"
                  class="card-img-top card-image-user"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <Link to="/seller/:id" className="product-link text-dark">
                      Tyler Dean
                    </Link>
                  </h5>
                  <p class="card-text">
                    <span>
                      <button className="btn btn-danger btn-sm">
                        Unfollow
                      </button>
                    </span>
                    <br />
                    <span>Member Since : 6/11/2022</span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <ul class="pagination d-flex justify-content-center">
              <li class="page-item">
                <Link to="#" class="page-link " aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link to="#" className="page-link">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link to="#" class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowSeller;
