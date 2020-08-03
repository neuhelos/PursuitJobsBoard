import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'

const jobTypeOptions = [
    {
        key: 'Full-Time',
        text: 'Full-Time',
        value: 'Full-Time',
    },
    {
        key: 'Part-Time',
        text: 'Part-Time',
        value: 'Part-Time',
    },
    {
        key: 'Contract/Freelance',
        text: 'Contract/Freelance',
        value: 'Contract/Freelance',
    },
    {
        key: 'Internship/Apprenticeship',
        text: 'Internship/Apprenticeship',
        value: 'Internship/Apprenticeship',
    },
]

export const jobTypeSelectOptions = jobTypeOptions.map(jobType => {
    return <MenuItem key={jobType.key} value={jobType.value}>{jobType.text}</MenuItem>
})
