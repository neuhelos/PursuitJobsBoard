import React from 'react'
import { MenuItem } from '@material-ui/core' 

const remoteStatusOptions = [
    {
        key: 'Office',
        text: 'Office',
        value: 'Office',
    },
    {
        key: 'Remote',
        text: 'Remote',
        value: 'Remote',
    },
    {
        key: 'Temporarily Remote',
        text: 'Temporarily Remote',
        value: 'Temporarily Remote',
    },
]

export const remoteStatusSelectOptions = remoteStatusOptions.map(remote => {
    return <MenuItem key={remote.key} value={remote.value}>{remote.text}</MenuItem>
})
