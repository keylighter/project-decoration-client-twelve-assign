import { Box, } from '@mui/system';
import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth/useAuth';
import Navigation from '../../Home/Shared/Navigation/Navigation'



const PlaceOrder = () => {

    const { user } = useAuth();

    const primaryInfo = { userName: user.displayName, email: user.email, phone: '', productName: 'Classic Neon' };

    const [orderInfo, setOrderInfo] = useState(primaryInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
        e.preventDefault();
    };

    const handleOrderSubmit = e => {
        const order = {
            ...orderInfo,

        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order is Taken');
                }
            });
        e.preventDefault();
    }


    return (
        <Box>
            <Navigation></Navigation>
            <Box sx={{ pt: 8, pb: 5 }}>

                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Place Your Order
                </Typography>
                <Container>

                    <form onSubmit={handleOrderSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <TextField

                                    sx={{ width: '35%', m: 1 }}
                                    // label=""
                                    id="outlined-size-small"
                                    name='userName'
                                    defaultValue={user.displayName}
                                    size="small"
                                    onBlur={handleOnBlur}
                                />



                            </Grid>
                            <Grid item xs={12}>

                                <TextField

                                    sx={{ width: '35%', m: 1 }}
                                    // label=""
                                    id="outlined-size-small"
                                    name='productName'
                                    defaultValue='ex- Classic Neon'
                                    size="small"
                                    onBlur={handleOnBlur}
                                />


                            </Grid>
                            <Grid item xs={12}>

                                <TextField

                                    sx={{ width: '35%', m: 1 }}
                                    // label=""
                                    id="outlined-size-small"
                                    name='email'
                                    defaultValue={user.email}
                                    size="small"
                                    onBlur={handleOnBlur}
                                />

                            </Grid>
                            <Grid item xs={12}>

                                <TextField

                                    sx={{ width: '35%', m: 1 }}
                                    // label=""
                                    id="outlined-size-small"
                                    name='phone'
                                    defaultValue='ex:01....'
                                    size="small"
                                    onBlur={handleOnBlur}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Button type='submit' style={{ backgroundColor: '#6fb4af', marginTop: '20px', padding: "10px 40px" }} variant="contained">Order</Button>
                            </Grid>
                        </Grid>
                        <br />

                    </form>
                </Container>
            </Box>
        </Box>
    );
};

export default PlaceOrder;