import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Contact from 'containers/Contact';
import About from 'containers/About';
import Projects from 'containers/Projects';
import Utilities from 'containers/utilities';

import SplitBill from 'containers/utilities/splitbill/Container';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/utilities" component={Utilities} />

    {/* Utilities */}
    <Route exact path="/utilities/split-bill" component={SplitBill} />
  </Switch>
);

export default Index;
