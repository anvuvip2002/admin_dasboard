import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  profileColumns,
  profileRows,
} from "../../../datatablesource_profiles.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable_profile = () => {
  const [data, setData] = useState(profileRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={profileColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable_profile;
