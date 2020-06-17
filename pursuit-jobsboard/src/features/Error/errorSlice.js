import { createSlice } from '@reduxjs/toolkit'

import { fetchAllJobsPosts } from '../JobsBoard/jobsPostSlice'

export const errorSlice = createSlice( {
    name: 'error',
    initialState: "",
    extraReducers: {
        [fetchAllJobsPosts.pending]: () => "",
        [fetchAllJobsPosts.rejected] : (action) =>  action.error.message
    }
})

export const selectError = state => state.error
export default errorSlice.reducer