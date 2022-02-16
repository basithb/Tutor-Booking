import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingBody from "./landingBody";
import { render } from "react-dom";


const Landing = () => {
    
        return (
            <Fragment>
            <Navbar/>
            <LandingBody/>
            <Footer/>
            </Fragment>
        )
    }



export default Landing;
