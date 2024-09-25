import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './containers/App';
import { MEASUREMENT_ID } from './constants';

import './plugins/FontAwesome';
import './styles/index.scss';

// Init GA
ReactGA.initialize(MEASUREMENT_ID);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
