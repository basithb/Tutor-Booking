import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Session.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminSession = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "admin-session";
    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">
                        <button type="button" className="btn btn-success btn-add-session" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Session</button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header modal-session-header">
                                        <h5 class="modal-title modal-title-session fw-bold" id="staticBackdropLabel">Enter Session Details</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <form >
                                        <div className="modal-body">

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="slotStartTime" className="form-control select-slotStartTime" id="floatingslotStartTime" required >
                                                        <option value="" disabled-selected hidden>Select Slot Time</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                    </select>

                                                    <label for="floatingslotStartTime">Slot Time</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="tutorName" className="form-control select-tutorName" id="floatingtutorName" required >
                                                        <option value="" disabled-selected hidden>Select Tutor</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                    </select>

                                                    <label for="floatingtutorName">Tutor</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="subjectName" className="form-control select-subjectName" id="floatingsubjectName" required >
                                                        <option value="" disabled-selected hidden>Select Subject</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                    </select>

                                                    <label for="floatingsubjectName">Subject</label>
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

                                            <div className="add-session-done-div">
                                                <button className="btn btn-success add-session-done-button">Done</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12">
                                <div class="card card-session mb-4 pb-4">
                                    <div class="card-header card-session-header pb-1">
                                        <div className="card-session-slot-tutor-details">
                                            <h6 className="text-uppercase card-session-slotDateStart-text">10-03-2022 </h6>
                                            <span class="card-session-dot fw-bold">|</span>
                                            <h6 className="text-uppercase card-session-slotTimeStart-text">07:30</h6>
                                            <span class="card-session-dot fw-bold">·</span>
                                            <h6 className="text-uppercase card-session-tutorName-text">Naval Ravikant</h6>
                                        </div>

                                        <h6 className="text-uppercase card-session-header-text">Human Psychology</h6>
                                        <h6 className="text-uppercase text-muted card-session-category-text">High School</h6>


                                    </div>

                                    <div class="card-body px-0 pt-0 pb-0 d-grid">
                                        <button type="button" class="btn-delete-session btn btm-sm btn-danger pt-2 pb-2">
                                            Delete Session
                                        </button>
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

export default AdminSession;
