import React from 'react';
import Home from '@pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import PortfolioItem from '@pages/portfolioItem/PortfolioItem';
import AgencyWorkItem from '@pages/agencyWorkItem/AgencyWorkItem';
import Portfolio from '@pages/portfolio/Portfolio';
import AgencyWork from '@pages/agencyWork/AgencyWork';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioItem />} />
        <Route path="/agency-work" element={<AgencyWork />} />
        <Route path="/agency-work/:slug" element={<AgencyWorkItem />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
