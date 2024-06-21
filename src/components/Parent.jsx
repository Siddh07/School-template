// Parent.js
import React from 'react';
import Page from './Parent/Page';
import Background from './Parent/background.jpg'; // Import your background image

const Parent = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <Page />
    </div>
  );
};

export default Parent;
