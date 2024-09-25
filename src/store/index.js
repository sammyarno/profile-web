import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from './RootReducer';
import RootInitial from './InitialState';

const enhancers = [];

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devtools === 'function') {
    enhancers.push(devtools());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  createRootReducer(),
  RootInitial,
  composedEnhancers,
);

export default store;
