import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { RootState } from 'src/redux/rootReducer';
import { fetchCompetition } from 'src/redux/competition/actions';
import { Competition } from 'src/redux/competition/types';

const Home: React.FC<any> = (): JSX.Element => {
  const columns = ['name', 'startDate', 'endDate'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetition());
    // eslint-disable-next-line
  }, []);

  const competitions: Competition[] = useSelector<RootState>(
    (state: RootState) => state.competition.competitions
  ) as Competition[];

  return (
    <>
      <Topbar />
      <Table
        defaultSortField="name"
        columns={columns}
        rows={competitions}
        title="Leagues"
      />
    </>
  );
};

export default Home;
