import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  notifications,
});

export default rootReducer;
