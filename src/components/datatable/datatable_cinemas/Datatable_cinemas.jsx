import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { cinemaRows,cinemaColumns } from "../../../datatablesource_cinemas.js";
import { Link } from "react-router-dom";
import { useState } from "react";
const Datatable_cinemas = () => {
 
  const [data, setData] = useState(cinemaRows);

  const handleAction = (id) => {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newData = [...data]; 
      newData[index].isActive = !newData[index].isActive; 
      setData(newData); 
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={() => handleAction(params.row.id)} >{params.row.isActive ? "🔒": "🔓"}</button>
            <Link to={`${params.row.id}/edit`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Cinema
        <Link to="/cinemas/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={cinemaColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        hideFooterRowCount
      />
    </div>
  );
};

export default Datatable_cinemas;
