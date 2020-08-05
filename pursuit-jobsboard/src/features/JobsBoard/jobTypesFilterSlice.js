import { createSlice } from '@reduxjs/toolkit'

const jobTypesFilterSlice = createSlice({
  name: 'jobTypesFilter',
  initialState: 'All',
  reducers: {
    setJobTypesFilter(state, action) {
      return action.payload
    }
  }
})

export const { setJobTypesFilter } = jobTypesFilterSlice.actions

export default jobTypesFilterSlice.reducer
