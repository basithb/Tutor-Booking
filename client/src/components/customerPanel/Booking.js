import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Booking.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const CustomerBooking = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "customer-booking";
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
                                <div class="card card-booking mb-4">
                                    <div class="card-header card-booking-header pb-1">

                                        <div className="card-booking-sessionBooked-cost-details card-temp">
                                            <h6 className="text-uppercase text-success card-booking-sessionBooked-text">Booked</h6>
                                            <h6 className="text-uppercase text-success card-booking-cost-text">500 </h6>
                                            <h6 className="text-uppercase text-success card-booking-rupee-symbol">₹</h6>
                                            
                                        </div>

                                        <div className="card-booking-slot-tutor-details">
                                            <h6 className="text-uppercase card-booking-slotDateStart-text">10-03-2022 </h6>
                                            <span class="card-booking-dot fw-bold">|</span>
                                            <h6 className="text-uppercase card-booking-slotTimeStart-text">07:30</h6>
                                            <span class="card-booking-dot fw-bold">·</span>
                                            <h6 className="text-uppercase card-booking-tutorName-text">Naval Ravikant</h6>
                                        </div>

                                    </div>

                                    <div className="card-body card-booking-body">

                                        <h6 className="text-uppercase card-booking-body-text">Human Psychology</h6>
                                        <h6 className="text-uppercase text-muted card-booking-category-text">High School</h6>
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

export default CustomerBooking;
