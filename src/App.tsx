import React from 'react';

import ReadOnlyCount from './components/ReadOnlyCount';
import ReadWriteCount from './components/ReadWriteCount';
import CountInput from './components/CountInput';

import './App.css';

function App() {
  return (
    <div className="App">
      <CountInput />
      <ReadOnlyCount />
      <ReadWriteCount />
    </div>
  );
}

export default App;
