import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    
  },
  middleware: [...getDefaultMiddleware(), logger],
});
