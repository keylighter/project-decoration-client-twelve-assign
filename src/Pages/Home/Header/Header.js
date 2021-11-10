import React from 'react';


import Container from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const backBanner = {
    background: `url(https://images.pexels.com/photos/6444242/pexels-photo-6444242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,

}

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 450,


}

const Header = () => {
    return (
        <Container style={backBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalAlign, textAlign: 'left', }} xs={12} md={6}>
                    <Box sx={{ paddingLeft: 10 }}>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: '#f4f4f4' }}>
                            Get Your Home <br />
                            Eternal Enlightment
                        </Typography>
                        <Typography variant="h5" sx={{ my: 3, fontSize: 15, color: '#d2f1ff' }}>
                            Elevate you life with sprinkles of happiness and light of prospers,
                            spreading pure happiness
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#20af9f' }}>Shop Now</Button>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Header;