import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns,orderRows } from "../../../datatablesource_orders.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable_order = () => {
  const [data, setData] = useState(orderRows);


  const statusColumn = [
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellStatus">
              <div className="statusButton">Complete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Order's Details
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns.concat(statusColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable_order;
