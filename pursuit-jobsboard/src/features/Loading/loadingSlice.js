import { createSlice } from '@reduxjs/toolkit'

import { fetchAllJobsPosts } from '../JobsBoard/jobsPostsFeedSlice'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        toggleLoading: (state, action) => !state
    },
    extraReducers: {
        [fetchAllJobsPosts.pending] : () => true,
        [fetchAllJobsPosts.fulfilled] : () => false,
        [fetchAllJobsPosts.rejected] : () => false
    }
})

export const selectLoading = state => state.loading
export const { toggleLoading } = loadingSlice.actions
export default loadingSlice.reducer