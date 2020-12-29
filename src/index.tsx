import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DebugObserver from './debug/DebugOpserver';

const app = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilizeDebugger root={app} />
      <DebugObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
