import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { useInput } from '../../utilitron/CustomHookery'
import { APIURL } from '../../utilitron/APIURL'
import { signUp } from '../../utilitron/firebaseFunctions'
import { formValidator } from './formValidation'

import Input from '../BaseComponents/Input'
import Error from '../Error/Error'

const SignUpForm = styled.form`

`
const SignUpFormTitle = styled.h1`
    font-size: 20rem;
`

const PJBSignUpForm = () => {
        
    const apiURL = APIURL()
    
    const email = useInput("", "email")
    const password = useInput("", "password")
    const name = useInput("", "alphanumeric")
    const [image, setImage] = useState(null, "file")
    const linkedIn = useInput("", "url")
    const github = useInput("", "url")    

    const emailValidation = formValidator(email)
    const passwordValidation = formValidator(password)
    const nameValidation = formValidator(name)
    const linkedInValidation = formValidator(linkedIn)
    const githubValidation = formValidator(github)

    const handleImageUpload = event => {
        setImage(event.target.files[0]);
    }
    
    const handleSubmit = async event => {
        if (emailValidation.formIsValid && passwordValidation.formIsValid && nameValidation.formIsValid) {
            event.preventDefault();
            debugger
            event.target.image.value = null;
            const formData = new FormData();
            formData.append("image", image);
            const config = {
                headers: {"content-type": "multipart/form-data"}
            };
            try {
                let upload = await axios.post(`${apiURL}/upload`, formData, config);
                let imageUrl = upload.data.imageUrl;
                let res = await signUp(email.value, password.value)
                let createUser = await axios.post(`${apiURL}/users`, {
                    id: res.user.uid,
                    email: email.value,
                    preferred_name: name.value,
                    profile_image: imageUrl,
                    linkedIn_link: linkedIn.value,
                    github_link: github.value
                });
        
            if (createUser) {
                //modalClose()
            }
            } catch (error) {
                console.log(error)
            }
        };
    }

    return (

        <SignUpForm onSubmit={handleSubmit}>
            <SignUpFormTitle>FIND YOUR DREAM JOB</SignUpFormTitle>
            <Input placeholder={"Enter Your Email"} input={email} required/>
            { emailValidation.error ? <Error errorMessage={emailValidation.error} /> : null }
            <Input type={"password"} placeholder={"Enter Your Password"} input={password} autoComplete="on" required />
            { passwordValidation.error ? <Error errorMessage={passwordValidation.error} /> : null }
            <Input placeholder={"Enter Your Preferred Name"} input={name} required />
            { nameValidation.error ? <Error errorMessage={nameValidation.error} /> : null }
            <input type={"file"} name="image" onChange={event => handleImageUpload(event)} />
            <Input placeholder={"Enter Your LinkedIn Profile Link"} input={linkedIn} />
            { linkedInValidation.error ? <Error errorMessage={linkedInValidation.error } /> : null }
            <Input placeholder={"Enter Your GitHub Profile Link"} input={github} />
            { githubValidation.error ? <Error errorMessage={githubValidation.error} /> : null }
            <button type="submit"> CREATE YOUR PROFILE</button>
        </SignUpForm>
    )
}

export default PJBSignUpForm;