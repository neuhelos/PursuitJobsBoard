import React from 'react'
import styled from 'styled-components'

import { APIURL } from '../../utilitron/APIURL'
import { useInput, useSelect } from '../../utilitron/CustomHookery'

import Input from '../BaseComponents/Input'
import { Button } from '../../styling/theme'

const AddJobPostForm = styled.form`

`

const StyledButton = styled(Button)``

const PJBAddJobPostForm = () => {
    
    const apiURL = APIURL()
    
    const jobTitle = useInput("", "alphanumeric")
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
    
    //Job Type
    // Full-Time
    // Part-Time
    // Contract/Freelance
    // Internship/Apprenticeship

    //Remote Status
    // Office
    // Remote
    // Temporarily Remote
    
    
    return (
        <AddJobPostForm>
            <Input placeholder={"Enter Job Title"} onBlur={validateJobTitle} input={jobTitle} required/>
            <Input placeholder={"Enter Job Description"} input={jobDescription} required/>
            <Input placeholder={"Enter Job Link"} onBlur={validateJobLink} input={jobLink} required/>
            <Input placeholder={"Enter Job Location"} input={jobLocation} required/>
            
            <Input placeholder={"Enter Job Closing Date"} type={"date"} input={jobClosingDate} />
            <StyledButton type="submit">SUBMIT JOB POST</StyledButton>
        </AddJobPostForm>
    )
}

export default PJBAddJobPostForm;
