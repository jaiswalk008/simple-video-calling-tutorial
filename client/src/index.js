import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { SocketContextProvider } from './context/socketProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><SocketContextProvider><App /></SocketContextProvider></BrowserRouter>
  </React.StrictMode>
);

