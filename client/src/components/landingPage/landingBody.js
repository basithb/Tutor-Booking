import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

const LandingBody = () => {
    return (
        <Fragment>
            <div className="text-center">
            <h1 className="landing-hero-text">Individual tutoring to reduce confusion and increase motivation </h1>
            <p className="landing-subhero-text"> 1-on-1 tutoring will make school easier and more enjoyable - register now</p>
            <Link to="/register" className="btn btn-primary btn-md ">
                Register
            </Link>
            </div>
            
            <img className="float-bg-absolute" src="https://uploads-ssl.webflow.com/611cb284a5f4f500b86d82e8/61e07deb86cd11cc5bcd72c3_bg-float%20(1)%20(1)-p-1600.png" alt="" />

        </Fragment>
    );
};

export default LandingBody;