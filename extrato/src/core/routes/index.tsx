import React from 'react';
import {Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../presentation/Home';
import Extrato from '../../presentation/Extrato';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
          <Route path="/" element={<Home />} />
          <Route path="/extrato" element={<Extrato />} />
      </Router>
    </BrowserRouter>
   
  );
};

export default Routes;