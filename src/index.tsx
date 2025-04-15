import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import MEASUREMENT_ID from './constants';

import './styles/index.scss';

// Init GA
ReactGA.initialize(MEASUREMENT_ID);

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
