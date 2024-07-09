import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Add from './Add';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h1>Pinventory</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <h2>Disney Pin Collection Management</h2>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view" component={View} />
          <Route path="/add" component={Add} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
