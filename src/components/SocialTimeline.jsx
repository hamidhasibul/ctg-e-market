import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import DemoUserImage from "../images/28.jpg";

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

  console.log(userInfo);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-4">
            <Link to="/social" class="nav-link mb-5">
              <h3 class="text-center">Ctg E-Market</h3>
              <h5 className="text-secondary text-center">
                <i class="fa-solid fa-hashtag"></i>Socials
              </h5>
            </Link>

            <div class="list-group">
              <Link
                to={"/account"}
                class="list-group-item list-group-item-action"
              >
                My Acccount
              </Link>
              <Link
                to={"/account"}
                class="list-group-item list-group-item-action"
              >
                My Products
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="profileCard border rounded bg-light p-3 mb-3">
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={userInfo.image}
                    alt=""
                    className="profileCard-img img-fluid"
                  />
                </div>
                <div className="col-lg-10 text-center">
                  <h4>{userInfo.name}</h4>
                  <p className="text-secondary">{userInfo.address}</p>
                </div>
              </div>
            </div>
            {/* Post Section */}
            <div className="profilePostCard border rounded bg-light p-3 mb-3">
              <form>
                <textarea
                  className="form-control mb-2"
                  rows="4"
                  placeholder="Write something....."
                ></textarea>
                <div className="d-flex justify-content-between">
                  <label
                    htmlFor="socialImg"
                    className="form-label"
                    style={{ cursor: "pointer" }}
                  >
                    <i class="fa-regular fa-image text-secondary"></i>
                    <input
                      type="file"
                      src=""
                      alt=""
                      id="socialImg"
                      style={{ display: "none" }}
                    />
                  </label>
                  <button className="btn btn-sm btn-success">Post</button>
                </div>
              </form>
            </div>
            {/* All Post Section */}
            <div className="allPostsCard border rounded bg-light p-3">
              <div className="indPostCard bg-white rounded p-2 mb-3">
                <div className="row">
                  <div className="col-lg-2">
                    <img
                      src={DemoUserImage}
                      alt=""
                      style={{ height: "4rem" }}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-lg-10">
                    <p className="fw-bold">Demo Poster Name</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ipsam quisquam fuga, omnis ullam qui earum nihil
                      esse ipsum quae unde, hic itaque? Ullam similique
                      asperiores quidem, doloribus minus eaque!
                    </p>
                    <img
                      src={require("../images/photo-1541701494587-cb58502866ab.jpg")}
                      alt=""
                      style={{ height: "10rem" }}
                      className="mb-2"
                    />
                    <div className="border rounded p-2 d-flex justify-content-between mb-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control form-control-sm me-1"
                        placeholder="Write a comment...."
                      />
                      <button className="btn btn-sm btn-success ms-1">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialTimeline;
