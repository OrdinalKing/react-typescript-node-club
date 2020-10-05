import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import { RootState } from './redux/rootReducer';
import { User } from './redux/auth/types';

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
      render={(props: any) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes: React.FC<any> = (): JSX.Element => {
  const history = useHistory();

  const user: User = useSelector<RootState>(
    (state: RootState) => state.auth.user
  ) as User;

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgot" exact component={ForgotPassword} />
      <PrivateRoute path="/home" component={Home} isLoggedIn={!!user} />
      <Route path="*" exact render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
