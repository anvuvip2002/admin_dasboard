// import "./list_user.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable_profile from "../../components/datatable/datatable_profiles/Datatable_profile";

const Profile = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable_profile />
      </div>
    </div>
  );
};

export default Profile;
