import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminUserControlMain = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [delUser, setDelUser] = useState();
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(`/api/users/all`);
        setAllUsers(res.data);
      } catch (error) {
        console.log("Error Fetching Users Data!!");
      }
    };

    fetchAllUsers();
  }, [update]);

  const handlerDeleteUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(`/api/users/delete/${delUser}`);

      if (data) {
        setUpdate(update + 1);
        alert(`User Deleted Successfully`);
      }
    } catch (error) {
      alert("User not Deleted");
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
                Delete User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this User ?
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
                onClick={handlerDeleteUser}
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Ends */}

      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">Admin User Control</h4>

          {/* User Control Stats Section Starts */}

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3 mx-auto">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa-solid fa-hashtag fa-3x text-primary"></i>

                  <div className="ms-3">
                    <p className="mb-2 text-secondary fw-bold">Total Users</p>
                    <h6 className="mb-0 text-end fs-4 fw-bold">
                      {allUsers.filter((user) => !user.isAdmin).length}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Control Stats Section Ends */}

          {/* Registered Users Section Start */}

          <div class="container-fluid pt-4 px-4">
            <div class="bg-light text-center rounded p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="mb-0">All Registered User</h5>
              </div>
              <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr class="text-dark">
                      <th scope="col">Serial No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Seller ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Joined At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...allUsers]
                      .filter((users) => {
                        return !users.isAdmin;
                      })
                      .map((users, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{users.name}</td>
                          <td>{users._id}</td>
                          <td>{users.email}</td>
                          <td>{users.phone}</td>
                          <td>{users.address}</td>
                          <td>{users.createdAt.slice(0, 10)}</td>
                          <td>
                            <Link
                              to={`/admin/usercontrol/${users._id}`}
                              className="btn btn-sm btn-success w-100 mb-1"
                            >
                              View
                            </Link>
                            <br />
                            <Link
                              className="btn btn-sm btn-danger w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => {
                                setDelUser(users._id);
                              }}
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Registered Users Section Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminUserControlMain;
