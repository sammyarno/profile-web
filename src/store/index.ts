import { configureStore } from '@reduxjs/toolkit';

import createRootReducer from './RootReducer';
import RootInitial from './InitialState';

const isDev = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: createRootReducer(),
  preloadedState: RootInitial,
  devTools: isDev,
});

export default store;
