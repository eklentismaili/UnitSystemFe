import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import DeleteUser from "../../components/User/DeleteUser";
import CreateTask from "../../components/Task/CreateTask";
import DeleteTask from "../../components/Task/DeleteTask";
import GoBack from "../../components/GoBack";
import Skeleton from "react-loading-skeleton-2";

function Tasks() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "User ID",
      accessor: "userId",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Completed",
      accessor: "completed",
    },
    {
      Header: "Actions",
      accessor: "Actions",
      Cell: ({ row: { original } }) => (
        <>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(`${original.id}`);
            }}
          >
            View Task
          </button>
          <DeleteTask original={original} onDelete={onDelete} />
        </>
      ),
    },
  ];

  const [filter, setFilter] = useState({
    completed: "all",
  });

  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalTasks: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getTasksPagination(currentPage);
  }, [currentPage, filter]);

  const getTasksData = (pageNo, totalTasks, totalPages) => {
    if (filter.completed === "all") {
      axios
        .get(`http://localhost:8000/users/${id}/tasks?_page=${pageNo}&_limit=6`)
        .then((info) => {
          const data = info.data;

          setPageData({
            ...pageData,
            totalPages: totalPages,
            totalTasks: totalTasks,
            isLoading: false,
            rowData: formatRowData(data),
          });
        });
    } else {
      axios
        .get(
          `http://localhost:8000/users/${id}/tasks?_page=${pageNo}&_limit=6&completed=${filter.completed}`
        )
        .then((info) => {
          const data = info.data;

          setPageData({
            ...pageData,
            totalPages: totalPages,
            totalTasks: totalTasks,
            isLoading: false,
            rowData: formatRowData(data),
          });
        });
    }
  };

  const getTasksPagination = (pageNo) => {
    if (filter.completed === "all") {
      axios
        .get(`http://localhost:8000/tasks?userId=${id}`)
        .then(async (info) => {
          const totalPages = Math.ceil(info.data.length / 6);
          const totalTasks = info.data.length;

          getTasksData(pageNo, totalTasks, totalPages);
        });
    } else {
      axios
        .get(
          `http://localhost:8000/tasks?userId=${id}&completed=${filter.completed}`
        )
        .then(async (info) => {
          const totalPages = Math.ceil(info.data.length / 6);
          const totalTasks = info.data.length;

          getTasksData(pageNo, totalTasks, totalPages);
        });
    }
  };

  const onCreate = () => {
    getTasksPagination(currentPage);
    toast.success("Task Successfully created!");
  };

  const onDelete = () => {
    getTasksPagination(currentPage);
    toast.success("Task Successfully deleted!");
  };

  return (
    <div className="min-height-100vh mt-5 user">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <GoBack />
          </div>
          <div className="col-12 mb-3">
            <span className="user-total">
              Total Tasks: {pageData.totalTasks}
            </span>
            <CreateTask onCreate={onCreate} userId={id} />
          </div>
          <div className="col-12">
            <div className="filter">
              <span>Filter tasks by completed:</span>
              <select
                class="form-select"
                value={filter.completed}
                onChange={(value) =>
                  setFilter({
                    ...filter,
                    completed: value.target.value,
                  })
                }
              >
                <option value={"all"}>All</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            {pageData.isLoading ? (
              <Skeleton height={"440px"} width={"100%"} />
            ) : (
              <div className="table-wrapper">
                <div className="table">
                  <Table
                    columns={columns}
                    data={pageData.rowData}
                    isLoading={pageData.isLoading}
                  />
                </div>
              </div>
            )}
            <Pagination
              totalRows={pageData.totalTasks}
              pageChangeHandler={setCurrentPage}
              rowsPerPage={6}
              key={`${pageData.totalTasks} + 1`}
            />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Tasks;

const formatRowData = (rawData) =>
  rawData.map((info) => ({
    id: info.id,
    userId: info.userId,
    title: info.title,
    completed: info.completed.toString(),
  }));
