import React from 'react';
import { HashRouter as Router, NavLink, Switch } from 'react-router-dom';
import Routes from './router';

const App = () => {
  return (
    <Router>
      <div id="nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
      </div>

      <Switch>{Routes}</Switch>
    </Router>
  );
};

export default App;
