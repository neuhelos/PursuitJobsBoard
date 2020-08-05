import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import authenticationReducer from '../features/Authentication/authenticationSlice' 
import jobsPostsFeedReducer from '../features/JobsBoard/jobsPostsFeedSlice'
import jobTypesFilterReducer from '../features/JobsBoard/jobTypesFilterSlice'
import remoteStatusFilterReducer from '../features/JobsBoard/remoteStatusFilterSlice'
import loadingReducer from '../features/Loading/loadingSlice'
import errorReducer from '../features/Error/errorSlice'

export default configureStore({
  reducer: {
      currentUserSession: authenticationReducer,
      jobsPostsFeed: jobsPostsFeedReducer,
      jobTypesFilter: jobTypesFilterReducer,
      remoteStatusFilter: remoteStatusFilterReducer,
      loading: loadingReducer,
      error: errorReducer

  },
  middleware: [...getDefaultMiddleware(), logger],
});
