import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { Team } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import { getTeams } from 'src/redux/team/actions';
import SearchDrawer from './SearchDrawer';

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
      url: 'teams',
      type: 'link',
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
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const teams: Team[] = useSelector<RootState>(
    (state: RootState) => state.team.teams
  ) as Team[];

  useEffect(() => {
    dispatch(getTeams({}));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (teams && teams.length) {
      setTeamList([...teams]);
    }
  }, [teams]);

  const handleOpenSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(true);
  };

  const toggleDrawer = (e: unknown, r: unknown, newState: boolean) => {
    setOpenSearch(newState);
  };

  const handleSearch = (
    e: React.MouseEvent<HTMLButtonElement>,
    filters: any
  ) => {
    dispatch(getTeams(filters));
    setOpenSearch(false);
  };

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.table}>
        <Table
          defaultOrderBy="name"
          columns={columns}
          rows={teamList}
          title="Team"
          showSearch
          handleOpenSearch={handleOpenSearch}
        />
        <SearchDrawer
          state={openSearch}
          toggleDrawer={toggleDrawer}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Home;
