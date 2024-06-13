import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainChicdudes from './pages/MainChicdudes/MainChicdudes';
import Honories from './pages/Honories/Honories';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainChicdudes />} />
          <Route path='/honories' element={<Honories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
