import React, { useState, useEffect } from "react";

import SignInForm from "../Authentication/SignInForm"
import Modal from "./Modal"



const LandingPage = ({  }) => {
    

    const [modalIsOpen,setIsOpen] = useState(false)


    const openModal = () =>  {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }



  return (
    <>
      <div className="LandingPage">

        <div className="landingPageHeader">
        </div>


        

            {error ? <Error className="Error" message={error} /> : null}

            <div className="signUpLink" onClick={openModal}>
              <p className="signUpLink">
                SIGN UP
              </p>
            </div>

            <div className="modalParentContainer">
            <ClickModal className="modal" modalIsOpen={modalIsOpen} modalClose={closeModal}>
                <SignUpPage modalClose={closeModal} onLogin={onLogin}/>
                {/* <div>{!error ? <Error className="Error" message={error} /> : null}</div> */}
            </ClickModal>
            </div>
           

          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
