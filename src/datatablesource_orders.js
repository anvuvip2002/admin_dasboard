export const orderColumns = [
    { field: "id", headerName: "ID", width: 20 },
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
      width: 100,
    },
  
    {
      field: "time",
      headerName: "Time",
      width: 80,
    },
    {
        field: "seat",
        headerName: "Seat",
        width: 50,
    },

    {
        field: "room",
        headerName: "Room's name",
        width: 100,
    },

    {
        field: "ciname",
        headerName: "Ciname's name",
        width: 120,
    },

    {
        field: "price",
        headerName: "Price",
        width: 80,
    },

    {
      field: "status",
      headerName: "Status",
      width: 100,
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
      moviename: "Doctor Strange",
      img: "https://cdn.galaxycine.vn/media/2022/4/27/300x450_1651029994834.jpg",
      status: "waiting",
      date: "11/02/2023",
      time: "17:00",
      seat: "E1",
      room: "R1",
      ciname: "CGV Tân Bình",
      price: 145000,
    },
    {
      id: 2,
      moviename: "Mario Maurer",
      img: "https://medianews.thieunien.vn/uploads/2023/03/07/5-bo-phim-hoat-hinh-duoc-mong-cho-nhat-2023-the-super-mario-dau-voi-ninja-rua_1678176663.jpg",
      date: "22/03/2023",
      status: "waiting",
      time: "20:00",
      seat: "H2",
      room: "R5",
      ciname: "CGV Thủ Đức",
      price: 90000,
    },
    {
      id: 3,
      moviename: "Your Name",
      img: "https://upload.wikimedia.org/wikipedia/vi/b/b3/Your_Name_novel.jpg",
      date: "30/03/2023",
      status: "cancelled",
      time: "20:00",
      seat: "A4",
      room: "R3",
      ciname: "CGV Thủ Đức",
      price: 139000,
    },
    {
      id: 4,
      moviename: "Lật mặt 6",
      img: "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/l/m/lm6_2x3_layout.jpg",
      date: "10/04/2023",
      status: "completed",
      time: "15:00",
      seat: "G3",
      room: "R2",
      ciname: "CGV Tân Bình",
      price: 120000,
    },
    {
      id: 5,
      moviename: "Fast X",
      img: "https://i.imgur.com//gr9KBOV.jpg",
      date: "30/04/2023",
      status: "completed",
      time: "22:00",
      seat: "D9",
      room: "R2",
      ciname: "CGV Thủ Đức",
      price: 145000,
    },
  ];
  