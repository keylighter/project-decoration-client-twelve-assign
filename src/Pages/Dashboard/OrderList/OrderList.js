import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const OrderList = () => {

    const { user, } = useAuth();
    const [orderList, setOrderList] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user.email}`, {})
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div>
            <h2> My Orders: {orderList.length}</h2>


            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>

                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((orderL) => (
                            <TableRow
                                key={orderL._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{orderL.userName
                                }</TableCell>


                                <TableCell align="right">{orderL.productName}</TableCell>
                                <TableCell align="right">Pending</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    )
}


export default OrderList;