import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

// interface IProps {
//   logout: boolean;
// }

const Routes: React.FC<any> = (): JSX.Element => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const loggedIn = useSelector((state: RootState) => state.authReducer.user);

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgot" exact component={ForgotPassword} />
      <Route path="*" exact render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
