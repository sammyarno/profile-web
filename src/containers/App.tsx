import ScrollToTop from 'plugins/ScrollToTop';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Routes from 'components/routes/index';

const App = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes />
    <Footer />
  </>
);

export default App;
