import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authActions from '../redux/auth/actions';

const Login: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onHandleLogin = () => {
    dispatch(
      authActions.signInRequest({
        firstname: 'first',
        lastname: 'last',
        email,
        password,
      })
    );
  };

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button type="button" onClick={onHandleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
