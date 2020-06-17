import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useInput } from '../../utilitron/CustomHookery'

import { signIn } from '../../utilitron/firebaseFunctions'


import styled, { ThemeProvider } from 'styled-components'
import { Button } from '../../styling/theme'
import { Composition } from 'atomic-layout'

import Input from "../BaseComponents/Input";
import Error from "../Error/Error";

const SignInFormTitle = styled.h1`
    font-size: 2rem;
`




const StyledButton = styled.button`
    color: black;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 3px;
`

const SignInForm = () => {

    const history = useHistory();
    
    const email = useInput("");
    const password = useInput("");
    const [error, setError] = useState("")

    const handleGuestLogin = async () => {
        await signIn("guest@nilber.dev","nilber");
        history.push("/jobboard")
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email.value,password.value);
            history.push("/jobboard")
        } catch (error) {
            email.clearinput()
            password.clearinput()
            setError("Please Enter a Valid Email Address or Email Already Exists");
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <SignInFormTitle>SIGN IN</SignInFormTitle>
                <div>
                    <Input placeholder={"Enter Email"} input={email}/>
                </div>
                <div>
                    <Input type={"password"} placeholder={"Enter Password"} input={password} autoComplete="on"/>
                </div>

                <div>
                    <StyledButton type="submit"> FIND YOUR FUTURE</StyledButton>
                </div>
            </form>
            <StyledButton onClick={handleGuestLogin}>GUEST LOGIN</StyledButton>

            {error ? <Error errorMessage={error} /> : null}
        </div>
    )
};

export default SignInForm;
