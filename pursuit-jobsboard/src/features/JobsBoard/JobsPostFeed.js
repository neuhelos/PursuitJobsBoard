import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchAllJobsPosts, selectJobsPosts } from './jobsPostsFeedSlice'
import { selectLoading } from '../Loading/loadingSlice'
import { selectError } from '../Error/errorSlice'

import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import { Button } from '../../styling/theme'

const StyledButton = styled(Button)``

const JobsPostFeed = () => {
    
    const jobsPostFeed = useSelector(selectJobsPosts)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAllJobsPosts())
    }, [])

    if(loading) {
        return(
            <Loading />
        )
    }

    // if(error){
    //     return(
    //         <JobsFeedError>
    //             <Error errorMessage={error}/>
    //             <StyledButton onClick={() => dispatch(fetchAllJobsPosts())}>FETCH JOB POSTS</StyledButton>
    //         </JobsFeedError>
    //     )
    // }
    
    // let jobsPosts = jobsPostFeed.map( jobsPost => {
    //     <JobsPost key={} value/>
    // })
    
    return (
        <div>
            
        </div>
    )
}

export default JobsPostFeed;
