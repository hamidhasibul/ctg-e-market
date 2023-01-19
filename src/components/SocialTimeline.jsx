import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SocialTimeline = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState();
  const [image, setImage] = useState();
  const [allPosts, setAllPosts] = useState([]);

  const [update, setUpdate] = useState(0);

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const id = userInfo && userInfo._id;

  const validateImagePost = async (e) => {
    const filePost = e.target.files[0];
    if (filePost.size >= 1048576) {
      return alert("Max Size for Image is 2MB");
    } else {
      setImage(filePost);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/`);
        console.log(res.data);
        setAllPosts(res.data);
      } catch (err) {
        console.log("Error!");
      }
    };

    fetchData();
  }, [navigate, id, update]);

  const uploadImageProduct = async () => {
    const dataPost = new FormData();
    dataPost.append("file", image);
    dataPost.append("upload_preset", "ctg-e-market");
    try {
      // setUploadingImageProduct(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dpxmimqsi/image/upload",
        {
          method: "post",
          body: dataPost,
        }
      );
      const urlDataPost = await res.json();

      return urlDataPost.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handlerAddPost = async (e) => {
    e.preventDefault();

    const url = await uploadImageProduct(image);

    try {
      const { data } = await axios.post("/api/posts/add", {
        post,
        image: url,
        posterId: userInfo._id,
        poster: userInfo.name,
        posterImage: userInfo.image,
      });
      console.log(data);
      setUpdate(update + 1);
      alert("You have successfully added Post!");
    } catch (error) {
      alert("Add Failed ! try again.");
    }
  };

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
              <form onSubmit={handlerAddPost}>
                <textarea
                  className="form-control mb-2"
                  rows="4"
                  placeholder="Write something....."
                  onChange={(e) => setPost(e.target.value)}
                  value={post}
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
                      onChange={validateImagePost}
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
              {[...allPosts].reverse().map((posts) => (
                <div className="indPostCard bg-white rounded p-2 mb-3">
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        src={posts.posterImage}
                        alt=""
                        style={{ height: "4rem" }}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="col-lg-10">
                      <p className="fw-bold">{posts.poster}</p>
                      <p>{posts.post}</p>
                      <img
                        src={posts.image}
                        alt=""
                        style={{ height: "10rem" }}
                        className="mb-2"
                      />
                      {/* <div className="border rounded p-2 d-flex justify-content-between mb-2">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialTimeline;
