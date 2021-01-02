import React from 'react';

import ReadOnlyCount from './components/ count/example/ReadOnlyCount';
import ReadWriteCount from './components/ count/example/ReadWriteCount';

import './App.css';
import RecoilStarCount from "./components/ count/RecoilStarCount";

function App() {
  return (
    <div className="App">
      <ReadOnlyCount />
      <ReadWriteCount />
      <React.Suspense fallback={<div>loading</div>} >
        <RecoilStarCount />
      </React.Suspense>
    </div>
  );
}

export default App;
