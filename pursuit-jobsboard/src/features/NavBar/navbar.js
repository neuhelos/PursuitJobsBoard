import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { signOut } from '../../utilitron/firebaseFunctions'

import Modal from '../BaseComponents/Modal'

const NavBar = () => {

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
        <nav>
            
            { NavButton ? <NavLink to={"/jobboard"}><button className="navButton toggleButton" onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/profile"}><button className="navButton toggleButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
            <button onClick={signout}>SIGN OUT</button>

            <Modal>

            </Modal>
        </nav>
    )
}

export default NavBar