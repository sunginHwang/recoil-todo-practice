import React from 'react';
import ReadOnlyCount from './components/example/ReadOnlyCount';
import ReadWriteCount from './components/example/ReadWriteCount';
import SelectorCount from "./components/example/SelectorCount";
import DelayCount from "./components/example/DelayCount";
import RecoilStarCount from "./components/example/RecoilStarCount";
import './App.css';
import PromiseAtom from "./components/example/PromiseAtom";
import SuspenseAsync from "./components/study/SuspenseAsync";

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
        <>
            <React.Suspense fallback={<div>폴백로딩</div>} >
                <SuspenseAsync useSuspense={false} />
            </React.Suspense>
            <SuspenseAsync useSuspense />
        </>
    </div>
  );
}

export default App;
