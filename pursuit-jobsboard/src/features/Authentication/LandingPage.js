import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {login} from '../../Utilitron/firebaseFunctions'


import Input from "./Input";
import Error from "./Error";
import Modal from "./Modal"
import SignUpPage from "./SignUpModal"



const LandingPage = ({  }) => {
  const username = useInput("");
  const email = useInput("");
  const [error, setError] = useState("");

  const [modalIsOpen,setIsOpen] = useState(false)


  const handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await axios.get(
        `http://localhost:4000/users/${username.value}`
      );

    } catch (err) {
      console.log(error);
      setError("Please Enter a Valid Email or Email Already Exists");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email,password)
      history.push("/");
    } catch (err) {}
  };
  
  const openModal = () =>  {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }



  return (
    <>
      <div className="LandingPage">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="header">
          <div className="LogoLetter">C</div>
          <div className="headerSlogan">lick me til I scream!</div>
          {/* <img className="logo" src={lips} /> */}
        </div>


        <div className="signIn">
          <div className="signInForm">
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <Input
                  className={"userInputs"}
                  placeholder={"Enter Username"}
                  input={username}
                />
              </div>
              <div>
                <Input
                  className={"userInputs"}
                  placeholder={"Enter Password"}
                  input={email}
                />
              </div>

              <div>
                <button className="signInBtn" type="submit">
                  SIGN IN
                </button>
              </div>
            </form>

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
