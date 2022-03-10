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
            <li className="nav-item">
              {
                isActive === "profile" ?

                  <Link to="/profile" className="nav-link active sidebutton link-dark">
                    Profile
                  </Link> : <Link to="/profile" className="nav-link sidebutton link-dark">
                    Profile
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "customer" ?

                  <Link to="/customer" className="nav-link active sidebutton link-dark">
                    Customers
                  </Link> : <Link to="/customer" className="nav-link sidebutton link-dark">
                    Customers
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "tutor" ?

                  <Link to="/tutor" className="nav-link active sidebutton link-dark">
                    Tutors
                  </Link> : <Link to="/tutor" className="nav-link sidebutton link-dark">
                    Tutors
                  </Link>

              }

            </li>


            <li className="nav-item">
              {
                isActive === "category" ?

                  <Link to="/category" className="nav-link active sidebutton link-dark">
                    Category
                  </Link> : 
                  
                  <Link to="/category" className="nav-link sidebutton link-dark">
                    Category
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "subject" ?

                  <Link to="/subject" className="nav-link active sidebutton link-dark">
                    Subject
                  </Link> : 
                  
                  <Link to="/subject" className="nav-link sidebutton link-dark">
                    Subject
                  </Link>
              }

            </li>

            <li className="nav-item">
              {
                isActive === "slot" ?

                  <Link to="/slot" className="nav-link active sidebutton link-dark">
                    Slot
                  </Link> : <Link to="/slot" className="nav-link sidebutton link-dark">
                    Slot
                  </Link>
              }

            </li>
            
            <li className="nav-item">
              {
                isActive === "session" ?

                  <Link to="/session" className="nav-link active sidebutton link-dark">
                    Session
                  </Link> : <Link to="/session" className="nav-link sidebutton link-dark">
                    Session
                  </Link>
              }

            </li>

           
            
            <li className="nav-item">
              {
                isActive === "booking" ?

                  <Link to="/booking" className="nav-link active sidebutton link-dark">
                    Booking
                  </Link> : <Link to="/booking" className="nav-link sidebutton link-dark">
                    Booking
                  </Link>
              }

            </li>
         
            <li className="nav-item">
              {
                isActive === "reports" ?

                  <Link to="/reports" className="nav-link active sidebutton link-dark">
                    Reports
                  </Link> : <Link to="/reports" className="nav-link sidebutton link-dark">
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