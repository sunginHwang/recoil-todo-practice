import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'; // recoil 추가
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
