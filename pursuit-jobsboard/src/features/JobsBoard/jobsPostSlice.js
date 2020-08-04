import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { apiURL } from '../../utilitron/apiURL'


export const fetchAllJobsPosts = createAsyncThunk(
    'get/fetchAllJobsPosts',
    async () => {
        try {
            const res = await axios.get(`${apiURL()}/jobs`)
            return res.payload
        } catch (error) {
            throw Error(error)
        }
    }
)

export const fetchJobsPostsSearch = createAsyncThunk(
    'post/fetchJobsPostsSearch',
    async (search) => {
        try {
            const res = await axios.post(`${apiURL()}/search`,{
                search
            })
            return res.payload
        } catch (error) {
            throw Error(error)
        }
    }
)

export const jobsPostsFeedSlice = createSlice( {
    name: "jobsPostFeed",
    initialState: [],
    reducers: {
    },
    extraReducers: {
        [fetchAllJobsPosts.fulfilled]: (state, action) => action.payload,
        [fetchJobsPostsSearch.fulfilled]: (state, action) => action.payload
    }
})

export const selectJobsPosts = state => state.jobsPosts
export default jobsPostsFeedSlice.reducer 