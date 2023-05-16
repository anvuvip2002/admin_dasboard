export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "moviename",
      headerName: "Movie's name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.moviename}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 230,
    },
  
    {
      field: "time",
      headerName: "Time",
      width: 100,
    },
    {
        field: "seat",
        headerName: "Seat",
        width: 100,
    },

    {
        field: "room",
        headerName: "Room's name",
        width: 100,
    },

    {
        field: "ciname",
        headerName: "Ciname's name",
        width: 100,
    },

    {
        field: "price",
        headerName: "Price",
        width: 100,
    },

    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      moviename: "Doctor Strange",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "waiting",
      date: "11/02/2023",
      time: "17:00",
      room: "R1",
      ciname: "CGV Tân Bình",
      price: 145000,
    },
    {
      id: 2,
      moviename: "Mario Maurer",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "22/03/2023",
      status: "waiting",
      time: "20:00",
      room: "R5",
      ciname: "CGV Thủ Đức",
      price: 90000,
    },
    {
      id: 3,
      moviename: "Your Name",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "30/03/2023",
      status: "cancelled",
      time: "20:00",
      room: "R3",
      ciname: "CGV Thủ Đức",
      price: 139000,
    },
    {
      id: 4,
      moviename: "Lật mặt 6",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "10/04/2023",
      status: "completed",
      time: "15:00",
      room: "R2",
      ciname: "CGV Tân Bình",
      price: 120000,
    },
    {
      id: 5,
      moviename: "Fast X",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "30/04/2023",
      status: "completed",
      time: "22:00",
      room: "R2",
      ciname: "CGV Thủ Đức",
      price: 145000,
    },
  ];
  