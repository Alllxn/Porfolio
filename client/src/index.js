import React from 'react'; //aqui coge el react
import ReactDOM from 'react-dom'; // aqui el doom
import './index.css'; //aqui el css
import App from './App'; //aqui el js de app de donde esta el html
import reportWebVitals from './reportWebVitals'; //los vitales que ni idea

ReactDOM.render(
  // metemos el html del js src/app.js dentro de root en client/index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
