import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CustomerDashboard.css";
import { Link } from "react-router-dom";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";

const CustomerProfile = ({ setAuth }) => {

    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        customerEditEmail: "",
        customerEditPassword: "",
        customerEditFirstName: "",
        customerEditLastName: "",
        customerEditStateName: "",
        customerEditCityName: "",
    });

    // Destructuring
    const { customerEditEmail, customerEditPassword, customerEditFirstName, customerEditLastName, customerEditStateName, customerEditCityName } = inputs;

    //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };


    const onSubmitForm = async (event) => {

        try {

            const body = { customerEditFirstName, customerEditLastName, customerEditEmail, customerEditPassword, customerEditStateName, customerEditCityName };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/update/customerDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json(); //parseResponse

        } catch (error) {
            console.error(error.message);
        }

    }

    async function getName() {
        try {

            const response = await fetch("http://localhost:5000/dashboard",
                {
                    method: "GET",
                    headers: { token: localStorage.token }
                });

            const parseRes = await response.json();


        } catch (error) {
            console.error(error.message);
        }
    }

    const [customer, setCustomer] = useState([]);

    async function getCustomerDetails() {
        try {

            const response = await fetch("http://localhost:5000/fetch/customerName",
                {
                    method: "GET",
                    headers: { token: localStorage.token }
                });

            const parseRes = await response.json();


        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getName();
        getCustomerDetails();
    }, []);



    const isActive = "customer-profile";

    return (
        <Fragment>

            <PanelBackdrop />
            <CustomerNavbar />
            <CustomerSidebar setAuth={setAuth} isActive={isActive} />
            <main class="main-content position-relative border-radius-lg">

                <div className="container-fluid hello-customer-card py-4">
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="col-10">
                                    <div class="hello-text">
                                        <h5 class="hello-customer-heading">
                                            Hello
                                        </h5>

                                        {/* {
                                      
                                                (
                                                    customer.map((item, index) => (


                                                        <h5 class="hello-heading-customerFirstName fw-bold">
                                                            {item.customer_name}
                                                        </h5>

                                                    )))} */}

                                        <h5 class="hello-heading-wave">
                                            👋
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-customer-profile p-1">
                                <div class="card-header card-customer-profile-header pb-0">
                                    <h5 className="card-customer-profile-heading fw-bold">Edit Profile</h5>
                                </div>
                                <div class="card-body card-body-customer-profile">

                                    <form onSubmit={onSubmitForm}>
                                        <div class="row">
                                            <h6 className=" text-muted mb-3">User Information</h6>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerEditFirstName" className="form-control input-customerEditFirstName" id="floatingCustomerEditFirstName" required />
                                                    <label for="floatingEditFirstName">First Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerEditLastName" className="form-control input-customerEditLastName" id="floatingCustomerEditLastName" required />
                                                    <label for="floatingEditLastName">Last Name</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerEditEmail" className="form-control input-customerEditEmail" id="floatingCustomerEditEmail" required />
                                                    <label for="floatingEditEmail">Email ID</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="password" name="customerEditPassword" className="form-control input-customerEditPassword" id="floatingCustomerEditPassword" required />
                                                    <label for="floatingEditPassword">Password</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <h6 className=" text-muted mb-3">Address Information</h6>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerEditStateName" className="form-control input-customerEditStateName" id="floatingCustomerEditStateName" required />
                                                    <label for="floatingEditStateName">State</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerEditCityName" className="form-control input-customerEditCityName" id="floatingCustomerEditCityName" required />
                                                    <label for="floatingEditCityName">City</label>
                                                </div>
                                            </div>

                                            <div className="d-grid mt-3">
                                                <button className="btn btn-success btn-submit-profile">Submit</button>
                                            </div>

                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </main>

        </Fragment>
    )
}

export default CustomerProfile;