import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signOut } from '../../utilitron/firebaseFunctions'

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

const NavBar = styled.nav`
        background-color: #282828;
        color: #FFFFFF;
    `

const StyledButton = styled(Button)``

const PJBNavBar = () => {

    const history = useHistory();

    const [NavButton, setNavButton] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const handleNavButton = () => {
        setNavButton(!NavButton)
    }
    
    const toggleModal = () => {
        setIsOpen(!isOpen)
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
                    <IconButton className={classes.iconButton} edge="start" color="inherit" onClick={navDashboard}>
                        <Dashboard style={{ fontSize: 50 }} />
                    </IconButton>
                </Tooltip>
                    <Tooltip title="Instant Messaging">
                    <IconButton className={classes.iconButton}  aria-label="unread messages" color="inherit" onClick={navMessaging} >
                    <Badge badgeContent={unreadCount} classes={{ badge: classes.badge }} overlap='circle' showZero>
                        <MailIcon style={{ fontSize: 50 }} />
                    </Badge>
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
                <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls='mobileHamburgerMenu'
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon style={{ fontSize: 60 }} />
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
            <MobileNavMenu mobileMoreAnchorEl={mobileMoreAnchorEl} handleMobileMenuClose={handleMobileMenuClose} nav={{navProfile, navDashboard, navMessaging, signout}} toggleModal={toggleModal} unreadCount={unreadCount}/>

    <PJBModal isOpen={isOpen} toggleModal={toggleModal}>
                <AddJobsPostForm toggleModal={toggleModal}/>
    </PJBModal>

    </div>
    </>


        </NavBar>
    )
}

export default PJBNavBar