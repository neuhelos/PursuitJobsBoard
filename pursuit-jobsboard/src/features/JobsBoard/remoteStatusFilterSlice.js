import { createSlice } from '@reduxjs/toolkit'

const remoteStatusFilterSlice = createSlice({
    name: 'remoteStatusFilter',
    initialState: 'All',
    reducers: {
        setRemoteStatusFilter(state, action) {
            return action.payload
        }
    }
})

export const { setRemoteStatusFilter } = remotesFilterSlice.actions

export default remoteStatusFilterSlice.reducer
