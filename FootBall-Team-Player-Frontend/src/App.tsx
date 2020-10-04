import React from 'react';
import background from 'src/assets/images/background.jpg';

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
      heello
    </div>
  );
};

export default App;
