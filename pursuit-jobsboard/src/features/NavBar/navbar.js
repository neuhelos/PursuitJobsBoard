import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import styled from 'styled-components'
import { signOut } from '../../utilitron/firebaseFunctions'


import Modal from '../BaseComponents/Modal'


const NavBar = styled.nav`
        
    `

const PJBNavBar = () => {

    const history = useHistory();

    const [NavButton, setNavButton] = useState(false)
    const [modalIsOpen,setIsOpen] = useState(false)
    
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    const openModal = () =>  {
        setIsOpen(true);
    }

    const signout = () => {
        signOut()
        history.push("/")
    }

    return(
        <NavBar>
            
            { NavButton ? <NavLink to={"/jobboard"}><button className="navButton toggleButton" onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/profile"}><button className="navButton toggleButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
            <button onClick={signout}>SIGN OUT</button>

            <Modal>

            </Modal>
        </NavBar>
    )
}

export default PJBNavBar