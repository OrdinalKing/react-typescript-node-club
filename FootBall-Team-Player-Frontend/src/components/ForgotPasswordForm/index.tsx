import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as authActions from 'src/redux/auth/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
  fortgot: {
    marginTop: '2px',
  },
  buttonProgress: {
    color: 'primary',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -12,
  },
}));

const ForgotPasswordForm: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    dispatch(
      authActions.signInRequest({
        email,
        password: '',
      })
    );
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          required
          fullWidth
          label="Email"
          name="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
          type="submit"
          size="large"
          disabled={!email}
        >
          Send Link
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
