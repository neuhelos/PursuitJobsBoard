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
        '& *': {
            fontFamily: 'poppins'
        },
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        fontFamily: 'poppins',
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
        <div className={classes.spacer}>
            <div className={classes.spacer}></div>
            <AppBar position={'fixed'} className={classes.root}>
            <Toolbar>
                <Typography className={classes.title} variant="h2" noWrap onClick={handleScrollToTop}>
                    Pursuit Jobs Board
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <Tooltip title="Dashboard">
                    <NavLink to={"/jobsboard"}>
                        <IconButton className={classes.iconButton} edge="start" color="inherit">
                            <Dashboard style={{ fontSize: 50 }} />
                        </IconButton>
                    </NavLink>
                </Tooltip>
                <Tooltip title="Add Workshop">
                    <IconButton className={classes.iconButton}  edge="end" aria-label="Add Workshop" onClick={toggleModal} color="inherit" >
                        <AddBoxIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <NavLink to={"/jobsboard"}>
                        <IconButton className={classes.iconButton}  aria-label="User Account" color="inherit" >
                            <AccountCircle style={{ fontSize: 50 }} />
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

            <PJBModal isOpen={isOpen} toggleModal={toggleModal}>
                        <AddJobsPostForm toggleModal={toggleModal}/>
            </PJBModal>

        </div>
    )
}

export default PJBNavBar