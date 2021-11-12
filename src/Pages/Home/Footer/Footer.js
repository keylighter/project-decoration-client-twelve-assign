import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#a7bacc', color: 'white', paddingTop: 7, paddingBottom: 5 }}>
            <Container maxWidth='lg'>
                <Typography variant="h5" textAlign="center" sx={{ fontWeight: 600, color: '#f4f4f4', pb: 3 }}>
                    Decora
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Home
                            </Link>
                        </Box>
                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Contact
                            </Link>
                        </Box>

                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Support
                            </Link>
                        </Box>

                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Privacy Policy
                            </Link>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Accounts</Box>
                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Login
                            </Link>
                        </Box>

                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Register
                            </Link>
                        </Box>



                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Background</Box>
                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                About Us
                            </Link>
                        </Box>

                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Company Background
                            </Link>
                        </Box>

                        <Box sx={{ fontWeight: 600 }}>
                            <Link to='/' color="inherit" sx={{ textDecotation: 'none' }}>
                                Board Of Directors
                            </Link>
                        </Box>

                    </Grid>

                </Grid>

                <Box textAlign="center" sx={{ pt: 2, pb: 2 }}>
                    Decora &copy; {new Date().getFullYear()}
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;