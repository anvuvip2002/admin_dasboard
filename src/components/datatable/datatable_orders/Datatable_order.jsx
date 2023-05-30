import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "../../../datatablesource_orders.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable_order = () => {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/orders/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Order's Details
        <Link to="/orders/new" className="link">
          
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable_order;
