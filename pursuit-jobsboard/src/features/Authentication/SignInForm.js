import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useInput } from '../../Utilitron/CustomHookery'

import styled, { ThemeProvider } from 'styled-components'
import { Composition } from 'atomic-layout'

import { signIn } from '../../Utilitron/firebaseFunctions'

import Input from "./Input";
import Error from "./Error";

const SignInFormTitle = styled.title`
    font-size: 2rem;
`




const SignInForm = () => {
    
    const email = useInput("");
    const password = useInput("")
    
    const error = useSelector()
    const history = useHistory();
    
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email,password);
            history.push("/Home")
        } catch (error) {
        setError("Please Enter a Valid Email or Email Already Exists");
        }
    };


    return (
        <div>
            <SignInFormTitle>SIGN IN</SignInFormTitle>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                <Input
                    placeholder={"Enter Email"}
                    input={email}
                />
                </div>
                <div>
                <Input
                    placeholder={"Enter Password"}
                    input={password}
                />
                </div>

                <div>
                <button type="submit">
                    SIGN IN
                </button>
                </div>
            </form>
    </div>
    )
}

export default SignInForm;
