import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TutorNavbar from "./TutorNavbar";
import TutorSidebar from "./TutorSidebar";

const TutorDashboard = ({ setAuth }) => {


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

    useEffect(() => {
        getName();
    }, []);


    return (
        <Fragment>

            <TutorNavbar />
            <TutorSidebar />

        </Fragment>
    )
}

export default TutorDashboard;