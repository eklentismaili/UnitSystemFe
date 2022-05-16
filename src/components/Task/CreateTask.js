import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

function CreateTask({ onCreate, userId }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [newTask, setNewTask] = useState({
    userId: userId,
    title: "",
    completed: false,
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const createNewTask = async (e) => {
    e.preventDefault();
    setIsDisabled((prev) => !prev);

    axios
      .post(`http://localhost:8000/users/${userId}/tasks`, newTask)
      .then((res) => {
        onCreate();
        closeModal();
      })
      .catch((err) => console.log("error"))
      .finally(() => setIsDisabled((prev) => !prev));
  };

  return (
    <>
      <button onClick={() => openModal()} className="btn btn-primary mx-3">
        Create Task
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <form onSubmit={createNewTask}>
          <div className="button-close">
            <button onClick={closeModal} className="btn">
              X
            </button>
          </div>
          <h3 className="text-center">Create New Task</h3>
          <div className="form-group mb-3">
            <input
              id="title"
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(value) =>
                setNewTask({
                  ...newTask,
                  title: value.target.value,
                })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning"
            disabled={isDisabled}
          >
            Create Task
          </button>
        </form>
      </Modal>
    </>
  );
}

export default CreateTask;
