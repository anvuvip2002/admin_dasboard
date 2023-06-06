import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  var showMonth = new Date();
  var displayLastMonth = showMonth.getMonth() - 1;
  console.log(displayLastMonth);
  const [earning, setEarning] = useState([]);
  const loadEarning = async () => {
    axios
      .get("https://uitcinema.devhungops.website/api/statistics/getTotalAllTime")
      .then((response) => {
        setEarning(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {

    loadEarning();
    
  }, []);

  
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Đánh giá doanh thu</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Doanh thu tháng {displayLastMonth}</p>
        <p className="amount">$420</p>
        <p className="desc">
          Đây là doanh thu tháng trước. Không bao gồm tháng hiện tại.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Mục tiêu</div>
            <div className="itemResult positive">
             
              <div className="resultAmount">50 000 000 VNĐ</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Tháng trước</div>
            <div className="itemResult positive">
          
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Featured;
