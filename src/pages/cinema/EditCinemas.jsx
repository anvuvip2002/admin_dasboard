import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./EditCinemas.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cinemaRows } from "../../datatablesource_cinemas";

const EditCinemas = () => {
  const [data, setData] = useState(cinemaRows);
  const { id } = useParams();
  const cinema = data.find((item) => item.id == id);
  return (  
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <form action="/cinemas/edit" method="POST">
        <table>
          <tr>
            <td><label for="name">Name:</label></td>
            <td><input type="text" id="name" name="name" placeholder={cinema.name}/></td>
          </tr>
          <tr>
            <td><label for="address">Address:</label></td>
            <td><input type="text" id="address" name="address" placeholder={cinema.address}/></td>
          </tr>
          <tr>
            <td><label for="address_url">Address URL:</label></td>
            <td><input type="url" id="address_url" name="address_url" placeholder={cinema.address_url}/></td>
          </tr>
          <tr>
            <td><label for="province">Province:</label></td>
            <td><input type="text" id="province" name="province" placeholder={cinema.province}/></td>
          </tr>
          <tr>
            <td><label for="number_of_rooms">Number of Rooms:</label></td>
            <td><input type="number" id="number_of_rooms" name="number_of_rooms" placeholder={cinema.number_of_rooms}/></td>
          </tr>
          <tr>
            <td><label for="showtimes">Showtimes:</label></td>

          </tr>
          <tr>
            <td colspan="2"><input type="submit" value="Save Changes" /></td>
          </tr>
        </table>
</form>

        
      </div>
    </div>
    
  );
};

export default EditCinemas;

