import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

import ProfileForm from 'src/components/ProfileForm';

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
    marginTop: theme.spacing(20),
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
  profileForm: {
    marginTop: theme.spacing(3),
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2.5),
  },
}));

const Register: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h5">
            Profile
          </Typography>
          <ProfileForm className={classes.profileForm} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
