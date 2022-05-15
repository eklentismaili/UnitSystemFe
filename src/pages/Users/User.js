import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditUser from "./EditUser";

function User() {
  const [loading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    avatar: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setIsLoading(true);

    axios.get(`http://localhost:8000/users/${id}`).then((res) => {
      console.log(res.data);
      setUserData({
        ...userData,
        firstName: res.data.first_name,
        lastName: res.data.last_name,
        email: res.data.email,
        id: res.data.id,
        avatar: res.data.avatar,
      });
    });
  };

  const onEdit = () => {
    getUserData();
  };

  return (
    <div className="min-height-100vh profile mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <img
              src={userData.avatar}
              alt="User Photo"
              className="user-photo"
            />
          </div>
          <div className="col-md-6">
            <h6>First Name</h6>
            <div className="user-info">{userData.firstName}</div>
          </div>
          <div className="col-md-6">
            <h6>Last Name</h6>
            <div className="user-info">{userData.lastName}</div>
          </div>
          <div className="col-md-6">
            <h6>Email</h6>
            <div className="user-info">{userData.email}</div>
          </div>
          <div className="col-md-6">
            <h6>ID</h6>
            <div className="user-info">{userData.id}</div>
          </div>
          <div className="col-12">
            <EditUser userData={userData} onEdit={onEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
