import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Index;
