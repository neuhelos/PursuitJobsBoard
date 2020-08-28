import React, {useState} from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { signIn } from '../../utilitron/firebaseFunctions'

import SignUpForm from '../Authentication/SignUpModal'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonMUI from '@material-ui/core/Button';
import Modal from '../BaseComponents/Modal'
import Grid from '@material-ui/core/Grid'


import { Button } from '../../styling/theme'

import PursuitTitleLogo from '../../assets/media/PursuitTitleLogo.png'

const StyledButton = styled(Button)`
    line-height: 1.5rem;
`


    const useStyles = makeStyles((theme) => ({
    root: {
        '& *': {
            fontFamily: 'poppins'
        },
        backgroundColor: '#4543E7',
    },
    logoContainer: {
        width: '50%',
        padding: theme.spacing(3)
    },
    title: {
        flexGrow: 1,
        lineHeight: '1rem'
    },
    image: {
        width: '60%',
        height: '60%'
    }
}));


const PublicNavBar = ( ) => {

    const history = useHistory()
    const classes = useStyles();

    const handleGuestLogin = async () => {
        await signIn("guest@nilber.dev","nilber");
        history.push("/jobboard")
    }

    const [isOpen,setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <Grid className={classes.logoContainer} container item display='flex' justify='center' alignItems='flex-end' xs={6}>
                    <img className={classes.image} src={PursuitTitleLogo} alt='Pursuit'/>
                    <Typography variant="h6" className={classes.title}>JOBS BOARD</Typography>
                </Grid>
                <Grid container item display='flex' justify='flex-end' alignItems='center' xs={6}>
                    <StyledButton onClick={toggleModal}>CREATE AN ACCOUNT</StyledButton>
                    <StyledButton onClick={handleGuestLogin}>GUEST LOGIN</StyledButton>
                </Grid>
            </Toolbar>
            </AppBar>

            <Modal isOpen={isOpen} toggleModal={toggleModal}>
                <SignUpForm toggleModal={toggleModal} />
            </Modal>

        </div>
    )
}

export default PublicNavBar
