import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import Contact from '../../containers/Contact';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Index;
