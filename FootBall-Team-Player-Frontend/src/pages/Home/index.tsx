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
  updateCompetition,
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

interface CompetitionExtendar extends Competition {
  actionTitle: string;
  actionColor: string;
  actionHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    competition: CompetitionExtendar
  ) => void;
}

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
    {
      header: '',
      field: 'action',
      width: 300,
      type: 'action',
    },
  ];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [, setOpenSearch] = useState<boolean>(false);
  const [competitionList, setCompetitonList] = useState<CompetitionExtendar[]>(
    []
  );

  const competitions: Competition[] = useSelector<RootState>(
    (state: RootState) => state.competition.competitions
  ) as Competition[];

  const savedOnes: Competition[] = useSelector<RootState>(
    (state: RootState) => state.competition.storedCompetitons
  ) as Competition[];

  const handleUpdateCompetition = (
    e: React.MouseEvent<HTMLButtonElement>,
    competitionExtendar: CompetitionExtendar
  ) => {
    e.preventDefault();
    dispatch(
      updateCompetition({
        // eslint-disable-next-line no-underscore-dangle
        _id: competitionExtendar._id,
        id: competitionExtendar.id,
        name: competitionExtendar.name,
        code: competitionExtendar.code,
        startDate: competitionExtendar.startDate,
        endDate: competitionExtendar.endDate,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCompetitions());
    dispatch(getCompetitions());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const newCompetitionList: CompetitionExtendar[] = [];
    competitions.forEach((competition) => {
      const isSaved =
        savedOnes.findIndex((item) => item.id === competition.id) > -1;
      newCompetitionList.push({
        ...competition,
        actionTitle: isSaved ? 'Update' : 'Import',
        actionColor: isSaved ? 'primary' : 'secondary',
        actionHandler: handleUpdateCompetition,
      });
    });
    setCompetitonList(newCompetitionList);
    // eslint-disable-next-line
  }, [competitions, savedOnes]);

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
