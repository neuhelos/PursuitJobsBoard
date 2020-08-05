import { createSlice } from '@reduxjs/toolkit'

const jobPostsSearchFilterSlice = createSlice({
  name: 'jobPostsSearchFilter',
  initialState: {
    jobTypesFilter: 'All',
    remoteStatusFilter: 'All'
  },
  reducers: {
    setJobTypesFilter(state, action) {
      state.jobTypesFilter = action.payload
    },
    setRemoteStatusFilter(state, action) {
      state.remoteStatusFilter = action.payload
    },
  }
})

export const { setJobTypesFilter, setRemoteStatusFilter } = jobPostsSearchFilterSlice.actions
export const selectJobTypesFilter = state => state.jobTypesFilter
export const selectRemoteStatusFilter = state => state.remoteStatusFilter
export default jobPostsSearchFilterSlice.reducer
