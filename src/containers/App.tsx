import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from 'plugins/ScrollToTop';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Routes from 'components/routes/index';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
