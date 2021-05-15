import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './RootReducer';
import RootInitial from './InitialState';

export const history = createBrowserHistory({
  basename: '/'
});

const enhancers = [];

const middlewares = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  if (typeof devtools === 'function') {
    enhancers.push(devtools());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  createRootReducer(history),
  RootInitial,
  composedEnhancers
);

history.listen(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: 'smooth'
  });
});

export default store;
