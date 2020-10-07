import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signOut } from '../../utilitron/firebaseFunctions'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dashboard from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon';

import PJBModal from '../BaseComponents/Modal'
import AddJobsPostForm from '../AddJobsPosts/AddJobsPostForm'

import PursuitTitleLogo from '../../assets/media/PursuitWordmarkWhite.png'

import { Button } from '../../styling/theme'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1E1E1E',
        '& *': {
            fontFamily: 'poppins'
        },
        height: '6rem'
    },
    nav: {
        display: 'flex'
    },
    spacer: {
        height: '6rem',
        marginBottom: theme.spacing(1),
        backgroundColor: '#4242EA',
    },
    iconButton: {
        color: '#EDFF00',
        margin: theme.spacing(1),
    },
    icon: {
        fontSize: 50,
        '&:hover': {
            cursor: 'pointer',
            color: '#4242EA',
        },
    },
    brandContainer: {
        fontFamily: 'poppins',
        '&:hover': {
            filter: `drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.25))`,
            cursor: 'pointer',
            '& $title': {
                color: '#4242EA',
            }
        },
    },
    logo: {
        width: '40%',
        height: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '100%',
        },
    },
    title: {
        color: '#000000',
    },
}));

const NavBar = styled.nav`
        background-color: #282828;
        color: #FFFFFF;
    `

const StyledButton = styled(Button)``

const PJBNavBar = () => {

    const history = useHistory();
    const classes = useStyles();

    const [isOpen,setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});     
    }

    const signout = () => {
        signOut()
        history.push("/")
    }


    return(
        <div>
            <div className={classes.spacer}></div>
            <AppBar position={'fixed'} className={classes.root}>
            <Toolbar className={classes.root}>
                <Grid className={classes.brandContainer} container justify='flex-start' alignItems='flex-end' onClick={handleScrollToTop}>
                        <img className={classes.logo} src={PursuitTitleLogo} alt='Pursuit'/>
                </Grid>
                <div className={classes.nav}>
                <Tooltip title="Jobs Board">
                    <NavLink to={"/jobsboard"}>
                        <IconButton className={classes.iconButton} edge="start">
                            <SvgIcon className={classes.icon}>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path 
                                    d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                                    stroke="#FFFFFF"
                                    strokeWidth={0.8}
                                />
                            </SvgIcon>
                        </IconButton>
                    </NavLink>
                </Tooltip>
                <Tooltip title="Add Workshop">
                    <IconButton className={classes.iconButton}  edge="end" aria-label="Add Workshop" onClick={toggleModal}>
                        <SvgIcon className={classes.icon}>
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path 
                                d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                                stroke="#FFFFFF"
                                strokeWidth={1}
                            />
                        
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <NavLink to={"/profile"}>
                        <IconButton className={classes.iconButton}  aria-label="User Account">
                            <SvgIcon className={classes.icon}>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path 
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                    stroke="#FFFFFF"
                                    strokeWidth={1}
                                />
                            </SvgIcon>                            
                        </IconButton>
                    </NavLink>
                </Tooltip>
                {/* <Tooltip title="Sign Out">
                    <IconButton className={classes.iconButton}  edge="end" aria-label="Sign Out" color="inherit" onClick={signout}>
                    <ExitToAppIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip> */}
                </div>
                {/* <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls='mobileHamburgerMenu'
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon style={{ fontSize: 60 }} />
                    </IconButton>
                </div> */}
            </Toolbar>
            </AppBar>
            {/* <MobileNavMenu mobileMoreAnchorEl={mobileMoreAnchorEl} handleMobileMenuClose={handleMobileMenuClose} nav={{navProfile, navJobsboard, signout}} toggleModal={toggleModal}/> */}

            <PJBModal open={isOpen} toggleModal={toggleModal}>
                        <AddJobsPostForm toggleModal={toggleModal}/>
            </PJBModal>

        </div>
    )
}

export default PJBNavBar