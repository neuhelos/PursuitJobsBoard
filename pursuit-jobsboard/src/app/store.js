import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import authenticationReducer from '../features/Authentication/authenticationSlice' 
import jobsPostsFeedReducer from '../features/JobsBoard/jobsPostsFeedSlice'
import jobsPostsSearchFilterReducer from '../features/JobsBoard/jobsPostsSearchFilterSlice'
import loadingReducer from '../features/Loading/loadingSlice'
import errorReducer from '../features/Error/errorSlice'

export default configureStore({
  reducer: {
      currentUserSession: authenticationReducer,
      jobsPostsFeed: jobsPostsFeedReducer,
      jobsPostsSearchFilter: jobsPostsSearchFilterReducer,
      loading: loadingReducer,
      error: errorReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
