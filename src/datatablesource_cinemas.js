import axios from "axios";

// export const cinemaColumns = [
//     { field: "id", headerName: "ID", width: 70 },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 200,
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       width: 150,
//     },
//       {
//       field: "address_url",
//       headerName: "Address URL",
//       width: 200,
//       renderCell: (params) => (
//         <a href={params.value} target="_blank" rel="noreferrer">{params.value}</a>)
//     },
//     {
//       field: "number_of_rooms",
//       headerName: "Number rooms",
//       width: 150,
//     },
//     {
//       field: "province",
//       headerName: "Province",
//       width: 150,
//     },
    
//     {
//       field: "showtimes",
//       headerName: "Show time",
//       width: 150,
//     },
//     {
//       field: "isActive",
//       headerName: "Status",
//       width: 160,
//       renderCell: (params) => {
//         return (
//           <div className={params.row.isActive ? "active" : "passive" }>{params.row.isActive ? "active" : "passive" }</div>
//         );
//       },
//     },
//   ];

export const cinemaColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "address", headerName: "Address", width: 250 },
  {
    field: "address_url",
    headerName: "Address URL",
    width: 350,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noreferrer">
        {params.value}
      </a>
    ),
  },
  { field: "number_of_rooms", headerName: "Number of Rooms", width: 150 }
];
  
  export let cinemaRows = [];  
const fetchCinemaData = () => {
  axios.get("http://20.214.254.141:3000/cinema")
    .then(response => {
      cinemaRows = response.data;
      console.log(cinemaRows);
    })
    .catch(error => {
      console.error('Error fetching cinema data:', error);
    });
};

fetchCinemaData();