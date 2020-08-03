import React, { useState } from "react";
import styled from 'styled-components'

import SignInForm from '../Authentication/SignInForm'
import SignUpForm from '../Authentication/SignUpForm'
import Modal from '../BaseComponents/Modal'

import { Button } from '../../styling/theme'

const StyledButton = styled(Button)``

const LandingPage = () => {
    
    const [isOpen,setIsOpen] = useState(false)

    const toggleModal = () => {
      setIsOpen(!isOpen)
    }


  return (

    <div>
        <SignInForm />
        <StyledButton onClick={toggleModal}> CREATE AN ACCOUNT </StyledButton>
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <SignUpForm toggleModal={toggleModal} />
        </Modal>
    </div>

  );
};

export default LandingPage;
