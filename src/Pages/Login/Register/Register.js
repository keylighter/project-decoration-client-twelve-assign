import React, { useState } from 'react';
import { Box } from '@mui/system';

import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';



const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, isLoading, registerUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;

        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);

    }

    const handleRegister = e => {
        if (registerData.password !== registerData.passwordretype) {
            alert('password is not matched');
            return;
        }

        registerUser(registerData.email, registerData.password, registerData.name, location, history);
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }



    return (
        <Box >

            <Grid container spacing={2} sx={{ mb: 8 }} >
                <Grid item xs={12} md={12} sx={{ textAlign: "center " }}>
                    <Typography
                        sx={{ mt: 8, pt: 8 }}
                        variant="h6" gutterBottom>
                        Register
                        {
                            !isLoading &&
                            <form onSubmit={handleRegister}>
                                <TextField
                                    sx={{ width: 2 / 4, m: 1 }}
                                    name='name'
                                    onBlur={handleOnBlur}
                                    id="standard-basic"
                                    label="Name"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: 2 / 4, m: 1 }}
                                    name='email'
                                    onBlur={handleOnBlur}
                                    id="standard-basic" label="Email" variant="standard" />

                                <TextField
                                    sx={{ width: 2 / 4, m: 1 }}
                                    type='password'
                                    name='password'
                                    onBlur={handleOnBlur}
                                    id="standard-basic" label="Password" variant="standard" />
                                <TextField
                                    sx={{ width: 2 / 4, m: 1 }}
                                    type='password'
                                    name='passwordretype'
                                    onBlur={handleOnBlur}
                                    id="standard-basic" label="Retype Password " variant="standard" />


                                <Button
                                    sx={{ width: 2 / 4, m: 1, backgroundColor: '#578e8a' }}
                                    variant='contained'
                                    type='submit'
                                >
                                    Register
                                </Button>
                                <br />

                                <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                    <Button variant="text">Already Registered? <span>Please Login</span></Button>
                                </NavLink>

                            </form>
                        }
                        <br />
                        {
                            isLoading &&

                            <CircularProgress />


                        }
                        {
                            user.email &&

                            <Alert severity="success">Registration Completed!</Alert>

                        }
                        {
                            authError &&
                            <Alert severity="error">Registration is not done!</Alert>

                        }

                        <Button
                            sx={{ width: 1 / 4, mt: 1, mb: 5, backgroundColor: '#578e8a' }}
                            variant='contained'
                            type='submit'
                            onClick={handleGoogleSignIn}
                        >
                            Google SignIn
                        </Button>
                    </Typography>
                </Grid>

            </Grid>
        </Box  >
    );
};

export default Register;