import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice( {
    name: 'error',
    initialState: "",
    extraReducers: {
        
    }
})

export const selectError = state => state.error
export default errorSlice.reducer