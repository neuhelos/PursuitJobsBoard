import { createSlice } from '@reduxjs/toolkit'

import { fetchAllJobsPosts } from '../JobsBoard/jobsPostSlice'

export const errorSlice = createSlice( {
    name: 'error',
    initialState: "",
    extraReducers: {
        [fetchAllJobsPosts.pending]: () => "",
        [fetchAllJobsPosts.rejected] : (action) =>  {
            console.log(action.error)
            return action.error
        }
    }
})

export const selectError = state => state.error
export default errorSlice.reducer