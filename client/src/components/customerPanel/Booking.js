import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Booking.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const CustomerBooking = (props, { setAuth }) => {


    function formatDateInput(stringDate) {
        var curr = new Date(stringDate);
        curr.setDate(curr.getDate() + 1);
        var date = curr.toUTCString().substring(5, 17);
        return date;
    }

    const [booking, setBooking] = useState([]);

    //getBookingDetails() function to fetch details from tbl_booking

    async function getBookingDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/booking", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setBooking(parseRes);

        } catch (error) {

            console.error(error.message);

        }
    }

    useEffect(() => {
        getBookingDetails();
    }, [0]);

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


                            {/* {
                                sessionTotal.length === 0 ?
                                    (<h4 className="text-align-center w-100 p-5">No Sessions Found.</h4>)
                                    :
                                    (
                                        sessionTotal.map((item, index) => (

                                            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12">
                                                <div class="card card-session mb-4 pb-4">
                                                    <div class="card-header card-session-header pb-1">
                                                        <div className="card-session-slot-tutor-details">
                                                            <h6 className="text-uppercase card-session-slotDateStart-text">{formatDateInput(item.slot_date)}  </h6>
                                                            <span class="card-session-dot fw-bold">|</span>
                                                            <h6 className="text-uppercase card-session-slotTimeStart-text">{item.slot_time}</h6>
                                                            <span class="card-session-dot fw-bold">·</span>
                                                            <h6 className="text-uppercase card-session-tutorName-text">{item.tutor_firstname} {item.tutor_lastname}</h6>
                                                            <h6 className="text-uppercase card-booking-cost-text">{item.session_price} </h6>
                                                            <h6 className="text-uppercase card-booking-rupee-symbol">₹</h6>
                                                        </div>

                                                        <h6 className="text-uppercase card-session-header-text">{item.subject_name}</h6>
                                                        <h6 className="text-uppercase text-muted card-session-category-text">{item.category_name}</h6>


                                                    </div>


                                                </div>
                                            </div>
                                        )))} */}






                            {
                                booking.length === 0 ?
                                    (<h4 className="text-align-center w-100 p-5">No Booking Found.</h4>)
                                    :
                                    (
                                        booking.map((item, index) => (

                                            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12">
                                                <div class="card card-booking mb-4">
                                                    <div class="card-header card-booking-header pb-1">

                                                        <div className="card-booking-sessionBooked-cost-details card-temp">
                                                            <h6 className="text-uppercase text-success card-booking-sessionBooked-text">Booked</h6>
                                                            <h6 className="text-uppercase text-success card-booking-cost-text">{item.session_price} </h6>
                                                            <h6 className="text-uppercase text-success card-booking-rupee-symbol">₹</h6>

                                                        </div>

                                                        <div className="card-booking-slot-tutor-details">
                                                            <span class="card-booking-dot fw-bold">|</span>
                                                            <h6 className="text-uppercase card-booking-slotTimeStart-text">{item.slot_time}</h6>
                                                            <span class="card-booking-dot fw-bold">·</span>
                                                            <h6 className="text-uppercase card-booking-tutorName-text">{item.tutor_firstname} {item.tutor_lastname}</h6>
                                                        </div>

                                                    </div>

                                                    <div className="card-body card-booking-body">

                                                        <h6 className="text-uppercase card-booking-body-text">{item.subject_name}</h6>
                                                        <h6 className="text-uppercase text-muted card-booking-category-text">{item.category_name}</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        )))}


                        </div>
                    </div>
                </main>
            </body>
        </Fragment>
    );
}

export default CustomerBooking;
