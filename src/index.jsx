import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ReactGA from 'react-ga4';
import reportWebVitals from './reportWebVitals';
import store, { history } from './store';
import App from './containers/App';
import { MEASUREMENT_ID } from './constants';

import './plugins/FontAwesome';
import './styles/index.scss';

// Init GA
ReactGA.initialize(MEASUREMENT_ID);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
