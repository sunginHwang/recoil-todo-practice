import React from 'react';
import ReadOnlyCount from './components/example/ReadOnlyCount';
import ReadWriteCount from './components/example/ReadWriteCount';
import SelectorCount from "./components/example/SelectorCount";
import DelayCount from "./components/example/DelayCount";
import RecoilStarCount from "./components/example/RecoilStarCount";
import './App.css';
import PromiseAtom from "./components/example/PromiseAtom";

function App() {
  return (
    <div className="App">
        {/* atom 예시
        <>
          <ReadWriteCount />
          <ReadOnlyCount />
        </>
        */}
        {/* select 예시 <SelectorCount />*/}
        {/* 비동기 통신 예시 <RecoilStarCount />*/}
        {/* 캐싱 예시 <DelayCount />*/}
        <PromiseAtom />
    </div>
  );
}

export default App;
