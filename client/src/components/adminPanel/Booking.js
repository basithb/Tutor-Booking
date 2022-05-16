import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Booking.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminBooking = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }


    const [booking, setBooking] = useState([]);


    function formatDateInput(stringDate) {
        var curr = new Date(stringDate);
        curr.setDate(curr.getDate() + 1);
        var date = curr.toUTCString().substring(5, 17);
        return date;
    }

    //getBookingDetails() function to fetch booking details from tbl_booking

    async function getBookingDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/admin-booking", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setBooking(parseRes);

        } catch (err) {

            console.error(err.message);

        }
    }


    useEffect(() => {
        getBookingDetails();
    }, [0]);


    const isActive = "admin-booking";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Session ID</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Booking Date</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    booking.length === 0 ?
                                                        (<h4 className="text-align-center w-100 p-5">No Booking Found.</h4>)
                                                        :
                                                        (
                                                            booking.map((item, index) => (
                                                                <tr key={item.booking_id}>
                                                                    <td class="align-middle text-center">
                                                                        <p class="text-xs font-weight-bold mb-0">{item.customer_firstname}</p>
                                                                    </td>
                                                                    <td class="align-middle text-center">
                                                                        <p class="text-xs font-weight-bold mb-0">{item.session_master_id}</p>
                                                                    </td>
                                                                    <td class="align-middle text-center">
                                                                        <p class="text-xs font-weight-bold mb-0">{formatDateInput(item.booking_date)}</p>
                                                                    </td>


                                                                </tr>

)))}
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

export default AdminBooking;