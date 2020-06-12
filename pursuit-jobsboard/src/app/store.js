import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import authenticationReducer from '../features/Authentication/authenticationSlice' 
import loadingReducer from '../features/Loading/loadingSlice'

export default configureStore({
  reducer: {
      currentUserSession: authenticationReducer,
      loading: loadingReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
