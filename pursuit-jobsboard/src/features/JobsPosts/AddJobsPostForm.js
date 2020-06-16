import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'

import { APIURL } from '../../utilitron/APIURL'
import { useInput, useSelect } from '../../utilitron/CustomHookery'
import { formValidator } from '../../utilitron/formValidation'
import { selectCurrentUserId } from '../Authentication/authenticationSlice'

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
    const userId = useSelector(selectCurrentUserId)
    
    const jobTitle = useInput("", "alphanumeric")
    const jobDescription = useInput("", "alphanumeric")
    const jobLink = useInput("", "url")
    const jobLocation = useInput("", "alphanumeric")
    const jobClosingDate = useInput("", "date")    

    const jobTypeSelect = useSelect("")
    const remoteSelect = useSelect("")

    const [jobLinkError, setJobLinkError] = useState(false)
    const jobLinkValidation = formValidator(jobLink)
    const validateJobLink = () => {
        if(jobLinkValidation.error){
            setJobLinkError(true)
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post(`${apiURL}/users/${userId}/jobs`, {
            job_title: jobTitle.value,
            job_link: jobLink.value,
            job_description: jobDescription.value,
            job_location: jobLocation.value,
            job_type: jobTypeSelect.value,
            remote_status: remoteSelect.value,
            job_closingdate: jobClosingDate.value,
        })
        console.log(res)
        toggleModal()
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
