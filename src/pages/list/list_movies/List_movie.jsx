import "./list_movie.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatable_movie from "../../../components/datatable/datatable_movies/Datatable_movie"

const List_movie = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable_movie/>
      </div>
    </div>
  )
}

export default List_movie;