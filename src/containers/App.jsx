import Typed from 'react-typed';
import { Container } from 'react-bootstrap';

import Navbar from '../components/Navbar';

const App = () => (
  <Container className="home">
    <Navbar />
    <div className="content">
      <h1>
        Hello
        <span className="text-primary">.</span>
      </h1>
      <h1>
        My name is Sam
        <span className="text-primary">,</span>
      </h1>
      <h1>
        and I am a
        <span className="ms-3 text-primary">
          <Typed
            strings={['<h2>&lt;b&gt;</h2>Web Engineer<h2>&lt;/b&gt;</h2>']}
            className="typed-wrapper"
            typeSpeed={150}
          />
        </span>
      </h1>
    </div>
  </Container>
);

export default App;
