import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Topbar from 'src/components/Topbar';
import { RootState } from 'src/redux/rootReducer';
import { fetchCompetition } from 'src/redux/competition/actions';

const Home: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const competitions = useSelector<RootState>(
    (state) => state.competition.competitions
  );

  useEffect(() => {
    dispatch(fetchCompetition());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Topbar />
    </>
  );
};

export default Home;
