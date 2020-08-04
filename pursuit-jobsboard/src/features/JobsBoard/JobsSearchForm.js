import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchJobsPostsSearch } from './jobsPostSlice'
import { useInput } from '../../utilitron/CustomHookery'

import TextField from '@material-ui/core/TextField';
import LocationSearchInput from '../BaseComponents/LocationAutocompleteInput'
import { Button } from '../../styling/theme'

const StyledSearchForm = styled.form`
`

const StyledButton = styled(Button)``

const JobsSearchForm = () => {

    const dispatch = useDispatch()

    const searchQuery = useInput("", "alphanumeric")
    const locationSearch = useInput("", "alphanumeric")

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchJobsPostsSearch({
            query: searchQuery.value,
            location: locationSearch.value
        }))
    }

    return (
        <StyledSearchForm onSubmit={handleSubmit}>
            <TextField id="jobDescription" label="Jobs Search" placeholder="Search by Title or Keywords" variant="outlined" input={searchQuery}/>
            <LocationSearchInput id={"jobLocation"} placeholder={"Search by Location"} label={"Jobs Location Search"}/>
            <StyledButton type='submit'>SEARCH JOBS</StyledButton>
        </StyledSearchForm>
    )
}

export default JobsSearchForm;
