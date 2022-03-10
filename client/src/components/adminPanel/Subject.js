import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Subject.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const Subject = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "subject";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                    <div className="container-fluid py-4">

                        <div class="col-11">
                            <div class="card card-subject mb-4 pb-4">
                                <div class="card-header card-subject-header pb-1">
                                    <h6 className="text-uppercase card-subject-header-text">Subject(s)</h6>

                                    <button type="button" class="btn-add-subject btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Subject
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header modal-subject-header">
                                                    <h5 class="modal-title modal-title-subject fw-bold" id="staticBackdropLabel">Enter Subject Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form >
                                                    <div className="modal-body">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="text" name="subjectName" className="form-control input-subjectName" id="floatingSubjectName" required />
                                                                <label for="floatingSubjectName">Subject Name</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <select name="categoryEducationLevel" className="form-control select-categoryEducationLevel" id="floatingcategoryEducationLevel" required >
                                                                <option value="" disabled-selected hidden>Select Education Level</option>
                                                                <option value="1">Option 1</option>
                                                                <option value="2">Option 2</option>
                                                                </select>

                                                                <label for="floatingcategoryEducationLevel">Category Name</label>
                                                            </div>
                                                        </div>

                                                        <div className="add-subject-done-div">
                                                            <button className="btn btn-success add-subject-done-button">Done</button>
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Subject Name</th>

                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Education Level</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Maths</p>
                                                    </td>

                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Primary School</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
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
    )






}

export default Subject;