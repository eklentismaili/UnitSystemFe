import axios from "axios";
import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

function DeleteUser({ original, onDelete }) {
  const [showAlert, setShowAlert] = useState(false);

  const deleteFile = () => {
    axios.delete(`http://localhost:8000/users/${original.id}`).then(() => {
      onDelete();
    });
  };

  return (
    <>
      <button
        className="btn btn-danger ms-1"
        onClick={() => setShowAlert((prev) => !prev)}
      >
        Delete User
      </button>
      <SweetAlert
        warning
        show={showAlert}
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure"
        onConfirm={() => {
          deleteFile();
        }}
        onCancel={() => {
          setShowAlert((prev) => !prev);
        }}
      >
        you want to delete {original.first_name} {original.last_name}
      </SweetAlert>
    </>
  );
}

export default DeleteUser;
