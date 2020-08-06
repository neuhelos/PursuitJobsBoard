import { createSelector } from 'reselect'

import { selectJobTypesFilter, selectRemoteStatusFilter } from './jobsPostsSearchFilterSlice'
import { selectJobsPosts } from './jobsPostsFeedSlice'


export const selectJobsPostsSearchFilter = createSelector(

  [selectJobTypesFilter, selectRemoteStatusFilter, selectJobsPosts],
  (jobTypeFilter, remoteStatusFilter, jobsPosts) => {
    return jobsPosts = jobsPosts.filter( jobPost => {
      return (
        (jobTypeFilter === 'All' || jobPost.job_type === jobTypeFilter) &&
        (remoteStatusFilter === 'All' || jobPost.remote_status === remoteStatusFilter)
      )
    })
  }

)
