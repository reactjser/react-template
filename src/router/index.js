import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import PieChart from '../views/PieChart';

export default [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="about" path="/about" component={About} />,
  <Route key="pieChart" path="/pie-chart" component={PieChart} />,
];
