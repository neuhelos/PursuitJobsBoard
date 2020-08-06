import { createSelector } from 'reselect'

import { selectJobTypesFilter, selectRemoteStatusFilter } from './jobsPostsSearchFilterSlice'
import { selectJobsPosts } from './jobsPostsFeedSlice'


export const selectJobsPostsSearchFilter = createSelector(

  [selectJobTypesFilter, selectRemoteStatusFilter, selectJobsPosts],
  (jobTypeFilter, remoteStatusFilter, jobsPosts) => {
    jobsPosts = jobsPosts.filter( jobPost => {
      
      return (
        (jobPost.job_type === 'All' || jobPost.job_type === jobTypeFilter) &&
        (jobPost.remote_status === 'All' || jobPost.remote_status === remoteStatusFilter)
      )
    })
  }

)
