import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./TutorSidebar.css";
import { Link } from "react-router-dom";


const TutorSidebar = (props, { setAuth }) => {

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

            <aside class="tutor-sidebar bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">

                <div class="d-flex flex-column flex-shrink-0 p-3">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span class="fs-4 fw-bold sidebar-tutor-text">Tutor Panel</span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            {
                                isActive === "tutor-profile" ?

                                    <Link to="/tutor-profile" className="nav-link active sidebutton link-dark">
                                        Profile
                                    </Link> : <Link to="/tutor-profile" className="nav-link sidebutton link-dark">
                                        Profile
                                    </Link>
                            }

                        </li>

                        <li class="nav-item">
                            {
                                isActive === "tutor-slot" ?

                                    <Link to="/tutor-slot" className="nav-link active sidebutton link-dark">
                                        Slot
                                    </Link> : <Link to="/tutor-slot" className="nav-link sidebutton link-dark">
                                        Slot
                                    </Link>
                            }

                        </li>


                        <li class="nav-item">
                            {
                                isActive === "tutor-session" ?

                                    <Link to="/tutor-session" className="nav-link active sidebutton link-dark">
                                        Session
                                    </Link> : <Link to="/tutor-session" className="nav-link sidebutton link-dark">
                                        Session
                                    </Link>


                            }

                            {/* Note: Sessions listed should be specific to that particular tutor, add session option to be included as well */}
                        </li>


                        <li class="nav-item">
                            {
                                isActive === "tutor-booking" ?

                                    <Link to="/tutor-booking" className="nav-link active sidebutton link-dark">
                                        Booking
                                    </Link> : <Link to="/tutor-booking" className="nav-link sidebutton link-dark">
                                        Booking
                                    </Link>
                            }


                            {/* Note: Customer bookings should be specific to that particular tutor */}
                        </li>

{/* 
                        <li class="nav-item">
                            {
                                isActive === "tutor-reports" ?

                                    <Link to="/tutor-reports" className="nav-link active sidebutton link-dark">
                                        Reports
                                    </Link> : <Link to="/tutor-reports" className="nav-link sidebutton link-dark">
                                        Reports
                                    </Link>
                            } */}

                            {/* Note: Reports generated for a particular tutor*/}
                        {/* </li> */}

                    </ul>

                    <hr class="hr-tutor-logout" />
                    <button className="btn btn-danger" onClick={event => logout(event)}>Log Out</button>
                </div>

            </aside>

        </Fragment>
    );
}

export default TutorSidebar;