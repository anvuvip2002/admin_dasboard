export const orderColumns = [
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
      },{
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
  export const orderRows = [
    {
      id: 1,
      moviename: "Big Mouse",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "paid",
      date: "10/04/2023",
      time: "19:00",
      seat: "C8",
      room: "R2",
      ciname: "CGV Tân Bình",
      price: 90000,
    },
    {
      id: 2,
      moviename: "Your name",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",date: "2snow@gmail.com",
      status: "paid",
      date: "30/04/2023",
      time: "16:00",
      seat: "H2",
      room: "V5",
      ciname: "CGV Bình Thạnh",
      price: 145000,
    },
    {
      id: 3,
      moviename: "Doctor Strange 2",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "23/03/2023",
      status: "waiting",
      time: "17:00",
      seat: "D4",
      room: "R1",
      ciname: "CGV Tân Bình",
      price: 120000,
    },
    {
      id: 4,
      moviename: "Mario Maurer",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "paid",
      date: "11/03/2023",
      time: "19:30",
      seat: "E7",
      room: "R4",
      ciname: "CGV Thủ Đức",
      price: 90000,
    },
    {
      id: 5,
      moviename: "Lật mặt 6",
      img: "https://imtimes.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "waiting",
      date: "26/02/2023",
      time: "20:00",
      seat: "F2",
      room: "R5",
      ciname: "CGV Thủ Đức",
      price: 90000,
    },
  ];