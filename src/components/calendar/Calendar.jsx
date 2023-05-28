import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './Calendar.module.css'
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import { useState, useEffect } from 'react';
const useStyles = makeStyles({
  paper: {
    overflowX: "scroll",
    width: "250px",
    overflowY:"scroll",

  }
});
const Calendar = () => {

  const classes = useStyles();
  const MenuProps = {
    autoFocus: false
  };
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  //Province
  const [province, setProvince] = useState();
  const [provinceSelected, setProvinceSelected] = useState();

  const loadProvince = async () => {
    axios
      .get('http://20.214.254.141:3000/province?filter=notnull')
      .then((response) => {
        setProvince(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [listProvince, setListProvince] = React.useState('');
  
  const handleChangeProvince = (event) => {
    if (province.data.length===0 || !province.data)
    return
    const curProvince = province?.data?.filter(item =>item.id === event.target.value)[0]
    setProvinceSelected(curProvince);

  };
/////
  //Cinema

  const [listCinema, setListCinema] = React.useState('');
  const handleChangeCinema = (event) => {
    setListCinema(event.target.value);
  };

///////
 // Movie
  const [movie, setMovie] = useState([]);


  const loadMovie = async () => {
    axios
      .get('http://20.214.254.141:3000/movie')
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [listMovie, setListMovie] = React.useState('');
  const handleChangeMovie = (event) => {
    setListMovie(event.target.value);
  };


/////////
  const [tableDataSVT, setTableDataSVT] = useState([]);

  //Pagination
  const [svtPerPage, setSvtPerPage] = useState(7)
  const [CsvtPerPage, setCSvtPerPage] = useState(1)
  const numOfToTalPages = Math.ceil(tableDataSVT.data?.length / svtPerPage);
  // const pages = [...Array(numOfToTalPages + 1).keys()].slice(1);
  const indexOfLastSVT = CsvtPerPage*svtPerPage;
  const indexOfFirstSVT = indexOfLastSVT - svtPerPage;
  const visibleSVT = tableDataSVT.data?.slice(indexOfFirstSVT, indexOfLastSVT)

  

  const changePage = ({ selected }) => {
    setCSvtPerPage(selected + 1);
  };

  useEffect(() => {
    loadProvince();
    //loadCinema();
    loadMovie();
  }, []);
////////////
  return (
    <div>
    <div style={{display:"flex", margin:"20px"}}>
      <div style={{marginRight:"45px"}}>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Tỉnh</InputLabel>
        <Select
          MenuProps={{
            ...MenuProps,
            classes: {
              paper: classes.paper
            }
          }}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          
          label="listProvince *"
          onChange={handleChangeProvince}
        >
         
          {province?.data?.length > 0 && province?.data?.map((province, index) => (
            <MenuItem value={province.id}>{province.name}</MenuItem>
               
          ))}

        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>


      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Rạp</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          
          maxMenuHeight={250}
          label="listCinema *"
          onChange={handleChangeCinema}
        >
           {provinceSelected?.cinemas?.length > 0 && provinceSelected?.cinemas?.map((cinema, index) => (
            <MenuItem value={cinema.id}>{cinema.name}</MenuItem>
               
          ))}
         
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>


      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Phim</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          
          label="Movie *"
          onChange={handleChangeMovie}
        >
          {movie.length > 0 && movie.map((movie, index) => (
            <MenuItem value={movie.id}>{movie.name}</MenuItem>
               
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      </div>
      <div  style={{display:"flex", justifyContent:"center", float:"right"}}>
        <div className={styles.myDate}>
          <label>Ngày Chiếu</label>
          <input
            type="date"
            name="releaseDate"/>
        </div>
        <div className={styles.buttonUpdate}>
        <button
                type="submit"
                // onClick={handleSubmit}
                className={styles.myButton}
              >
                Thêm
              </button>
        </div>
      </div>
      
    </div>
    <div className={styles.servicePage}>
      <div className={styles.datatable}>
        <div className={styles.datatableTitle}>
          <b>Danh Sách Lịch Chiếu Từng Rạp</b>
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
              <TableCell className={styles.tableCell + ' text-center'}>
                  STT
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Rạp 1
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Rạp 2
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Rạp 3
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Rạp 4
                </TableCell>{' '}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleSVT?.length > 0 && visibleSVT?.map((tableDataSVT, index) => (
                
                <TableRow
                  key={tableDataSVT.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {index + 1}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'} style={{display:"flex"}}>
                    {tableDataSVT.name}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.email}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.phone} 
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.birthDay} 
                  </TableCell>{' '}
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
        <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={numOfToTalPages}
        onPageChange={changePage}
        containerClassName={styles.myContainerPagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink} 
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        activeClassName={styles.active}
       
      />
      </div>
    </div>
    </div>
  );
};

export default Calendar;