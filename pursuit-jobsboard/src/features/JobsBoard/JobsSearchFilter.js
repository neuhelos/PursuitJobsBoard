import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Select from '../BaseComponents/Select'
import { jobTypeSelectOptions } from '../BaseComponents/JobTypeSelectOptions'
import { remoteStatusSelectOptions } from '../BaseComponents/RemoteStatusSelectOptions'

import { setJobTypesFilter } from './jobTypesFilterSlice'
import { setRemoteStatusFilter } from './remoteStatusFilterSlice'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

const JobsSearchFilter = () => {
    
    const dispatch = useDispatch()

    const [jobTypes, setJobTypes] = useState("")
    const jobTypesSelect = (event) => {
        setJobTypes(event.target.value)
        dispatch(setJobTypesFilter(event.target.value))
    }
    
    const [remoteStatus, setRemoteStatus] = useState("")
    const remoteStatusSelect = (event) => {
        setRemoteStatus(event.target.value)
        dispatch(setRemoteStatusFilter(event.target.value))
    }
    
    return (
        <Grid>
            <Typography>Filter</Typography>
            <Select label={"Job Type"} value={jobTypes} onChange={jobTypesSelect}>
                <MenuItem key='All Job Types' value={'All'}>All Job Types</MenuItem>
                {jobTypeSelectOptions}
            </Select>
            <Select label={"Remote Status"} value={remoteStatus} onChange={remoteStatusSelect}>
                <MenuItem key='All Status Options' value={'All'}>All Status Options</MenuItem>
                {remoteStatusSelectOptions}
            </Select>
        </Grid>
    )
}

export default JobsSearchFilter;
