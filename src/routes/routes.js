import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import store from '../../store/index';
import NotFound from '../views/NotFound';
import signUpPage from '../views/Signup/SignUp';
import Modules from '../views/Modules/modules';

const Routes = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={signUpPage} />
      <Route path="/modules" component={Modules} />
      <Route component={NotFound} />
    </Switch>
  </Provider>
);

export default Routes;
