import React from 'react';

import ReadOnlyCount from './components/ReadOnlyCount';
import ReadWriteCount from './components/ReadWriteCount';

import './App.css';

function App() {
  return (
    <div className="App">
      <ReadOnlyCount />
      <ReadWriteCount />
    </div>
  );
}

export default App;
