import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchJobsPostsSearch } from './jobsPostsFeedSlice'
import { setJobTypesFilter, setRemoteStatusFilter } from './jobsPostsSearchFilterSlice'
import { jobRecentlyPostedFeedSort, jobClosingDateFeedSort } from './jobsPostsFeedSlice'
import { useInput } from '../../utilitron/CustomHookery'

import JobsSearchSort from '../JobsBoard/JobsSearchSort'
import TextField from '@material-ui/core/TextField';
import LocationSearchInput from '../BaseComponents/LocationAutocompleteInput'
import { Button } from '../../styling/theme'

const StyledSearchForm = styled.form`
`

const StyledButton = styled(Button)``

const JobsSearchForm = () => {

    const dispatch = useDispatch()

    const searchQuery = useInput("", "alphanumeric")



    
    const [locationInput, setLocationInput] = useState("")

    const locationHandleChange  = (location) => {
        setLocationInput(location)
    } 
    
    const locationHandleSelect = ( location ) => {
        setLocationInput(location)
    };


    const [sortToggle, setSortToggle] = useState(false);    
    const sortHandleChange = (event) => {
        setSortToggle(event.target.checked)
        event.target.checked ? dispatch(jobClosingDateFeedSort()) : dispatch(jobRecentlyPostedFeedSort())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchJobsPostsSearch({
            query: searchQuery.value,
            location: locationInput
        }))
        dispatch(setJobTypesFilter('All'))
        dispatch(setRemoteStatusFilter('All'))
        setSortToggle(false)
        searchQuery.clearinput()
        setLocationInput(event.target[2].value)
        debugger
    }

    return (
        <>
        <StyledSearchForm onSubmit={handleSubmit}>
            <TextField id="jobDescription" label="Jobs Search" placeholder="Search by Title or Keywords" variant="outlined" {...searchQuery} required/>
            <LocationSearchInput id={"jobLocation"} placeholder={"Search by Location"} label={"Jobs Location Search"} input={{locationInput, locationHandleChange, locationHandleSelect }} />
            <StyledButton type='submit'>SEARCH JOBS</StyledButton>
        </StyledSearchForm>
        <JobsSearchSort handleChange={sortHandleChange} toggle={sortToggle}/>
        </>
    )
}

export default JobsSearchForm;
