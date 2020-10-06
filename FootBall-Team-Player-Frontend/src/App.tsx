import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import background from './assets/images/background.jpg';
import Routes from './routes';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1)), url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100vw',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
