import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchAllJobsPosts, selectJobsPosts } from './jobsPostsFeedSlice'
import { selectJobsPostsSearchFilter } from './JobsPostsFeedFilterSelector'
import { selectLoading } from '../Loading/loadingSlice'
import { selectError } from '../Error/errorSlice'

import Grid from '@material-ui/core/Grid'

import JobsPost from './JobsPost'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import { Button } from '../../styling/theme'

const StyledButton = styled(Button)``

const JobsPostFeed = () => {
    
    const jobsPosts = useSelector(selectJobsPosts)
    const filteredJobsPosts = useSelector(selectJobsPostsSearchFilter)

    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAllJobsPosts())
    }, [])

    useEffect( () => {
        
    }, [jobsPosts, filteredJobsPosts])

    
    if(loading) {
        return(
            <Loading />
        )
    }

    if(error){
        return(
            <div>
                <Error errorMessage={error}/>
                <StyledButton onClick={() => dispatch(fetchAllJobsPosts())}>FETCH JOB POSTS</StyledButton>
            </div>
        )
    }


    let jobsPostsFeed = filteredJobsPosts.map( jobsPost => {
        return <JobsPost key={jobsPost.jobs_id} value={jobsPost.jobs_id} jobsPost={jobsPost} />
    })
    
    return (
        <Grid>
            {jobsPostsFeed}
        </Grid>
    )
}

export default JobsPostFeed;
