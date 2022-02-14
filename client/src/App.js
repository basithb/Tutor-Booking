
import React, {Fragment, useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
// import { parse } from 'ipaddr.js';

toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }; 

async function isAuth()
{
  try {

    const response = await fetch("http://localhost:5000/auth/verify", {
      method: "GET",
      headers: { token: localStorage.token }
    });

    const parseRes = await response.json();
    
    parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false); // everytime you refresh when you're logged in to the dashboard, it let's you stay on the /dashboard page without taking you to /login.

    
  } catch (error) {
    console.error(error.message);
    
  }
}

  useEffect(() => {
    isAuth();
  })

  

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
          <Route exact path="/login" element = { !isAuthenticated ? (<Login setAuth={setAuth} /> ) : (<Navigate to ="/dashboard"/>)}/>

          <Route exact path="/register" element = { !isAuthenticated ? (<Register setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/dashboard" element = { isAuthenticated ? (<Dashboard setAuth={setAuth} />) :(<Navigate to ="/login"/>)}/>
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
