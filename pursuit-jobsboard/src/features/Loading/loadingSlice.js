import { createSlice } from '@reduxjs/toolkit'

import { signIn, signOut } from '../../utilitron/firebaseFunctions'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        toggleLoading: (state, action) => !state
    },
    extraReducers: {
        
    }
})


export const selectLoading = state => state.loading

export const { toggleLoading } = loadingSlice.actions
export default loadingSlice.reducer