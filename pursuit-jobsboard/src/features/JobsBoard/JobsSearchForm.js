import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { apiURL }  from '../../utilitron/apiURL'
import { useInput } from '../../utilitron/CustomHookery'

import TextField from '@material-ui/core/TextField';
import LocationSearchInput from '../BaseComponents/LocationAutocompleteInput'
import Input from '../BaseComponents/Input'
import { Button } from '../../styling/theme'

const StyledSearchForm = styled.form`
`

const StyledButton = styled(Button)``

const JobsSearchForm = () => {

    const searchQuery = useInput("", "alphanumeric")
    const locationSearch = useInput("", "alphanumeric")

    const handleSubmit = (event) => {
        event.preventDefault()
        let res = axios.get(`${apiURL()}/jobs/search`,{
            query: searchQuery.value,
            location: locationSearch.value
        })
    }

    return (
        <StyledSearchForm onSubmit={handleSubmit}>
            <TextField id="jobDescription" label="Job Description" placeholder="Search by Title or Keywords" variant="outlined" input={searchQuery}/>
            <LocationSearchInput id={"jobLocation"} placeholder={"Search by Location"} label={"Job Location"}/>
            <StyledButton type='submit'>SEARCH JOBS</StyledButton>
        </StyledSearchForm>
    )
}

export default JobsSearchForm;
