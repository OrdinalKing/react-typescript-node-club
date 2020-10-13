import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';

import { Team } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import { Undo } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    opacity: 0.6,
  },
  textLeft: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(1.5),
  },
  avatar: {
    height: 200,
    width: 200,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface IParams {
  teamId: string;
}

const TeamDetail: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { teamId } = useParams<IParams>();

  const [team, setTeam] = useState<Team>({
    _id: '',
    id: '',
    name: '',
    shortName: '',
    tla: '',
    crestUrl: '',
    address: '',
    phone: '',
    website: '',
    email: '',
    founded: 0,
  });

  const teams: Team[] = useSelector<RootState>(
    (state: RootState) => state.team.teams
  ) as Team[];

  useEffect(() => {
    if (teamId && teams.length) {
      const newTeam = teams.find((item) => Number(item.id) === Number(teamId));
      setTeam(newTeam as Team);
    }
  }, [teamId, teams]);

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`Team Detail (${team?.name})`}
        action={
          <IconButton className={classes.button} onClick={handleBack}>
            <Undo />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid container item spacing={4} md={5} xs={12}>
            <div className={classes.textLeft}>
              <Avatar className={classes.avatar} src={team?.crestUrl} />
              <Typography gutterBottom variant="h4">
                {team?.shortName}
              </Typography>
            </div>
          </Grid>
          <Grid container item spacing={4} md={7} xs={12}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="ABBV/tla"
                value={team?.tla}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="Phone"
                value={team?.phone}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="Website"
                value={team?.website}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="Email"
                value={team?.email}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="Address"
                value={team?.address}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TeamDetail;
