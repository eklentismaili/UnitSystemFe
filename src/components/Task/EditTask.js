import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function EditTask({ taskData, onEdit }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setEditTaskForm({
      title: taskData.title,
      completed: taskData.completed,
      userId: taskData.userId,
      id: taskData.id,
    });
  }, [taskData]);

  const editTask = async (e) => {
    e.preventDefault();
    setIsDisabled((prev) => !prev);

    axios
      .put(`http://localhost:8000/tasks/${editTaskForm.id}`, editTaskForm)
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
        Edit Task
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <form onSubmit={editTask} className="modal-form">
          <div className="button-close">
            <button onClick={closeModal} className="btn">
              X
            </button>
          </div>
          <h3 className="text-center">Edit Task</h3>
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className="form-control"
              placeholder="Title"
              value={editTaskForm.title}
              onChange={(value) =>
                setEditTaskForm({
                  ...editTaskForm,
                  title: value.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="id">ID</label>
            <input
              id="id"
              type="text"
              className="form-control"
              placeholder="ID"
              value={editTaskForm.id}
              disabled={true}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="completed">Completed</label>
            <select
              class="form-select"
              value={editTaskForm.completed}
              onChange={(value) =>
                setEditTaskForm({
                  ...editTaskForm,
                  completed: value.target.value,
                })
              }
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-warning full-width"
            disabled={isDisabled}
          >
            Edit Task
          </button>
        </form>
      </Modal>
    </>
  );
}

export default EditTask;
