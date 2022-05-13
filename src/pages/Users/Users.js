import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";

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
            className="btn btn-primary mr-1"
            onClick={() => console.log(original)}
          >
            View To Do
          </button>
          <button
            className="btn btn-primary mr-1"
            onClick={() => navigate(`/users/${original.id}`)}
          >
            View User
          </button>
          <button
            className="btn btn-warning mr-1"
            onClick={() => console.log(original)}
          >
            Edit User
          </button>
          <button
            className="btn btn-danger mr-1"
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
    totalOrders: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage);
  }, [currentPage]);

  const getData = (pageNo) => {
    axios.get(`https://reqres.in/api/users?page=${pageNo}`).then((info) => {
      const data = info.data.data;
      const totalPages = Math.ceil(info.data.total / 10);
      const totalOrders = info.data.total;

      setPageData({
        isLoading: false,
        rowData: formatRowData(data),
        totalPages,
        totalOrders,
      });

      console.log(info);
    });
  };

  return (
    <div className="min-height-100vh mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">Users</div>
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
              totalRows={pageData.totalOrders}
              pageChangeHandler={setCurrentPage}
              rowsPerPage={10}
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
