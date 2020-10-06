import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { storage } from '../../utilitron/firebase'
import Dropzone from '../BaseComponents/FileDropzone'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

import { useInput } from '../../utilitron/CustomHookery'
import { apiURL } from '../../utilitron/apiURLDev'
import { signUp } from '../../utilitron/firebaseFunctions'
import { formValidator } from '../../utilitron/formValidation'

import Input from '../BaseComponents/Input'
import Error from '../Error/Error'

import { Button } from '../../styling/theme'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& *': {
            fontFamily: 'poppins',
        },
        padding: theme.spacing(3),
        backgroundColor: 'rgba(69, 67, 231, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        fontFamily: 'poppins',
        marginBottom: theme.spacing(2),
        backgroundColor: '#F5F5F5',
        borderRadius: '4px'
    },
}));

const SignUpForm = styled.form`
    width: 100%;
`
const SignUpFormTitle = styled.h1`
    font-size: 2rem;
    font-family: poppins;
    color: #000000;
    margin-bottom: 1rem;
`

const StyledButton = styled(Button)`
    color: black;
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 3px;
    justify-center: center;
    width: 100%;
`

const PJBSignUpForm = ({toggleModal}) => {
    
    const classes = useStyles()
    const history = useHistory()
    
    const email = useInput("", "email")
    const password = useInput("", "password")
    const name = useInput("", "alphanumeric")
    const [image, setImage] = useState(null, "file")
    const [imageUrl, setImageUrl] = useState("https://firebasestorage.googleapis.com/v0/b/pursuit-jobsboard.appspot.com/o/profileImages%2FDefaultAvatar.png?alt=media&token=fae8010f-27b0-4f45-b524-1e33da66be53", "url")
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


    const handleImageUpload = (image) => {
        const uploadImage = storage.ref(`profileImage/${image.name}`).put(image);
        uploadImage.on(
            "state_changed",
            //snapshot => {},
            // error => {
            //     setError(error.code)
            // },
            () => {
                storage
                .ref("profileImage")
                .child(image.name)
                .getDownloadURL()
                .then(imageUrl => {
                    setImageUrl(imageUrl)
                })
            }
        )
    }

    const handleImageChange = (imageFile) => {
        setImage(imageFile[0])
    }
    
    const handleSubmit = async event => {
        if (emailValidation.formIsValid && passwordValidation.formIsValid && nameValidation.formIsValid) {
            event.preventDefault();
            event.target.image.value = null;
            try {
                let res = await signUp(email.value, password.value)
                await handleImageUpload(image)
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

        <Paper className={classes.root}>
            <SignUpForm onSubmit={handleSubmit}>
                <SignUpFormTitle>FIND YOUR DREAM JOB</SignUpFormTitle>
                <TextField className={classes.input} label="Email" placeholder="Enter Your Email" onBlur={validateEmail} fullWidth variant="outlined" {...email} required/>
                { emailError ? <Error errorMessage={emailValidation.error} /> : null }
                <TextField className={classes.input} type="password" label="Password" placeholder="Enter Password" fullWidth onBlur={validatePassword} variant="outlined" {...password} required/>
                { passwordError ? <Error errorMessage={passwordValidation.error} /> : null }
                <TextField className={classes.input} label="Preferred Name" placeholder="Enter Your Preferred Name" fullWidth variant="outlined" onBlur={validateName} {...name} required />
                { nameError ? <Error errorMessage={nameValidation.error} /> : null }
                <TextField className={classes.input} id="linkedin" label="LinkedIn" placeholder="Enter Your LinkedIn Profile Link" fullWidth onBlur={validateLinkedIn} variant="outlined" {...linkedIn}/>
                { linkedInError ? <Error errorMessage={linkedInValidation.error } /> : null }
                <TextField className={classes.input} label="Github" placeholder="Enter Your GitHub Profile Link" fullWidth onBlur={validateGithub} variant="outlined" {...github}/>
                { githubError ? <Error errorMessage={githubValidation.error} /> : null }
                <Dropzone className={classes.container} handleImageChange={handleImageChange} dropzoneText={"Drop or Select Your Profile Image"}/>
                <StyledButton type="submit"> CREATE YOUR PROFILE</StyledButton>
            </SignUpForm>
        </Paper>
    )
}

export default PJBSignUpForm;