import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";

const AdminProfile = (props, { setAuth }) => {


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

    const isActive = "admin-profile";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main class="main-content position-relative border-radius-lg">
                    <div className="container-fluid hello-admin-card py-4">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-body p-4">
                                    <div class="col-8">
                                        <div class="hello-text">
                                            <h5 class="hello-admin-heading">
                                                Hello,
                                            </h5>
                                            <h5 class="hello-heading-adminName fw-bold">
                                                Admin
                                            </h5>
                                            <h5 class="hello-heading-wave">
                                                👋
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </body>

        </Fragment>
    );
}

export default AdminProfile;