import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Customer.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminCustomer = (props, { setAuth }) => {

    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "admin-customer";

    return (
        <Fragment>

            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />

                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">

                        <div class="col-12">
                            <div class="card card-customer mb-4 pb-4">
                                <div class="card-header card-customer-header pb-1">
                                    <h6 className="text-uppercase">Customer(s)</h6>

                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">First Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Last Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">State</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">City</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Clifford</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">George</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">cliffy@gmail.com</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">Kerala</span>
                                                    </td>

                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Kochi</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
                                                    </td>

                                                </tr>

                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Allen</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Joseph</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">allen@gmail.com</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">Kerala</span>
                                                    </td>

                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Kochi</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-success btn btn-sm">Activate</button>
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
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

export default AdminCustomer;