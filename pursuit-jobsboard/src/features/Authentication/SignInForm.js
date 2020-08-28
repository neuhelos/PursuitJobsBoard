import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useInput } from '../../utilitron/CustomHookery'

import { signIn } from '../../utilitron/firebaseFunctions'


import styled, { ThemeProvider } from 'styled-components'
import { Button } from '../../styling/theme'
import { Composition } from 'atomic-layout'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/Textfield'
import MUIButton from '@material-ui/core/Button'

import Error from "../Error/Error";

const SignInFormTitle = styled.h1`
    font-size: 2rem;
    font-family: poppins;
    color: #000000;
    margin-bottom: 1rem;
`

const StyledButton = styled.button`
    color: black;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 3px;
    justify-center: center;
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '30%',
        '& *': {
            fontFamily: 'poppins',
        },
        margin: theme.spacing(5),
        padding: theme.spacing(2),
        backgroundColor: 'rgba(245, 245, 245, 0.75)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        fontFamily: 'poppins',
        marginBottom: theme.spacing(1),
        backgroundColor: '#FFFFFF',
    },
}));

const SignInForm = () => {

    const classes = useStyles()
    const history = useHistory();
    
    const email = useInput("");
    const password = useInput("");
    const [error, setError] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email.value,password.value);
            history.push("/jobboard")
        } catch (error) {
            email.clearinput()
            password.clearinput()
            setError("Please Enter a Valid Email Address or Email Already Exists");
        }
    };

    return (
        <Paper className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <SignInFormTitle>FIND YOUR FUTURE</SignInFormTitle>
            <TextField className={classes.input} label="Email" id="email" placeholder="Enter Your Email" fullWidth variant="outlined" {...email} required/>
            <TextField className={classes.input} label="Password" id="password" type="password" autoComplete="on" fullWidth placeholder="Enter Your Password" variant="outlined" {...password} required/>
            <StyledButton variant="contained" color="primary" type="submit"> SIGN IN </StyledButton>
        </form>
            {error ? <Error errorMessage={error} /> : null}
        </Paper>
    )
};

export default SignInForm;
