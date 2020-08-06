import { createSlice } from '@reduxjs/toolkit'

const jobPostsSearchFilterSlice = createSlice({
  name: 'jobsPostsSearchFilter',
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
export const selectJobTypesFilter = state => state.jobsPostsSearchFilter.jobTypesFilter
export const selectRemoteStatusFilter = state => state.jobsPostsSearchFilter.remoteStatusFilter
export default jobPostsSearchFilterSlice.reducer
