import * as React from 'react';

import { Grid } from '@mui/material';

import OrderList from '../OrderList/OrderList'


const DashboardHome = () => {

    // const [date, setDate] = React.useState(new Date());

    return (
        <Grid textAlign='center' container spacing={2}>

            <Grid item xs={8} >
                <OrderList></OrderList>
            </Grid>

        </Grid>
    )

}

export default DashboardHome;