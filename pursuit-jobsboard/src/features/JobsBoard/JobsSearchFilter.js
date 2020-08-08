import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setJobTypesFilter, setRemoteStatusFilter } from './jobsPostsSearchFilterSlice'
import Select from '../BaseComponents/Select'
import { jobTypeSelectOptions } from '../BaseComponents/JobTypeSelectOptions'
import { remoteStatusSelectOptions } from '../BaseComponents/RemoteStatusSelectOptions'
import { selectJobTypesFilter, selectRemoteStatusFilter } from './jobsPostsSearchFilterSlice'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

const JobsSearchFilter = () => {
    
    const dispatch = useDispatch()

    const jobTypes = useSelector(selectJobTypesFilter)
    const remoteStatus = useSelector(selectRemoteStatusFilter)

    const jobTypesSelect = (event) => {
        dispatch(setJobTypesFilter(event.target.value))
    }
    
    const remoteStatusSelect = (event) => {
        dispatch(setRemoteStatusFilter(event.target.value))
    }

    return (
        <Grid>
            <Typography>Filter</Typography>
            <Select label={"Job Type"} value={jobTypes} onChange={jobTypesSelect}>
                <MenuItem key='All Job Types' value='All'>All Job Types</MenuItem>
                {jobTypeSelectOptions}
            </Select>
            <Select label={"Remote Status"} value={remoteStatus} onChange={remoteStatusSelect}>
                <MenuItem key='All Status Options' value='All'>All Status Options</MenuItem>
                {remoteStatusSelectOptions}
            </Select>
        </Grid>
    )
}

export default JobsSearchFilter;
