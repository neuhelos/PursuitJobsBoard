import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useInput } from '../../Utilitron/CustomHookery'
import { setCurrentUser } from './authenticationSlice'

import {getFirebaseIdToken} from '../../util/firebaseFunctions'
import firebase from 'firebase'
import { signIn } from '../../Utilitron/firebaseFunctions'

import styled, { ThemeProvider } from 'styled-components'
import { Composition } from 'atomic-layout'


import Input from "./Input";
import Error from "./Error";

const SignInFormTitle = styled.title`
    font-size: 20rem;
`

const SignInForm = () => {

    const email = useInput("");
    const password = useInput("")
    
    const dispatch = useDispatch()
    const error = useSelector()
    const history = useHistory();

    const userSession = user => {
        if(user) {
            const {email, uid} = user
            getFirebaseIdToken().then(token => { //get token
                dispatch(setCurrentUser({email, uid, token}))
            })
        } else {
            dispatch(setCurrentUser(null))
        }
    }
    
    useEffect( () => {
        const authStateObserver = firebase.auth().onAuthStateChanged(userSession)
        return authStateObserver
    }, [])

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signIn(email,password);
            dispatch
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
                    FIND YOUR FUTURE
                </button>
                </div>
            </form>
    </div>
    )
}

export default SignInForm;
