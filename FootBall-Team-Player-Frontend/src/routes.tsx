import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import { getToken } from './utils/localStorage';

interface PrivateRouteProp {
  component: React.FC;
  isLoggedIn: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProp> = ({
  component: Component,
  isLoggedIn,
  path,
}: PrivateRouteProp): JSX.Element => {
  return (
    <Route
      path={path}
      exact
      render={() => (isLoggedIn ? <Component /> : <Redirect to={path} />)}
    />
  );
};

const Routes: React.FC<any> = (): JSX.Element => {
  const isLoggedIn = getToken();

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgot" exact component={ForgotPassword} />
      <PrivateRoute path="/home" component={Home} isLoggedIn={!!isLoggedIn} />
      <Route path="*" exact render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
