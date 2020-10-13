import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import TeamDetail from 'src/components/TeamDetail';
import Topbar from 'src/components/Topbar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  detail: {
    marginTop: theme.spacing(20),
  },
}));

const TeamDetailPage: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.detail}>
        <TeamDetail />
      </div>
    </div>
  );
};

export default TeamDetailPage;
