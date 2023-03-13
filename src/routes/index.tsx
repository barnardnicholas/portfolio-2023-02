import React from 'react';
import Home from '@pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import PortfolioItem from '@pages/portfolioItem/PortfolioItem';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/portfolio/:slug" element={<PortfolioItem />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
