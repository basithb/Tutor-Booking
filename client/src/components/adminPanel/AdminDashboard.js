import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";


const AdminDashboard = ({ setAuth }) => {

    //  //displaying states
    //  const [name, setName] = useState("")

    async function getName() {
        try {

            const response = await fetch("http://localhost:5000/dashboard",
                {
                    method: "GET",
                    headers: { token: localStorage.token }
                });

            const parseRes = await response.json();

            //  setName(parseRes.user_name);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getName();
    }, []);


    return (
        <Fragment>
            <AdminNavbar />
            <AdminSidebar />

        </Fragment>
    )
}

export default AdminDashboard;