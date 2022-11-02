import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userReducers from './userSlice';

const reducer = combineReducers({
  user: userReducers,
});

export const makeStore = configureStore({
  reducer,
  middleware: mw => mw().concat(logger),
});
