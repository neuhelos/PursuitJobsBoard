import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signOut } from '../../utilitron/firebaseFunctions'

import PJBModal from '../BaseComponents/Modal'
import AddJobsPostForm from '../JobsPosts/AddJobsPostForm'

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
            
            { NavButton ? <NavLink to={"/jobboard"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/profile"}><button onClick={handleNavButton}>PROFILE</button></NavLink> }
            <StyledButton onClick={toggleModal}>ADD JOB POST</StyledButton>
            <StyledButton onClick={signout}>SIGN OUT</StyledButton>

            <PJBModal isOpen={isOpen} toggleModal={toggleModal}>
                <AddJobsPostForm toggleModal={toggleModal}/>
            </PJBModal>
        </NavBar>
    )
}

export default PJBNavBar