import React, { useState } from 'react'
import styled from 'styled-components'

import { APIURL } from '../../utilitron/APIURL'
import { useInput, useSelect } from '../../utilitron/CustomHookery'
import { formValidator } from '../../utilitron/formValidation'

import AddJobsPostSelect from './AddJobsPostSelect'
import { jobTypeSelectOptions } from './JobTypeSelectOptions'
import { remoteStatusSelectOptions } from './RemoteStatusSelectOptions'
import Input from '../BaseComponents/Input'
import Error from '../Error/Error'
import { Button } from '../../styling/theme'


const AddJobPostForm = styled.form`

`

const StyledDateInput = styled(Input)`
    &:before {
        content: "Enter Job Closing Date: ";
        font-size: 1rem;
        color: #aaa;
        margin-right: 0.5rem;
    };
`

const StyledButton = styled(Button)``



const PJBAddJobPostForm = ({ toggleModal }) => {
    
    const apiURL = APIURL()
    
    const jobTitle = useInput("", "alphanumeric")
    const jobDescription = useInput("", "alphanumeric")
    const jobLink = useInput("", "url")
    const jobLocation = useInput("", "alphanumeric")
    const jobClosingDate = useInput("", "date")    

    const remoteSelect = useSelect("")
    const jobTypeSelect = useSelect("")

    const [jobLinkError, setJobLinkError] = useState(false)
    const jobLinkValidation = formValidator(jobLink)
    const validateJobLink = () => {
        if(jobLinkValidation.error){
            setJobLinkError(true)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        toggleModal()
        let res = await axios.post(`${apiURL}/`)

    }
    
    return (
        <AddJobPostForm onSubmit={handleSubmit}>
            <Input placeholder={"Enter Job Title"} input={jobTitle} required/>
            <Input placeholder={"Enter Job Description"} input={jobDescription} required/>
            <Input placeholder={"Enter Job Link"} onBlur={validateJobLink} input={jobLink} required/>
            { jobLinkError ? <Error errorMessage={jobLinkValidation.error} /> : null }
            <Input placeholder={"Enter Job Location"} input={jobLocation} required/>
            <AddJobsPostSelect select={jobTypeSelect} label={"Job Type"}>
                {jobTypeSelectOptions}
            </AddJobsPostSelect>
            <AddJobsPostSelect select={remoteSelect} label={"Remote Status"}>
                {remoteStatusSelectOptions}
            </AddJobsPostSelect>
            <StyledDateInput type={"date"} input={jobClosingDate} required/>
            <StyledButton type="submit">SUBMIT JOB POST</StyledButton>
        </AddJobPostForm>
    )
}

export default PJBAddJobPostForm;
