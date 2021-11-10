import React, { useState } from 'react';

import { Container, Grid, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Navigataion from '../../Home/Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //
        const newLoginData = { ...loginData };

        //newLoginData[field] - value will be placed on this field/name */
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <Box>
            <Navigataion></Navigataion>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                    <Typography variant="h6" gutterBottom>Login</Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: 2 / 4, m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: 2 / 4, m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <Button
                            sx={{ width: 2 / 4, m: 1, backgroundColor: '#578e8a' }}
                            variant='contained'
                            type='submit'
                        >
                            Login
                        </Button>
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text">New User?<span>Register Here</span></Button>
                        </NavLink>
                        <br />
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button
                        sx={{ width: 1 / 4, m: 1, backgroundColor: '#578e8a' }}
                        variant='contained'
                        type='submit'
                        onClick={handleGoogleSignIn}
                    >
                        Google SignIn
                    </Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;