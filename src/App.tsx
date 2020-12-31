import React, { Suspense } from 'react';

import ReadOnlyCount from './components/ count/ReadOnlyCount';
import ReadWriteCount from './components/ count/ReadWriteCount';
import CountInput from './components/ count/CountInput';

import './App.css';
import RecoilStarCount from "./components/ count/RecoilStarCount";

function App() {
  return (
    <div className="App">
      <CountInput />
      <ReadOnlyCount />
      <ReadWriteCount />
      <Suspense fallback={<div>로딩중 입니다.</div>}>
        <RecoilStarCount />
      </Suspense>
    </div>
  );
}

export default App;
