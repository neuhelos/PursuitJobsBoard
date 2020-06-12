import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useInput } from '../../utilitron/CustomHookery'

import { signIn } from '../../utilitron/firebaseFunctions'

import styled, { ThemeProvider } from 'styled-components'
import { Composition } from 'atomic-layout'

import Input from "../BaseComponents/Input";
import Error from "../Error/Error";

const SignInFormTitle = styled.h1`
    font-size: 20rem;
`

const SignInForm = () => {

    const history = useHistory();
    
    const email = useInput("");
    const password = useInput("");
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email.value,password.value);
            history.push("/jobboard")
        } catch (error) {
            email.clearInput()
            password.clearInput()
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
                    <button type="submit"> FIND YOUR FUTURE</button>
                </div>
            </form>

            {error ? <Error errorMessage={error} /> : null}
        </div>
    )
};

export default SignInForm;
