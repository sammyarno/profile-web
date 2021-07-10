import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import Contact from '../../containers/Contact';
import About from '../../containers/About';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Index;
