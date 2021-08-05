import useViewportSize from '../hooks/ViewportSize';

import Routes from '../components/routes/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import UnderConstruction from './UnderConstruction';

const App = () => {
  const viewportSize = useViewportSize();

  return (
    <>
      {
        process.env.NODE_ENV === 'development' || viewportSize.isDesktop
          ? (
            <>
              <Navbar />
              <Routes />
              <Footer />
            </>
          ) : (
            <UnderConstruction />
          )
      }
    </>
  );
};

export default App;
