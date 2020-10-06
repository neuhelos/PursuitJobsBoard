import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signOut } from '../../utilitron/firebaseFunctions'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dashboard from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip'

import PJBModal from '../BaseComponents/Modal'
import AddJobsPostForm from '../AddJobsPosts/AddJobsPostForm'

import { Button } from '../../styling/theme'


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(90deg, hsla(238, 34%, 32%, 1) 0%, hsla(333, 100%, 53%, 1) 50%, hsla(33, 94%, 57%, 1) 100%)',
        '& *': {
                fontFamily: 'audiowide'
        },
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        fontFamily: 'audiowide',
        '&:hover': {
            cursor: 'pointer',
            color: '#F89B29',
            filter: `drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.25))`,
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //   display: 'block',
        // },
    }
    },
    spacer: {
        height: '6rem',
        width: '100%',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        },
    },
    iconButton: {
        margin: theme.spacing(1),
        //filter: 'drop-shadow(1px 2px 3px #36386D)'
        },
        sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    badge: {
        height: '2rem',
        minWidth: '2rem',
        fontSize: '1.5rem',
        background: '#36386D',
        border: 'solid 2px #FFFFFF'
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

    const [NavButton, setNavButton] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const handleNavButton = () => {
        setNavButton(!NavButton)
    }
    
    const navProfile = () => {
        //handleMobileMenuClose()
        if(window.location.pathname === `/profile`){
            history.push(`/profile`)
            history.goBack()
        }
        history.push(`/profile`)
    }

    const navJobsboard = () => {
        //handleMobileMenuClose()
        if(window.location.pathname === `/jobsboard`){
            history.push(`/jobsboard`)
            history.goBack()
        }
        history.push(`/jobsboard`)
    }

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
        <NavBar>
            
            { NavButton ? <NavLink to={"/jobboard"}><StyledButton onClick={handleNavButton}>HOME</StyledButton></NavLink> : <NavLink to={"/profile"}><StyledButton onClick={handleNavButton}>PROFILE</StyledButton></NavLink> }
            <StyledButton onClick={toggleModal}>ADD JOB POST</StyledButton>
            <StyledButton onClick={signout}>SIGN OUT</StyledButton>

        <>
            <div className={classes.spacer}>
            <div className={classes.spacer}></div>
            <AppBar position={'fixed'} className={classes.root}>
            <Toolbar>
                <Typography className={classes.title} variant="h2" noWrap onClick={handleScrollToTop}>
                WeRise
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <Tooltip title="Dashboard">
                    <IconButton className={classes.iconButton} edge="start" color="inherit" onClick={navJobsboard}>
                        <Dashboard style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Workshop">
                    <IconButton className={classes.iconButton}  edge="end" aria-label="Add Workshop" onClick={toggleModal} color="inherit" >
                    <AddBoxIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <IconButton className={classes.iconButton}  aria-label="account of current user" onClick={navProfile} color="inherit" >
                    <AccountCircle style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Sign Out">
                    <IconButton className={classes.iconButton}  edge="end" aria-label="Sign Out" color="inherit" onClick={signout}>
                    <ExitToAppIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
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

            <PJBModal isOpen={isOpen} toggleModal={toggleModal}>
                        <AddJobsPostForm toggleModal={toggleModal}/>
            </PJBModal>

    </div>
    </>


        </NavBar>
    )
}

export default PJBNavBar