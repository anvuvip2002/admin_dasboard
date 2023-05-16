

export const cinemaColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
      {
      field: "address_url",
      headerName: "Address URL",
      width: 200,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noreferrer">{params.value}</a>)
    },
    {
      field: "province",
      headerName: "Province",
      width: 150,
    },
    {
      field: "number_of_rooms",
      headerName: "Number rooms",
      width: 150,
    },
    {
      field: "showtimes",
      headerName: "Show time",
      width: 150,
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={params.row.isActive ? "active" : "passive" }>{params.row.isActive ? "active" : "passive" }</div>
        );
      },
    },
  ];
  export const cinemaRows = [
    {
      "id": 1,
      "name": "CGV ABC",
      "address": "KTX Khu A DHQG HCM",
      "address_url": "https://map.google.com",
      "province": "Dix An, Binh Duong",
      "number_of_rooms": 9,
      "showtimes": ["20:30"],
      "isActive": true
    },
    {
      "id": 2,
      "name": "CGV XYZ",
      "address": "123 Main St",
      "address_url": "https://maps.google.com",
      "province": "Some Province",
      "number_of_rooms": 5,
      "showtimes": ["12:30", "15:30", "18:30", "21:30"],
      "isActive": true
    },
    {
      "id": 3,
      "name": "AMC Theatres",
      "address": "1234 Elm St",
      "address_url": "https://maps.amctheatres.com",
      "province": "Some Other Province",
      "number_of_rooms": 12,
      "showtimes": ["13:00", "16:00", "19:00", "22:00"],
      "isActive": false
    },
    {
      "id": 4,
      "name": "Regal Cinemas",
      "address": "456 Broadway Ave",
      "address_url": "https://maps.regalcinemas.com",
      "province": "Some State",
      "number_of_rooms": 8,
      "showtimes": ["14:00", "17:00", "20:00", "23:00"],
      "isActive": true
    },
    {
      "id": 5,
      "name": "Cineplex",
      "address": "789 Maple St",
      "address_url": "https://maps.cineplex.com",
      "province": "Some Other State",
      "number_of_rooms": 10,
      "showtimes": ["11:00", "14:00", "17:00", "20:00", "23:00"],
      "isActive": true
    },
    {
      "id": 6,
      "name": "MegaPlex Theatres",
      "address": "1010 Oak St",
      "address_url": "https://maps.megaplextheatres.com",
      "province": "Another Province",
      "number_of_rooms": 15,
      "showtimes": ["12:00", "15:00", "18:00", "21:00"],
      "isActive": true
    },
    {
      "id": 7,
      "name": "Cinema City",
      "address": "1111 Pine St",
      "address_url": "https://maps.cinemacity.com",
      "province": "Another State",
      "number_of_rooms": 7,
      "showtimes": ["13:00", "16:00", "19:00", "22:00"],
      "isActive": false
    }
  ];
  

  
  