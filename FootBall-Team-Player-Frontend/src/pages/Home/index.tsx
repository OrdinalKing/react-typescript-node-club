import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { Competition } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import {
  getCompetitions,
  fetchCompetitions,
} from 'src/redux/competition/actions';

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
      header: 'Name',
      field: 'name',
      sortable: true,
      width: 300,
    },
    {
      header: 'Current Season Start',
      field: 'startDate',
      sortable: true,
      width: 300,
    },
    {
      header: 'Current Season End',
      field: 'endDate',
      sortable: true,
      width: 300,
    },
  ];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [competitionList, setCompetitonList] = useState<Competition[]>([]);
  const [, setOpenSearch] = useState<boolean>(false);

  const competitions: Competition[] = useSelector<RootState>(
    (state: RootState) => state.competition.competitions
  ) as Competition[];

  const savedOnes: Competition[] = useSelector<RootState>(
    (state: RootState) => state.competition.savedCompetitions
  ) as Competition[];

  useEffect(() => {
    dispatch(fetchCompetitions());
    dispatch(getCompetitions());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (competitions && competitions.length) {
      setCompetitonList([...competitions]);
    }
  }, [competitions]);

  useEffect(() => {
    console.log(savedOnes);
  }, [savedOnes]);

  const handleOpenSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(true);
  };

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.table}>
        <Table
          defaultOrderBy="name"
          columns={columns}
          rows={competitionList}
          title="League"
          handleOpenSearch={handleOpenSearch}
        />
      </div>
    </div>
  );
};

export default Home;
