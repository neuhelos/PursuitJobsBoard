import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import { useInput } from '../../utilitron/CustomHookery'
import { apiURL } from '../../utilitron/apiURLDev'
import { signUp } from '../../utilitron/firebaseFunctions'
import { formValidator } from '../../utilitron/formValidation'

import Input from '../BaseComponents/Input'
import Error from '../Error/Error'

import { Button } from '../../styling/theme'

const SignUpForm = styled.form`

`
const SignUpFormTitle = styled.h1`
    font-size: 2rem;
`

const StyledButton = styled(Button)``

const PJBSignUpForm = ({toggleModal}) => {
    
    const history = useHistory()
    
    const email = useInput("", "email")
    const password = useInput("", "password")
    const name = useInput("", "alphanumeric")
    const [image, setImage] = useState(null, "file")
    const linkedIn = useInput("", "url")
    const github = useInput("", "url")    


    const [emailError, setEmailError] = useState(false)
    const emailValidation = formValidator(email)
    const validateEmail = () => {
        if(emailValidation.error){
            setEmailError(true)
        }
    }
    
    const [passwordError, setPasswordError] = useState(false)
    const passwordValidation = formValidator(password)
    const validatePassword = () => {
        if(passwordValidation.error){
            setPasswordError(true)
        }
    }
    
    const nameValidation = formValidator(name)
    const [nameError, setNameError] = useState(false)
    const validateName = () => {
        if(nameValidation.error){
            setNameError(true)
        }
    }
    
    const githubValidation = formValidator(github)
    const [githubError, setGithubError] = useState(false)
    const validateGithub = () => {
        if(githubValidation.error){
            setGithubError(true)
        }
    }
    
    const linkedInValidation = formValidator(linkedIn)
    const [linkedInError, setLinkedInError] = useState(false)
    const validateLinkedIn = () => {
        if(linkedInValidation.error){
            setLinkedInError(true)
        }
    }


    const handleImageUpload = event => {
        setImage(event.target.files[0]);
    }
    
    const handleSubmit = async event => {
        if (emailValidation.formIsValid && passwordValidation.formIsValid && nameValidation.formIsValid) {
            event.preventDefault();
            event.target.image.value = null;
            const formData = new FormData();
            formData.append("image", image);
            const config = {
                headers: {"content-type": "multipart/form-data"}
            };
            try {
                let upload = await axios.post(`${apiURL()}/upload`, formData, config);
                let imageUrl = upload.data.imageUrl;
                let res = await signUp(email.value, password.value)
                let createUser = await axios.post(`${apiURL()}/users`, {
                    id: res.user.uid,
                    "email": email.value,
                    "preferred_name": name.value,
                    "profile_image": imageUrl,
                    "linkedIn_link": linkedIn.value,
                    "github_link": github.value
                });
        
            if (createUser) {
                toggleModal()
                history.push("/jobboard")
            }
            } catch (error) {
                console.log(error)
            }
        };
    }

    return (

        <SignUpForm onSubmit={handleSubmit}>
            <SignUpFormTitle>FIND YOUR DREAM JOB</SignUpFormTitle>
            <Input placeholder={"Enter Your Email"} onBlur={validateEmail} input={email} required/>
            { emailError ? <Error errorMessage={emailValidation.error} /> : null }
            <Input type={"password"} placeholder={"Enter Your Password"} onBlur={validatePassword} input={password} autoComplete="on" required />
            { passwordError ? <Error errorMessage={passwordValidation.error} /> : null }
            <Input placeholder={"Enter Your Preferred Name"} onBlur={validateName} input={name} required />
            { nameError ? <Error errorMessage={nameValidation.error} /> : null }
            <input type={"file"} name="image" onChange={event => handleImageUpload(event)} />
            <Input placeholder={"Enter Your LinkedIn Profile Link"} onBlur={validateLinkedIn} input={linkedIn} />
            { linkedInError ? <Error errorMessage={linkedInValidation.error } /> : null }
            <Input placeholder={"Enter Your GitHub Profile Link"} onBlur={validateGithub} input={github} />
            { githubError ? <Error errorMessage={githubValidation.error} /> : null }
            <StyledButton type="submit"> CREATE YOUR PROFILE</StyledButton>
        </SignUpForm>
    )
}

export default PJBSignUpForm;