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
        //backgroundColor: '#4543E7',
        backgroundColor: '#282828'
    },
    logoContainer: {
        padding: theme.spacing(3)
    },
    container: {
        margin: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        lineHeight: '3rem'
    },
    image: {
        width: '50%',
        height: '50%'
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
        <div>
        <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.title}>
            <Grid className={classes.logoContainer} container item display='flex' justify='center' alignItems='flex-end' xs={7}>
                    <Typography variant="h4" className={classes.title}>
                        <span><img className={classes.image} src={PursuitTitleLogo} alt='Pursuit'/></span>
                        JOBS BOARD
                    </Typography>
            </Grid>
            <Grid className={classes.container} container item display='flex' justify='flex-end' alignItems='center' xs={5}>
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
