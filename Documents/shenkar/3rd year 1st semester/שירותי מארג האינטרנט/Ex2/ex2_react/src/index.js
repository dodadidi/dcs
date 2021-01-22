import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import TransportList from './Components/TransportsList';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter as Router } from 'react-router-dom';
//import ReactRouter from './Router/router';
import Truck from './Components/Truck';
import Main from './Components/Main';
//import NewTransport from './Components/NewTransportForm';



ReactDOM.render(
  // <Router>
  //   <ReactRouter/>
  // </Router>,
  <React.StrictMode>
    {/* <NewTransport/> */}
    <Main/>
    <Truck/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
