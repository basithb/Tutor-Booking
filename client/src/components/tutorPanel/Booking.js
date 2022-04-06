import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Booking.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import TutorSidebar from "./TutorSidebar";
import { Link } from "react-router-dom";
import TutorNavbar from "./TutorNavbar";

const TutorBooking = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "tutor-booking";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <TutorNavbar />
                <TutorSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">

                        <div class="col-12">
                            <div class="card card-booking mb-4 pb-4">
                                <div class="card-header card-booking-header pb-1">
                                    <h6 className="text-uppercase">Booking(s)</h6>

                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Customer Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Session Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Booking Date</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Session Price</th>                       

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Clifford</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Human Psychology</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">14-03-22 18:00</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">₹</span>
                                                        <span class="text-secondary text-xs font-weight-bold">500</span>
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

export default TutorBooking;