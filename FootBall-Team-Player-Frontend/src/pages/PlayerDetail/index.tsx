import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import PlayerDetail from 'src/components/PlayerDetail';
import Topbar from 'src/components/Topbar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  detail: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(20),
  },
}));

const PlayerDetailPage: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.detail}>
        <PlayerDetail />
      </div>
    </div>
  );
};

export default PlayerDetailPage;
