import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App id="root" />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App1 id="myVideo" />
//   </React.StrictMode>,
//   document.getElementById('myVideo')
// );