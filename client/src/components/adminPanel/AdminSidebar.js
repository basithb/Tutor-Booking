import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AdminSidebar.css";
import { Link } from "react-router-dom";


const AdminSidebar = (props, { setAuth }) => {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  async function getName() {
    try {

      const response = await fetch("http://localhost:5000/dashboard",
        {
          method: "GET",
          headers: { token: localStorage.token }
        });

      const parseRes = await response.json();

      // if (parseRes.user_type === "admin") {
      //     setFirstName("Admin");
      //     setLastName("");
      // }

      // else if (parseRes.user_type === "customer") {

      //     setFirstName(parseRes.customer_firstname);
      //     setLastName(parseRes.customer_lastname);
      // }

    } catch (error) {
      console.error(error.message);
    }
  }

  //logout() function
  const logout = async (event) => {

    event.preventDefault();
    localStorage.removeItem("token");
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
            <li class="nav-item">
              <a href="#" class="nav-link active link-dark">
                Customers
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                Tutors
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                Session
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                Slot
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                Bookings
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
                Reports
              </a>
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