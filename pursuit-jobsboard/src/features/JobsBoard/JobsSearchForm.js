import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { APIURL } from '../../utilitron/APIURL'
import { useInput } from '../../utilitron/CustomHookery'

import Input from '../BaseComponents/Input'
import { Button } from '../../styling/theme'

const StyledSearchForm = styled.form`
`

const StyledButton = styled(Button)``

const JobsSearchForm = () => {
    
    const apiURL = APIURL()

    const querySearch = useInput("", "alphanumeric")
    const locationSearch = useInput("", "alphanumeric")

    const handleSubmit = (event) => {
        event.preventDefault()
        let res = axios.get(`${apiURL}/jobs/search`,{
            query: querySearch.value,
            location: locationSearch.value
        })
    }

    return (
        <StyledSearchForm onSubmit={handleSubmit}>
            <Input name={"querySearch"} placeholder={"Search by Title or Keywords"} input={querySearch} />
            <Input name={"locationSearch"} placeholder={"Search by Location"} input={locationSearch} />
            <StyledButton type='submit'>SEARCH JOBS</StyledButton>
        </StyledSearchForm>
    )
}

export default JobsSearchForm;
