import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Card, CardHeader, Link } from '@material-ui/core';

import AvatarImg from 'src/assets/images/avatar.jpg';

import MoreButton from './MoreButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: theme.spacing(8),
    display: 'flex',
    color: 'white',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing(3),
  },
  avatar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    marginRight: theme.spacing(2),
    position: 'fixed',
    right: 0,
  },
  username: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
  },
}));

const Topbar: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <Link
          align="center"
          color="inherit"
          component={RouterLink}
          to="/home"
          underline="none"
          variant="h5"
        >
          Home
        </Link>
        <Link
          align="center"
          color="inherit"
          component={RouterLink}
          to="/home"
          underline="none"
          variant="h5"
        >
          Teams
        </Link>
        <Link
          align="center"
          color="inherit"
          component={RouterLink}
          to="/home"
          underline="none"
          variant="h5"
        >
          Players
        </Link>
      </div>
      <Card className={classes.avatar}>
        {/* <Avatar src={AvatarImg} alt="User" />
        <Typography className={classes.username} color="inherit" variant="h6" >
          {user && `${user.firstname} ${user.lastname}`}
        </Typography> */}
        <CardHeader
          title={<Avatar src={AvatarImg} alt="User" />}
          action={<MoreButton />}
        />
      </Card>
    </div>
  );
};

export default Topbar;
