import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

function CreateUser() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: `https://reqres.in/img/faces/${
      Math.floor(Math.random() * 10) + 1
    }-image.jpg`,
  });

  function openModal() {
    setIsOpen(true);
  }

  const createNewUser = async (e) => {
    e.preventDefault();
    setIsDisabled((prev) => !prev);

    axios
      .post(`http://localhost:8000/users`, newUser)
      .then((res) => console.log("success"))
      .catch((err) => console.log("error"))
      .finally(() => setIsDisabled((prev) => !prev));
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => openModal()} className="btn btn-primary ms-1">
        Create User
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <form onSubmit={createNewUser} className="login-form">
          <h3 className="text-center">Create New User</h3>
          <div className="form-group mb-3">
            <input
              id="first_name"
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(value) =>
                setNewUser({
                  ...newUser,
                  first_name: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="last_name"
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(value) =>
                setNewUser({
                  ...newUser,
                  last_name: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="
              Email"
              onChange={(value) =>
                setNewUser({
                  ...newUser,
                  email: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="avatar"
              type="text"
              className="form-control"
              value={newUser.avatar}
              disabled={true}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning"
            disabled={isDisabled}
          >
            Create User
          </button>
        </form>
      </Modal>
    </>
  );
}

export default CreateUser;
