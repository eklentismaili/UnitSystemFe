import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import CreateUser from "./CreateUser";

function Users() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Avatar",
      accessor: "avatar",
    },
    {
      Header: "Actions",
      accessor: "Actions",
      Cell: ({ row: { original } }) => (
        <>
          <button
            className="btn btn-primary ms-1"
            onClick={() => console.log(original)}
          >
            View To Do
          </button>
          <button
            className="btn btn-primary ms-1"
            onClick={() => navigate(`/users/${original.id}`)}
          >
            View User
          </button>
          <button
            className="btn btn-warning ms-1"
            onClick={() => console.log(original)}
          >
            Edit User
          </button>
          <button
            className="btn btn-danger ms-1"
            onClick={() => console.log(original)}
          >
            Delete User
          </button>
        </>
      ),
    },
  ];

  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalUsers: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getUsersPagination(currentPage);
  }, [currentPage]);

  const getUsersData = (pageNo, totalUsers, totalPages) => {
    axios
      .get(`http://localhost:8000/users?_page=${pageNo}&_limit=6`)
      .then((info) => {
        const data = info.data;

        setPageData({
          ...pageData,
          totalPages: totalPages,
          totalUsers: totalUsers,
          isLoading: false,
          rowData: formatRowData(data),
        });
      });
  };

  const getUsersPagination = (pageNo) => {
    axios.get(`http://localhost:8000/users`).then(async (info) => {
      const totalPages = Math.ceil(info.data.length / 6);
      const totalUsers = info.data.length;

      getUsersData(pageNo, totalUsers, totalPages);
    });
  };

  const onCreate = () => {
    getUsersPagination(1);
  };

  return (
    <div className="min-height-100vh mt-5 user">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="user-total">
              Total Users: {pageData.totalUsers}
            </span>
            <CreateUser onCreate={onCreate} />
          </div>
          <div className="col-12">
            <div className="table-wrapper">
              <div className="table">
                <Table
                  columns={columns}
                  data={pageData.rowData}
                  isLoading={pageData.isLoading}
                />
              </div>
            </div>
            <Pagination
              totalRows={pageData.totalUsers}
              pageChangeHandler={setCurrentPage}
              rowsPerPage={6}
              // key={`${sortType} + ${balanceType}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

const formatRowData = (rawData) =>
  rawData.map((info) => ({
    id: info.id,
    first_name: info.first_name,
    last_name: info.last_name,
    email: info.email,
    avatar: <img src={info.avatar} alt="avatar" />,
  }));
