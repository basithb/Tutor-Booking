import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import './landingPage/Landing.css';

const Navbar = () => {
    return (
        <Fragment>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-center">
                    <div class="container-fluid my-2 px-5 ">
                       
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            tutor'd
                            <img src="../img/brand-logo.svg" alt="" width="" height="" />
                        </a>
                        <div
                            class="collapse navbar-collapse justify-content-center mx-3"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item margin-auto px-3">
                                    <a class="nav-link" aria-current="page" href="#">
                                        Our Tutors
                                    </a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" aria-current="page" href="#">
                                        Our Pricing
                                    </a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" aria-current="page" href="#">
                                        Tutor Platform
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-inline gap-2 d-md-flex">
                            <Link to="/login" className="btn btn-light btn-md mr-2 nav-log-button">
                                Log In
                            </Link>
                            <Link to="/register" className="btn btn-primary btn-md mr-2 nav-reg-button">
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar;
