import React from 'react';
import { useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { Team } from 'src/models';
import { RootState } from 'src/redux/rootReducer';

const Home: React.FC<any> = (): JSX.Element => {
  const columns = ['id', 'name', 'shortName', 'tla', 'date'];

  const teams: Team[] = useSelector<RootState>(
    (state: RootState) => state.team.teams
  ) as Team[];

  return (
    <>
      <Topbar />
      {/* <Table
        defaultSortField="name"
        columns={columns}
        rows={teams}
        title="Teams"
      /> */}
    </>
  );
};

export default Home;
