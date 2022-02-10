
import React, {Fragment} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 

// Importing Components

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
          <Route exact path="/login" element = { <Login />}/>
          <Route exact path="/register" element = { <Register />}/>
          <Route exact path="/dashboard" element = { <Dashboard />}/>
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
