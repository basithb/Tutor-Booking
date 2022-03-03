import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";

const CustomerDashboard = ({ setAuth }) => {


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
            <CustomerNavbar />
            <CustomerSidebar />

        </Fragment>
    )
}

export default CustomerDashboard;