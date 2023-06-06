




import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import { useState, useEffect } from 'react';

import styles from './datatable_user.module.css';
import Button from 'react-bootstrap/Button';
import ReactPaginate from "react-paginate";

const Datatable_user = () => {
 
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
    loadSVT();
  }, []);

  const loadSVT = async () => {
    axios
      .get('https://uitcinema.devhungops.website/api/user')
      .then((response) => {
        setTableDataSVT(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function lockAccount(id) {
    
  }

  return (
    <div className={styles.servicePage}>
      <div className={styles.datatable}>
        <div className={styles.datatableTitle}>
          <b>Danh Sách Người Dùng</b>
         
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  STT
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tên 
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Email
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  SDT
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Ngày Sinh
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Giới Tính
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Lựa Chọn
                  
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
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.gender} 
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    <div className={styles.cellAction}>
             
                      <Button
                        onClick={() => lockAccount(tableDataSVT.svt_id)}
                        className={styles.deleteButton}
                      >
                        Khóa
                      </Button>{' '}
                    </div>
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
  );
};

export default Datatable_user;
