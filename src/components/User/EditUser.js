import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function EditUser({ userData, onEdit }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [editUserForm, setEditUserForm] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setEditUserForm({
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      avatar: userData.avatar,
      id: userData.id,
    });
  }, [userData]);

  const editUser = async (e) => {
    e.preventDefault();
    setIsDisabled((prev) => !prev);

    axios
      .put(`http://localhost:8000/users/${editUserForm.id}`, editUserForm)
      .then((res) => {
        console.log("success");
        onEdit();
        closeModal();
      })
      .catch((err) => console.log("error"))
      .finally(() => setIsDisabled((prev) => !prev));
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => openModal()} className="btn btn-warning">
        Update User
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <form onSubmit={editUser}>
          <div className="button-close">
            <button onClick={closeModal} className="btn">
              X
            </button>
          </div>
          <h3 className="text-center">Edit User</h3>
          <div className="form-group mb-3">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={editUserForm.first_name}
              onChange={(value) =>
                setEditUserForm({
                  ...editUserForm,
                  first_name: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={editUserForm.last_name}
              onChange={(value) =>
                setEditUserForm({
                  ...editUserForm,
                  last_name: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={editUserForm.email}
              onChange={(value) =>
                setEditUserForm({
                  ...editUserForm,
                  email: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              type="text"
              className="form-control"
              value={editUserForm.avatar}
              disabled={true}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning"
            disabled={isDisabled}
          >
            Edit User
          </button>
        </form>
      </Modal>
    </>
  );
}

export default EditUser;
