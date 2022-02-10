import React, { Fragment } from "react";
import "./App.css";

import {Router, Route, Redirect} from "react-router-dom";

//Importing Components

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";


function App(){
    return(
    <Fragment>
        <Router>
            <div className="container">
                <Route exact path ="/login" render={props => <Login {...props} />} />

                <Route exact path ="/register" render={props => <Register {...props} />} />

                <Route exact path ="/dashboard" render={props => <Dashboard {...props} />} />
                
            </div>
        </Router>
    </Fragment>
    );
}