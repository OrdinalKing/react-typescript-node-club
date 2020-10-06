import React from 'react';

import Competition from 'src/components/Competition';
import Topbar from 'src/components/Topbar';

const Home: React.FC<any> = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <Competition />
    </>
  );
};

export default Home;
