import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { APIURL } from '../../utilitron/APIURL'

const apiURL = APIURL()

export const fetchAllJobsPosts = createAsyncThunk(
    'post/fetchAllJobsPosts',
    async () => {
        try {
            const res = await axios.get(`${apiURL}/jobs`)
            return res.payload.reverse()
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
        [fetchAllJobsPosts.fulfilled]: (state, action) => action.payload
    }
})

export const selectJobsPosts = state => state.jobsPosts
export default jobsPostsFeedSlice.reducer 