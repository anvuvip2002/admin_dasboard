

//import { userRows } from './datatablesource_users';
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Movies",
    width: 320,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "director",
    headerName: "director",
    width: 150,
  },

  {
    field: "rated",
    headerName: "rated",
    width: 320,
  },

  {
    field: "duration",
    headerName: "duration(m)",
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
// let userRows =[]
// function changeData()
// {
// data.map((item) =>{
// userRows.push(
// {
//   id: item._id,
//   movie_name: item.movie_name,
//   img: item.image,
//   status: "passive",
//   directors: item.Directors,
//   duration: item.Duration,
//   rated: item.Rated
//   })
//  },)
// }
// changeData()
  
  // {
  //   id: 1,
  //   movie_name: "Breaking Bad",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   status: "active",
  //   Directors: "John Wick",
  //   Duration: 105,
  //   Rated: "C13 - KHÁN GIẢ TRÊN 13 TUỔI",
  // },
  // {
  //   id: 2,
  //   movie_name: "Jamie Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Directors: "2snow@gmail.com",
  //   Duration: 105,
  //   status: "passive",
  //   Rated: "C13 - KHÁN GIẢ TRÊN 13 TUỔI",
  // },
  // {
  //   id: 3,
  //   movie_name: "Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Directors: "3snow@gmail.com",
  //   status: "pending",
  //   Rated: "C13 - KHÁN GIẢ TRÊN 13 TUỔI",
  //   Duration: 105,
  // },
  // {
  //   id: 4,
  //   movie_name: "Stark",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "4snow@gmail.com",
  //   status: "active",
  //   age: 16,
  // },
  // {
  //   id: 5,
  //   movie_name: "Targaryen",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "5snow@gmail.com",
  //   status: "passive",
  //   age: 22,
  // },
  // {
  //   id: 6,
  //   movie_name: "Melisandre",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "6snow@gmail.com",
  //   status: "active",
  //   age: 15,
  // },
  // {
  //   id: 7,
  //   movie_name: "Clifford",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "7snow@gmail.com",
  //   status: "passive",
  //   age: 44,
  // },
  // {
  //   id: 8,
  //   movie_name: "Frances",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "8snow@gmail.com",
  //   status: "active",
  //   age: 36,
  // },
  // {
  //   id: 9,
  //   movie_name: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "snow@gmail.com",
  //   status: "pending",
  //   age: 65,
  // },
  // {
  //   id: 10,
  //   movie_name: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   Code: "snow@gmail.com",
  //   status: "active",
  //   age: 65,
  // },

