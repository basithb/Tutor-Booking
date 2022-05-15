import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Customer.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminCustomer = (props, { setAuth }) => {

    const [data, setData] = useState([]);


    //getCustomerDetails() function to fetch details from tbl_customer

    async function getCustomerDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/customer", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setData(parseRes);

        } catch (err) {

            console.error(err.message);

        }
    }


    //onCustomerDeactivate() function to deactivate a customer from tbl_customer

    async function onCustomerDeactivate(customer_id) {

        try {

            const body = { customer_id };

            const response = await fetch("http://localhost:5000/deactivate/customer", {
                method: "POST",
                headers: { "Content-Type": "application/json", token: localStorage.token },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();


            if (parseRes === true) {
                toast.success("Action Successful!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                window.location.reload(true);
              
               
            } else {
                toast.error(parseRes);
            }

        } catch (err) {

            console.error(err.message);

        }
    }


    useEffect(() => {
        getCustomerDetails();
    }, [0]);

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
                                                <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">S.No</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">First Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Last Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">State</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">City</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                    data.map((item, index) => (
                                                        <tr key={item.customer_id}>
                                                           <th class="align-middle text-center" scope="row">{index + 1}</th>
                                                            <td class="align-middle text-center">{item.customer_firstname}</td>
                                                            <td class="align-middle text-center">{item.customer_lastname}</td>
                                                            <td class="align-middle text-center">{item.customer_statename}</td>
                                                            <td class="align-middle text-center">{item.customer_cityname}</td>
                                                            {
                                                                item.customer_status === "active" ?
                                                                    <td class="align-middle text-center">
                                                                        <button className="btn-danger btn btn-sm" onClick={() => onCustomerDeactivate(item.customer_id)} title="Deactivate Customer">Deactivate</button>
                                                                    </td>
                                                                    :
                                                                    <td class="align-middle text-center">

                                                                        <button className="btn-success btn btn-sm" onClick={() => onCustomerDeactivate(item.customer_id)} title="Activate Customer ">Activate</button>
                                                                    </td>
                                                            }
                                                        </tr>

                                                    ))
                                                }


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