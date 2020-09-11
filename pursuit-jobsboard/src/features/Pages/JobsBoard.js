import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import JobsSearchForm from '../JobsBoard/JobsSearchForm'
import JobsSearchFilter from '../JobsBoard/JobsSearchFilter'
import JobsPostFeed from '../JobsBoard/JobsPostFeed'

import PursuitBlueArrowBackground from '../../assets/media/PursuitArrowBackground.jpg'

const useStyles = makeStyles ( (theme) => ({
    root: {
        backgroundImage: `url(${PursuitBlueArrowBackground})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    main: {
        flex: 1,
    }
}))


const JobsBoard = () => {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <JobsSearchForm />
            <JobsSearchFilter/>
            <JobsPostFeed />
        </div>
    )
}

export default JobsBoard;
