import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import authenticationReducer from '../features/Authentication/authenticationSlice' 
import jobsPostFeedReducer from '../features/JobsBoard/jobsPostSlice'
import loadingReducer from '../features/Loading/loadingSlice'
import errorReducer from '../features/Error/errorSlice'

export default configureStore({
  reducer: {
      currentUserSession: authenticationReducer,
      jobsPostFeed: jobsPostFeedReducer,
      loading: loadingReducer,
      error: errorReducer

  },
  middleware: [...getDefaultMiddleware(), logger],
});
