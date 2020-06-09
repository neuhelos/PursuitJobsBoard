import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import authenticationReducer from '../features/Authentication/authenticationSlice'

export default configureStore({
  reducer: {
      currentUserSession: authenticationReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
