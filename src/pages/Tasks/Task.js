import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoBack from "../../components/GoBack";
import EditTask from "../../components/Task/EditTask";

function Task() {
  const [loading, setIsLoading] = useState(true);

  const [taskData, setTaskData] = useState({
    userId: "",
    title: "",
    completed: undefined,
    id: undefined,
  });

  const { id, taskId } = useParams();

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = async () => {
    setIsLoading(true);

    axios.get(`http://localhost:8000/tasks/${taskId}`).then((res) => {
      console.log(res.data);
      setTaskData({
        ...taskData,
        userId: res.data.userId,
        title: res.data.title,
        id: res.data.id,
        completed: res.data.completed,
      });
    });
  };

  const onEdit = () => {
    getTaskData();
    toast.success("Task updated successfully!");
  };

  return (
    <div className="min-height-100vh profile mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <GoBack />
          </div>
          <div className="col-md-6">
            <h6>ID</h6>
            <div className="user-info">{taskData.id}</div>
          </div>
          <div className="col-md-6">
            <h6>User ID</h6>
            <div className="user-info">{taskData.userId}</div>
          </div>
          <div className="col-md-6">
            <h6>Title</h6>
            <div className="user-info">{taskData.title}</div>
          </div>
          <div className="col-md-6">
            <h6>Completed</h6>
            <div className="user-info">
              {taskData.completed === "true" ? "true" : "false"}
            </div>
          </div>
          <div className="col-12">
            <EditTask taskData={taskData} onEdit={onEdit} />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Task;
