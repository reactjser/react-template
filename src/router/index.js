import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

export default [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="about" path="/about" component={About} />
];
