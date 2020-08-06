import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon'

import { apiURL } from '../../utilitron/apiURL'
import { useInput, useSelect } from '../../utilitron/CustomHookery'
import { formValidator } from '../../utilitron/formValidation'
import { selectCurrentUserId } from '../Authentication/authenticationSlice'

import AddJobsPostSelect from '../BaseComponents/Select'
import LocationSearchInput from '../BaseComponents/LocationAutocompleteInput'
import { jobTypeSelectOptions } from '../BaseComponents/JobTypeSelectOptions'
import { remoteStatusSelectOptions } from '../BaseComponents/RemoteStatusSelectOptions'
import Error from '../Error/Error'
import { Button } from '../../styling/theme'


const AddJobPostForm = styled.form`

`

const StyledButton = styled(Button)``

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));
  


const PJBAddJobPostForm = ({ toggleModal }) => {
    
    const userId = useSelector(selectCurrentUserId)
    
    const classes = useStyles()

    const jobTitle = useInput("", "alphanumeric")
    const company = useInput("", 'alphanumeric')
    const jobDescription = useInput("", "alphanumeric")
    const jobLink = useInput("", "url")
    const jobLocation = useInput("", "alphanumeric")  

    const jobTypeSelect = useSelect("")
    const remoteSelect = useSelect("")

    const [jobLinkError, setJobLinkError] = useState(false)
    const jobLinkValidation = formValidator(jobLink)
    const validateJobLink = () => {
        if(jobLinkValidation.error){
            setJobLinkError(true)
        }
    }

    const [date, setDate] = useState(new Date())
    const handleDateChange = (date) => {
        setDate(date)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post(`${apiURL()}/users/${userId}/jobs`, {
            job_title: jobTitle.value,
            company: company.value,
            job_link: jobLink.value,
            job_description: jobDescription.value,
            job_location: jobLocation.value,
            job_type: jobTypeSelect.value,
            remote_status: remoteSelect.value,
            job_closingdate: date,
        })
        toggleModal()
    }

    return (
        <AddJobPostForm onSubmit={handleSubmit} className={classes.root}>
            <TextField id="jobTitle" placeholder="Job Title"  label="Job Title" variant="outlined" {...jobTitle} required/>
            <TextField id="company" label="Company" placeholder="Company Hiring" variant="outlined" {...company} required/>
            <TextField id="jobLink" label="Job URL" placeholder="Enter Job Link" onBlur={validateJobLink} variant="outlined"  {...jobLink} required/>
            { jobLinkError ? <Error errorMessage={jobLinkValidation.error} /> : null }
            <TextField id="jobDescription" label="Job Description" placeholder="Job Description" multiline variant="outlined"/>
            <LocationSearchInput id={"jobLocation"} placeholder={"Enter Job Location"} label={"Job Location"}/>
            <AddJobsPostSelect value={jobTypeSelect.value} onChange={jobTypeSelect.onChange} label={"Job Type"}>
                {jobTypeSelectOptions}
            </AddJobsPostSelect>
            <AddJobsPostSelect value={remoteSelect.value} onChange={remoteSelect.onChange} label={"Remote Status"}>
                {remoteStatusSelectOptions}
            </AddJobsPostSelect>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Job Closing Date"  format="MM/dd/yyyy" value={date} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date',}}/>
            </MuiPickersUtilsProvider>
            <StyledButton type="submit">SUBMIT JOB POST</StyledButton>
        </AddJobPostForm>
    )
}

export default PJBAddJobPostForm;
