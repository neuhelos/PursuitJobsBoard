import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllJobsPosts, jobClosingDateFeedSort } from './jobsPostsFeedSlice'

import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => {
    const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
    const borderWidth = 2;
    const width = pxToRem(56);
    const height = pxToRem(34);
    const size = pxToRem(22);
    const gap = (34 - 22) / 2;
    return {
    root: {
        width,
        height,
        padding: 0,
        margin: theme.spacing(1),
        overflow: 'unset',
    },
    switchBase: {
        padding: pxToRem(gap),
        '&$checked': {
            color: '#fff',
            transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
            '& + $track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 'none',
            },
            '& $thumb': {
                backgroundColor: '#fff',
            },
        },
    },
    track: {
        borderRadius: 40,
        border: `solid ${theme.palette.grey[400]}`,
        borderWidth,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
        boxSizing: 'border-box',
    },
    thumb: {
        boxShadow: 'none',
        backgroundColor: theme.palette.grey[400],
        width: size,
        height: size,
    },
    checked: {},
    };
})


const JobsSearchSort = () => {
    
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false);
    
    const classes = useStyles();
    
    const handleChange = (event) => {
        setToggle(event.target.checked)
        event.target.checked ? dispatch(jobClosingDateFeedSort()) : dispatch()
    }

    return (
        <div>
            <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Recently Posted</Grid>
                <Grid item>
                    <Switch
                        classes={classes}
                        checked={toggle}
                        onChange={handleChange}
                    />
                </Grid>
            <Grid item>Soonest Closing Date</Grid>
            </Grid>
        </div>
    );

}

export default JobsSearchSort;