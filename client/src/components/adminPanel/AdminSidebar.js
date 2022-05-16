import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AdminSidebar.css";
import { Link } from "react-router-dom";


const AdminSidebar = (props, { setAuth }) => {

  async function getName() {
    try {

      const response = await fetch("http://localhost:5000/dashboard",
        {
          method: "GET",
          headers: { token: localStorage.token }
        });

      const parseRes = await response.json();

    } catch (error) {
      console.error(error.message);
    }
  }

  //logout() function
  const logout = async (event) => {

    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("customer_id");
    localStorage.removeItem("id");
    localStorage.removeItem("user_type");
    setAuth(false);
    toast.success("Logged Out Successfully", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  useEffect(() => {
    getName();
  }, []);

  const isActive = props.isActive;

  return (
    <Fragment>

      <aside class="admin-sidebar bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">

        <div class="d-flex flex-column flex-shrink-0 p-3">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span class="fs-4 fw-bold sidebar-admin-text">Admin Panel</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              {
                isActive === "admin-profile" ?

                  <Link to="/admin-profile" className="nav-link active sidebutton link-dark">
                    Profile
                  </Link> : <Link to="/admin-profile" className="nav-link sidebutton link-dark">
                    Profile
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "admin-customer" ?

                  <Link to="/admin-customer" className="nav-link active sidebutton link-dark">
                    Customers
                  </Link> : <Link to="/admin-customer" className="nav-link sidebutton link-dark">
                    Customers
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "admin-tutor" ?

                  <Link to="/admin-tutor" className="nav-link active sidebutton link-dark">
                    Tutors
                  </Link> : <Link to="/admin-tutor" className="nav-link sidebutton link-dark">
                    Tutors
                  </Link>

              }

            </li>


            <li className="nav-item">
              {
                isActive === "admin-category" ?

                  <Link to="/admin-category" className="nav-link active sidebutton link-dark">
                    Category
                  </Link> : 
                  
                  <Link to="/admin-category" className="nav-link sidebutton link-dark">
                    Category
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "admin-subject" ?

                  <Link to="/admin-subject" className="nav-link active sidebutton link-dark">
                    Subject
                  </Link> : 
                  
                  <Link to="/admin-subject" className="nav-link sidebutton link-dark">
                    Subject
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "admin-slot" ?

                  <Link to="/admin-slot" className="nav-link active sidebutton link-dark">
                    Slot
                  </Link> : <Link to="/admin-slot" className="nav-link sidebutton link-dark">
                    Slot
                  </Link>
              }

            </li>
            
            <li className="nav-item">
              {
                isActive === "admin-session" ?

                  <Link to="/admin-session" className="nav-link active sidebutton link-dark">
                    Session
                  </Link> : <Link to="/admin-session" className="nav-link sidebutton link-dark">
                    Session
                  </Link>
              }

            </li>

           
            
            <li className="nav-item">
              {
                isActive === "admin-booking" ?

                  <Link to="/admin-booking" className="nav-link active sidebutton link-dark">
                    Booking
                  </Link> : <Link to="/admin-booking" className="nav-link sidebutton link-dark">
                    Booking
                  </Link>
              }

            </li>
         
            <li className="nav-item">
              {
                isActive === "admin-reports" ?

                  <Link to="/admin-reports" className="nav-link active sidebutton link-dark">
                    Reports
                  </Link> : <Link to="/admin-reports" className="nav-link sidebutton link-dark">
                    Reports
                  </Link>
              }

            </li>
          </ul>

          <hr class="hr-admin-logout" />
          <button className="btn btn-danger" onClick={event => logout(event)}>Log Out</button>
        </div>

      </aside>

    </Fragment>
  );
}

export default AdminSidebar;