import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-height-100vh profile mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <img src={user.avatar} alt="User Photo" className="user-photo" />
          </div>
          <div className="col-md-6">
            <h6>First Name</h6>
            <div className="user-info">{user.firstName}</div>
          </div>
          <div className="col-md-6">
            <h6>Last Name</h6>
            <div className="user-info">{user.lastName}</div>
          </div>
          <div className="col-md-6">
            <h6>Email</h6>
            <div className="user-info">{user.email}</div>
          </div>
          <div className="col-md-6">
            <h6>ID</h6>
            <div className="user-info">{user.id}</div>
          </div>
          <div className="col-12">
            <button className="btn btn-warning" disabled={true}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
