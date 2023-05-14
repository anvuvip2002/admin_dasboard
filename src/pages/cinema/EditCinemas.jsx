import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./EditCinemas.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { cinemaRows } from "../../datatablesource_cinemas";




const EditCinemas = () => {
  const [data, setData] = useState(cinemaRows);
  const { id } = useParams();
  const index = data.findIndex((item) => item.id === id);
  console.log(id);
  return (
   <div> 
        <p>{index.id}</p>

  </div>
  );
};

export default EditCinemas;
