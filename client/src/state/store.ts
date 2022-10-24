import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import userReducers from './userSlice';

const reducer = combineReducers({
  user: userReducers,
});

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: mw => mw().concat(logger),
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore);
