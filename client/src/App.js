
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
import Landing from './components/landingPage/Landing';

// Importing Admin Components

import AdminProfile from './components/adminPanel/AdminDashboard';
import AdminCustomer from './components/adminPanel/Customer';
import AdminTutor from './components/adminPanel/Tutor';
import AdminCategory from './components/adminPanel/Category';
import AdminSubject from './components/adminPanel/Subject';
import AdminSlot from './components/adminPanel/Slot';
import AdminSession from './components/adminPanel/Session';
import AdminBooking from './components/adminPanel/Booking';
import AdminReports from './components/adminPanel/Reports';

// Importing Customer Components

import CustomerProfile from './components/customerPanel/CustomerDashboard';
import CustomerSession from './components/customerPanel/Session';
import CustomerBooking from './components/customerPanel/Booking';
import CustomerCard from './components/customerPanel/Card';

//Importing Tutor Components

import TutorProfile from './components/tutorPanel/TutorDashboard';
import TutorSlot from './components/tutorPanel/Slot';
import TutorSession from './components/tutorPanel/Session';
import TutorBooking from './components/tutorPanel/Booking';
import TutorReports from './components/tutorPanel/Reports';


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

        
          <Routes>

          {/* Common Routes */}

          <Route exact path="/" element = { isAuthenticated ? (<Navigate to ="/"/>) : (<Landing setAuth={!setAuth} />)}/>

          <Route exact path="/login" element = { !isAuthenticated ? (<Login setAuth={setAuth} /> ) : (<Navigate to ="/dashboard"/>)}/>


          <Route exact path="/register" element = { !isAuthenticated ? (<Register setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/dashboard" element = { isAuthenticated ? (<Dashboard setAuth={setAuth} />) :(<Navigate to ="/login"/>)}/>


          {/* Admin Routes */}

          <Route exact path="/admin-profile" element = { isAuthenticated ? (<AdminProfile setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-customer" element = { isAuthenticated ? (<AdminCustomer setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-tutor" element = { isAuthenticated ? (<AdminTutor setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-subject" element = { isAuthenticated ? (<AdminSubject setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-category" element = { isAuthenticated ? (<AdminCategory setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-slot" element = { isAuthenticated ? (<AdminSlot setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-session" element = { isAuthenticated ? (<AdminSession setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          
          <Route exact path="/admin-booking" element = { isAuthenticated ? (<AdminBooking setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/admin-reports" element = { isAuthenticated ? (<AdminReports setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>


          {/* Customer Routes */}

          <Route exact path="/customer-profile" element = { isAuthenticated ? (<CustomerProfile setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/customer-session" element = { isAuthenticated ? (<CustomerSession setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          
          <Route exact path="/customer-booking" element = { isAuthenticated ? (<CustomerBooking setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>

          <Route exact path="/customer-card" element = { isAuthenticated ? (<CustomerCard setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>


          {/* Tutor Routes */}

          <Route exact path="/tutor-profile" element = { isAuthenticated ? (<TutorProfile setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          <Route exact path="/tutor-slot" element = { isAuthenticated ? (<TutorSlot setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          <Route exact path="/tutor-session" element = { isAuthenticated ? (<TutorSession setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          <Route exact path="/tutor-booking" element = { isAuthenticated ? (<TutorBooking setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>
          <Route exact path="/tutor-reports" element = { isAuthenticated ? (<TutorReports setAuth={setAuth} />) : (<Navigate to ="/login"/>) }/>




       
          </Routes>
       
        
      </Router>
    </Fragment>
  );
}

export default App;
