import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';

import { Player } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import { Undo } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    opacity: 0.6,
  },
  textLeft: {
    width: '50%',
    marginLeft: '35%',
  },
  textRight: {
    width: '50%',
    marginLeft: '15%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface IParams {
  playerId: string;
}

const TeamDetail: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { playerId } = useParams<IParams>();

  const [player, setPlayer] = useState<Player>();

  const players: Player[] = useSelector<RootState>(
    (state: RootState) => state.player.players
  ) as Player[];

  useEffect(() => {
    if (playerId && players.length) {
      const newPlayer = players.find(
        (item) => Number(item.id) === Number(playerId)
      );
      setPlayer(newPlayer as Player);
    }
  }, [playerId, players]);

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`Player Detail: ${player?.name}`}
        action={
          <IconButton className={classes.button} onClick={handleBack}>
            <Undo />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textLeft}
              disabled
              size="small"
              label="Name"
              value={player?.name}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textRight}
              disabled
              size="small"
              label="Position"
              value={player?.position}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textLeft}
              disabled
              size="small"
              label="Date of Birth"
              value={String(player?.dateOfBirth).split('T')[0]}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textRight}
              disabled
              size="small"
              label="Country of Birth"
              value={player?.countryOfBirth}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textLeft}
              disabled
              size="small"
              label="Nationality"
              value={player?.nationality}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.textRight}
              disabled
              size="small"
              label="Shirt Number"
              value={player?.shirtNumber}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TeamDetail;
