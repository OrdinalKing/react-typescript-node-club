import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import background from './assets/images/background.jpg';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20, 96, 141, 0.2), rgba(20, 96, 141, 0.1)), url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
