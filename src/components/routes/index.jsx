import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import Contact from '../../containers/Contact';
import About from '../../containers/About';
import Projects from '../../containers/Projects';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);

export default Index;
