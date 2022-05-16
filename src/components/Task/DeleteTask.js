import axios from "axios";
import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

function DeleteTask({ original, onDelete }) {
  const [showAlert, setShowAlert] = useState(false);

  const deleteTask = () => {
    axios.delete(`http://localhost:8000/tasks/${original.id}`).then(() => {
      onDelete();
    });
  };

  return (
    <>
      <button
        className="btn btn-danger ms-1"
        onClick={() => setShowAlert((prev) => !prev)}
      >
        Delete Task
      </button>
      <SweetAlert
        warning
        show={showAlert}
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure"
        onConfirm={() => {
          deleteTask();
        }}
        onCancel={() => {
          setShowAlert((prev) => !prev);
        }}
      >
        you want to delete this task?
      </SweetAlert>
    </>
  );
}

export default DeleteTask;
