import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Link, Typography } from '@material-ui/core';

import LoginForm from 'src/components/LoginForm';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#eee',
    width: theme.spacing(55),
    maxWidth: '100%',
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    marginTop: theme.spacing(30),
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(6, 4, 3, 4),
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  loginForm: {
    marginTop: theme.spacing(3),
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2.5),
  },
}));

const Login: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h5">
            Sign In
          </Typography>
          <LoginForm className={classes.loginForm} />
          <div className={classes.footer}>
            <Link
              align="center"
              color="primary"
              component={RouterLink}
              to="/forgot"
              underline="always"
              variant="subtitle2"
            >
              Forgot Password?
            </Link>
            <Link
              align="center"
              color="primary"
              component={RouterLink}
              to="/register"
              underline="always"
              variant="subtitle2"
            >
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
