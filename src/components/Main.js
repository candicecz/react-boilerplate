import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Main;
