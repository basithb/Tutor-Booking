import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Reports.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import TutorSidebar from "./TutorSidebar";
import { Link } from "react-router-dom";
import TutorNavbar from "./TutorNavbar";

const TutorReports = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "tutor-reports";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <TutorNavbar />
                <TutorSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                   
                </main>


            </body>
        </Fragment>
    )


}

export default TutorReports;