import React, { useState } from "react";

import SignInForm from "../Authentication/SignInForm"
import PJBModal from "../BaseComponents/Modal"

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
      <PJBModal modalIsOpen={modalIsOpen} modalClose={closeModal}/>
      </div>

  );
};

export default LandingPage;
