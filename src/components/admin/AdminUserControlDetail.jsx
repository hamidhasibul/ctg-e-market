import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const AdminUserControlDetail = () => {
  const [userDetails, setUserDetails] = useState([]);

  const country = "+88";
  const rootMsg = `Hello I'm contacting you from Ctg-E-Market Admin`;

  const params = useParams();
  const userId = params;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(`/api/users/user/${userId.id}`);
        setUserDetails(res.data);
      } catch (error) {
        console.log("Error fetching user data!!");
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <h4 className="text-center border-bottom pb-3">User Details</h4>

          {/* User Details Sections Starts */}

          <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded align-items-center justify-content-center mx-0">
              <div className="col-md-6 mx-auto py-4">
                <img
                  src={userDetails.image}
                  style={{ height: "6rem" }}
                  alt=""
                  className="image-fluid text-center mb-4"
                />
                <p className="mb-1 fw-bold">{userDetails.name}</p>

                <h5 className="mb-2 pb-2 border-bottom border-dark">
                  About User
                </h5>
                <p className="mb-1">
                  <span className="fw-bold">User ID:</span> {userDetails._id}
                </p>
                <p className="mb-1">
                  <span className="fw-bold">User Email:</span>{" "}
                  {userDetails.email}
                </p>
                <p className="mb-1">
                  <span className="fw-bold">User Phone:</span>{" "}
                  {userDetails.phone}
                </p>
                <p className="mb-1">
                  <span className="fw-bold">User Address:</span>{" "}
                  {userDetails.address}
                </p>
                <p className="mb-1">
                  <span className="fw-bold">Joined At:</span>{" "}
                  {userDetails.createdAt}
                </p>
                <ReactWhatsapp
                  className="btn btn-success"
                  number={country + userDetails.phone}
                  message={rootMsg}
                >
                  Contact via Whatsapp
                </ReactWhatsapp>
              </div>
            </div>
          </div>

          {/* User Details Sections Ends */}
        </div>
      </div>
    </>
  );
};

export default AdminUserControlDetail;
