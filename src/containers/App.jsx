import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Hello World !</h1>
    </header>
    <Button variant="primary">
      Primary
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </Button>
  </div>
);

export default App;
