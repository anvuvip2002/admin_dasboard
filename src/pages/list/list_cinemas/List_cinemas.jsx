import "./List_cinemas.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatable_cinemas from "../../../components/datatable/datatable_cinemas/Datatable_cinemas"

const List_cinemas = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable_cinemas/>
      </div>
    </div>
  )
}

export default List_cinemas;