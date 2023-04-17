import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import HouseContextProvidor from './components/HouseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvidor>
    <Router>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Router>
  </HouseContextProvidor>
);
