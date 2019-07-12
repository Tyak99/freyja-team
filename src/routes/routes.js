import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import ResetPassword from '../views/ResetPassword/ResetPassword';
import Login from '../views/login';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
