import React from 'react'
import { useDispatch } from 'react-redux'

import Select from '../BaseComponents/Select'
import { jobTypeSelectOptions } from '../BaseComponents/JobTypeSelectOptions'
import { remoteStatusSelectOptions } from '../BaseComponents/RemoteStatusSelectOptions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

const JobsSearchFilter = () => {
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
        
    }

    const jobTypeSelect = () => {
        value: '',
        onChange: handleChange
        return ""
    }
    
    const remoteSelect = () => {
        return ""
    }
    
    return (
        <Grid>
            <Typography>Filter</Typography>
            <Select select={jobTypeSelect} label={"Job Type"}>
                <MenuItem key='All Job Types' value={'All'}>All Job Types</MenuItem>
                {jobTypeSelectOptions}
            </Select>
            <Select select={remoteSelect} label={"Remote Status"}>
                <MenuItem key='All Status Options' value={'All'}>All Status Options</MenuItem>
                {remoteStatusSelectOptions}
            </Select>
        </Grid>
    )
}

export default JobsSearchFilter;
