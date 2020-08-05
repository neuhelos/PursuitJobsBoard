import { createSlice } from '@reduxjs/toolkit'

const jobTypesFilterSlice = createSlice({
  name: 'jobTypeStatusFilter',
  initialState: 'All',
  reducers: {
    setJobTypeStatusFilter(state, action) {
      return action.payload
    }
  }
})

export const { setJobTypeStatusFilter } = jobTypesFilterSlice.actions

export default jobTypesFilterSlice.reducer
