import { useState, useEffect } from "react";
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from 'react-bootstrap/Button';
import Paper from '@mui/material/Paper';
import ReactPaginate from "react-paginate";

import styles from './Datatable_order.module.css';

const Datatable_order = () => {

    // get data from api
    const [dataOrder, setDataOrder] = useState([]);

    // update fetch data from api
    useEffect(() => {
        loadOrder();
    }, []);

    // create valiable
    const [TicketPerPage, setTicketPerPage] = useState(6)
    const [CTicketPerPage, setCTicketPerPage] = useState(1)
    const numOfToTalPages = Math.ceil(dataOrder?.length / TicketPerPage)
    const indexOfLastTicket = CTicketPerPage * TicketPerPage;
    const indexOfFirstTicket = indexOfLastTicket - TicketPerPage;
    const visibleTicket = dataOrder?.slice(indexOfFirstTicket, indexOfLastTicket)

    // load list order from api
    const loadOrder = async () => {
        axios
            .get('https://uitcinema.devhungops.website/api/ticket')
            .then((respone) => {
                setDataOrder(respone.data);
            })
            .catch((error) => {
                console.log((error));
            });
    }

    // tạo hàm chuyển trang
    const changePage = ({ selected }) => {
        setCTicketPerPage(selected + 1);
    };

    return (
        <div className={styles.datatable}>
            <div className={styles.datatableTitle}>
                <b>Danh sách hóa đơn</b>
            </div>
            <div className="dataTableOrder">
                <TableContainer component={Paper} className={styles.table}>
                    <Table sx={{ minWidth: 1200 }} aria-label="a denses table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    STT
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Tên phim
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Chỗ ngồi
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Tiền vé
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Bắp + nước
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Tổng tiền hóa đơn
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Phương thức thanh toán
                                </TableCell>{' '}
                                <TableCell className={styles.tableCell + ' text-center'}>
                                    Trạng thái
                                </TableCell>{' '}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleTicket?.length > 0 && visibleTicket?.map((dataOrder, index) => (

                                <TableRow
                                    key={dataOrder.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {index + 1}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'} style={{ display: "flex" }}>
                                        {dataOrder.movieName}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {dataOrder.seat.join(", ")}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {dataOrder.totalTicket?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {dataOrder.totalFood?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {(dataOrder.totalTicket + dataOrder.totalFood)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        {dataOrder.paymentMethod}
                                    </TableCell>{' '}
                                    <TableCell className={styles.tableCell + ' text-center'}>
                                        <div className={styles.cellAction}>
                                            <Button disabled> 
                                                Đã thanh toán
                                            </Button>{' '}
                                        </div>
                                    </TableCell>{' '}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* // Thêm chuyển trang */}
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
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
    );

}

export default Datatable_order;
