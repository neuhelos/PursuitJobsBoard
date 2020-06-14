import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signOut } from '../../utilitron/firebaseFunctions'

import Modal from '../BaseComponents/Modal'
import AddJobPostForm from '../JobPosts/AddJobPostForm'

import { Button } from '../../styling/theme'

const NavBar = styled.nav`
        
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
            
            { NavButton ? <NavLink to={"/jobboard"}><button className="navButton toggleButton" onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/profile"}><button className="navButton toggleButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
            <StyledButton onClick={signout}>SIGN OUT</StyledButton>

            <Modal>
                <AddJobPostForm />
            </Modal>
        </NavBar>
    )
}

export default PJBNavBar