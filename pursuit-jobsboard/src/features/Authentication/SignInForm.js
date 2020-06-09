import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useInput } from '../../utilitron/CustomHookery'
import { setCurrentUser } from './authenticationSlice'

import firebase from '../../utilitron/firebase'
import {getFirebaseIdToken} from '../../utilitron/firebaseFunctions'
import { signIn } from '../../utilitron/firebaseFunctions'

import styled, { ThemeProvider } from 'styled-components'
import { Composition } from 'atomic-layout'

import Input from "../BaseComponents/Input";
import Error from "../BaseComponents/Error";

const SignInFormTitle = styled.title`
    font-size: 20rem;
`

const SignInForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const email = useInput("");
    const password = useInput("");
    const [error, setError] = useState("")

    const userSession = user => {
        if(user) {
            const {email, uid} = user
            getFirebaseIdToken().then(token => {
                dispatch(setCurrentUser({email, uid, token}))
            })
        } else {
            dispatch(setCurrentUser(null))
        }
    };
    
    useEffect( () => {
        const authStateObserver = firebase.auth().onAuthStateChanged(userSession)
        return authStateObserver
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email,password);
            history.push("/Home")
        } catch (error) {
            setError("Please Enter a Valid Email Address or Email Already Exists");
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
                    FIND YOUR FUTURE
                </button>
                </div>
            </form>

            {error ? <Error errorMessage={error} /> : null}

    </div>
    )
};

export default SignInForm;
