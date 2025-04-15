import Routes from 'components/routes/index';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ScrollToTop from 'plugins/ScrollToTop';

const App = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes />
    <Footer />
  </>
);

export default App;
