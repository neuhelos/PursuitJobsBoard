import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { apiURL } from '../../utilitron/apiURL'


export const fetchAllJobsPosts = createAsyncThunk(
    'get/fetchAllJobsPosts',
    async () => {
        try {
            const res = await axios.get(`${apiURL()}/jobs`)
            return res.data.payload
        } catch (error) {
            throw Error(error)
        }
    }
)

export const fetchJobsPostsSearch = createAsyncThunk(
    'post/fetchJobsPostsSearch',
    async (search) => {
        try {
            const res = await axios.post(`${apiURL()}/jobs/search`,{
                search
            })
            return res.data.payload
        } catch (error) {
            throw Error(error)
        }
    }
)

export const jobsPostsFeedSlice = createSlice( {
    name: "jobsPostsFeed",
    initialState: [],
    reducers: {
        jobRecentlyPostedFeedSort: (state, action) => {
            return state.sort((a,b) => (new Date(a.posted) - new Date(b.posted)))  
        },
        jobClosingDateFeedSort: (state, action) => {
            return state.sort((a,b) => (new Date(a.job_closingdate) > new Date(b.job_closingdate)) ? 1 : (a.job_closingdate === b.job_closingdate) ? ((a.posted > b.posted) ? 1 : -1) : -1)  
        }
    },
    extraReducers: {
        [fetchAllJobsPosts.fulfilled]: (state, action) => action.payload,
        [fetchJobsPostsSearch.fulfilled]: (state, action) => action.payload
    }
})

export const selectJobsPosts = state => state.jobsPostsFeed
export const {jobClosingDateFeedSort, jobRecentlyPostedFeedSort} = jobsPostsFeedSlice.actions
export default jobsPostsFeedSlice.reducer 