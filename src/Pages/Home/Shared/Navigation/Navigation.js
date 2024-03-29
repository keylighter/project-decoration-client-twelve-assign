import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#578e8a" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Decora
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/home'>
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/exploreproduct'>
                        <Button color="inherit">Explore Products</Button>
                    </NavLink>

                    {
                        !user?.email ?
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                <Button color="inherit">Login</Button>
                            </NavLink> :

                            <Box>



                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>

                                {/* <Typography variant="h6"  >
                                    {user.name}
                                </Typography> */}


                                <Button
                                    onClick={logOut}
                                    color="inherit">Logout</Button>
                            </Box>

                    }

                    {/* {
                        user.email &&
                        <Typography variant="h6"  >
                            {user.name}
                        </Typography>
                    } */}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;