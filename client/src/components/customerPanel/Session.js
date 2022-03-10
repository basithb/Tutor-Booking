import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Session.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const Session = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "session";
    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <CustomerNavbar />
                <CustomerSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">
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
                                        <button type="button" class="btn-book-session btn btm-sm btn-success pt-2 pb-2">
                                            Book Session
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

export default Session;
