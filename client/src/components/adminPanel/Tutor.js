import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Tutor.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminTutor = (props, { setAuth }) => {

    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "admin-tutor";

    return (
        <Fragment>

            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />

                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">

                        <div class="col-12">
                            <div class="card card-tutor mb-4 pb-4">
                                <div class="card-header card-tutor-header pb-1">
                                    <h6 className="text-uppercase card-tutor-header-text">Tutor(s)</h6>

                                    <button type="button" class="btn-add-tutor btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Tutor
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header modal-tutor-header">
                                                    <h5 class="modal-title modal-title-tutor fw-bold" id="staticBackdropLabel">Enter Tutor Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form >
                                                    <div className="modal-body">
                                                        <div className="row">

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" name="tutorFirstName" className="form-control input-tutorFirstName" id="floatingTutorFirstName" required />
                                                                    <label for="floatingFirstName">First Name</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" name="tutorLastName" className="form-control input-tutorLastName" id="floatingTutorLastName" required />
                                                                    <label for="floatingLastName">Last Name</label>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" name="tutorStateName" className="form-control input-tutorStateName" id="floatingTutorStateName" required />
                                                                    <label for="floatingStateName">State</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" name="tutorCityName" className="form-control input-tutorCityName" id="floatingTutorCityName" required />
                                                                    <label for="floatingCityName">City</label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating ">
                                                                <input type="email" name="tutorEmail" className="form-control input-tutorEmail" id="floatingTutorEmail"
                                                                    required />
                                                                <label for="floatingEmail">Email ID</label>
                                                            </div>

                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating ">
                                                                <input type="password" name="password" className="form-control input-tutorPassword" id="floatingTutorPassword"
                                                                    required />
                                                                <label for="floatingPassword">Password</label>
                                                            </div>
                                                        </div>

                                                        <div className="add-tutor-done-div">
                                                            <button className="btn btn-success add-tutor-done-button">Done</button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
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

export default AdminTutor;