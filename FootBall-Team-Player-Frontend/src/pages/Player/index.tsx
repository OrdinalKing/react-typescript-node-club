import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { Team } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import { getTeams } from 'src/redux/team/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  table: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(2),
  },
}));

const Home: React.FC<any> = (): JSX.Element => {
  const columns = [
    {
      header: 'ID',
      field: 'id',
      sortable: true,
      width: 100,
    },
    {
      header: 'Name',
      field: 'name',
      sortable: true,
      width: 300,
    },
    {
      header: '',
      field: 'crestUrl',
      width: 80,
      type: 'image',
    },
    {
      header: 'Short Name',
      field: 'shortName',
      sortable: true,
      width: 150,
    },
    {
      header: 'ABBV(tla)',
      field: 'tla',
      sortable: true,
      width: 100,
    },
    {
      header: 'Founded Date',
      field: 'founded',
      sortable: true,
      width: 200,
    },
  ];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [teamList, setTeamList] = useState<Team[]>([]);

  const teams: Team[] = useSelector<RootState>(
    (state: RootState) => state.team.teams
  ) as Team[];

  useEffect(() => {
    dispatch(getTeams(''));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (teams && teams.length) {
      setTeamList([...teams]);
    }
  }, [teams]);

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.table}>
        <Table defaultOrderBy="name" columns={columns} rows={teamList} />
      </div>
    </div>
  );
};

export default Home;
