import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AdminSocialControlMain = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [delPost, setDelPost] = useState();

  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/posts/`);
        setAllPosts(res.data);
      } catch (error) {
        console.log("Error Fetching Posts!!");
      }
    };

    fetchPosts();
  }, [update]);

  const handlerDeletePost = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(`/api/posts/delete/${delPost}`);

      if (data) {
        setUpdate(update + 1);
        alert(`Post Deleted Successfully`);
      }
    } catch (error) {
      alert("Post not Deleted");
    }
  };
  return (
    <>
      {/* Modal */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this Post ?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handlerDeletePost}
              >
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Ends */}

      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">
            Admin Social Control
          </h4>

          {/* Social Control Stats Section Starts */}

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3 mx-auto">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-hashtag fa-3x text-primary"></i>

                  <div className="ms-3">
                    <p className="mb-2 text-secondary fw-bold">Total Posts</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allPosts.length}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Control Stats Section Ends */}

          {/* Social Control Section Starts */}

          <div class="container-fluid pt-4 px-4">
            <div class="bg-light text-center rounded p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="mb-0">All Posts</h5>
              </div>
              <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr class="text-dark">
                      <th scope="col">Serial</th>
                      <th scope="col">Posted At</th>
                      <th scope="col">Posted By</th>
                      <th scope="col">Content</th>
                      <th scope="col">Posted Image</th>
                      <th scope="col">Post ID</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...allPosts].reverse().map((posts, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{posts.createdAt.slice(0, 10)}</td>
                        <td>{posts.poster}</td>
                        <td>{posts.post}</td>
                        <td>
                          {posts.image ? (
                            <img
                              src={posts.image}
                              alt=""
                              style={{ height: "4rem" }}
                            />
                          ) : (
                            <p>No Image Posted</p>
                          )}
                        </td>
                        <td>{posts._id}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              setDelPost(posts._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Social Control Section Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminSocialControlMain;
