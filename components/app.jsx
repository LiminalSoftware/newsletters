import React from 'react';
import StickyHeader from './stickyHeader';
import DefaultTemplate from '../templates/default';

const App = () => {
  return (
    <div>
      <StickyHeader rootSelector="#content-container"/>
      <DefaultTemplate/>
    </div>
  )
};

export default App;
