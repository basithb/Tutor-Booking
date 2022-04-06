import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import "./CustomerSidebar.css";

const CustomerSidebar = (props, { setAuth }) => {

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

            <aside class="customer-sidebar bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">

                <div class="d-flex flex-column flex-shrink-0 p-3">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span class="fs-4 fw-bold sidebar-customer-text">Customer Panel</span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            {
                                isActive === "customer-profile" ?

                                    <Link to="/customer-profile" className="nav-link active sidebutton link-dark">
                                        Profile
                                    </Link> : <Link to="/customer-profile" className="nav-link sidebutton link-dark">
                                        Profile
                                    </Link>
                            }

                        </li>

                        <li>

                            {
                                isActive === "customer-card" ?

                                    <Link to="/customer-card" className="nav-link active sidebutton link-dark">
                                        Add Card
                                    </Link> : <Link to="/customer-card" className="nav-link sidebutton link-dark">
                                        Add Card
                                    </Link>
                            }
                        </li>

                        <li class="nav-item">
                            {
                                isActive === "customer-session" ?

                                    <Link to="/customer-session" className="nav-link active sidebutton link-dark">
                                        Find Sessions
                                    </Link> : <Link to="/customer-session" className="nav-link sidebutton link-dark">
                                        Find Sessions
                                    </Link>
                            }
                        </li>
                        <li>

                            {
                                isActive === "customer-booking" ?

                                    <Link to="/customer-booking" className="nav-link active sidebutton link-dark">
                                        Bookings
                                    </Link> : <Link to="/customer-booking" className="nav-link sidebutton link-dark">
                                        Bookings
                                    </Link>
                            }
                        </li>

                    </ul>

                    <hr class="hr-customer-logout" />
                    <button className="btn btn-danger" onClick={event => logout(event)}>Log Out</button>
                </div>

            </aside>

        </Fragment>
    );
}

export default CustomerSidebar;