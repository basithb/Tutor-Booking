import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slot.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const Slot = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "slot";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                    <div className="container-fluid py-4">

                        <div class="col-11">
                            <div class="card card-slot mb-4 pb-4">
                                <div class="card-header card-slot-header pb-1">
                                    <h6 className="text-uppercase card-slot-header-text">Slot(s)</h6>

                                    <button type="button" class="btn-add-slot btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Slot
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header modal-slot-header">
                                                    <h5 class="modal-title modal-title-slot fw-bold" id="staticBackdropLabel">Enter Slot Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form >
                                                    <div className="modal-body">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="datetime-local" name="slotStartTime" className="form-control input-slotStartTime" id="floatingSlotStartTime" min="2022-03-10T09:00" max="22:00" required />
                                                                <label for="floatingStartTime">Time</label>
                                                            </div>
                                                        </div>
                                        
                                                        <div className="add-slot-done-div">
                                                            <button className="btn btn-success add-slot-done-button">Done</button>
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Time</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Dummy Date & Time</p>
                                                    </td>
                                                
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Dummy Date & Time</p>
                                                    </td>
                                                    {/* <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Dummy End Time</p>
                                                    </td> */}
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
    )






}

export default Slot;