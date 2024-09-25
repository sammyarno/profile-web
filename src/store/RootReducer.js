import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = () => combineReducers({
  notifications,
});

export default rootReducer;
