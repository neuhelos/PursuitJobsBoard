import React, { useState } from "react";

import SignInForm from "../Authentication/SignInForm"
import PJBModal from "../BaseComponents/Modal"
import SignUpForm from "../Authentication/SignUpForm"

const LandingPage = () => {
    
    const [modalIsOpen,setIsOpen] = useState(false)

    const openModal = () =>  {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }


  return (

    <div>
        <SignInForm />
        <SignUpForm />
        <PJBModal modalIsOpen={modalIsOpen} modalClose={closeModal}/>
    </div>

  );
};

export default LandingPage;
