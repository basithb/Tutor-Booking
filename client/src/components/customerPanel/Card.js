import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Card.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const CustomerCard = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "customer-card";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <CustomerNavbar />
                <CustomerSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">
                        <button type="button" className="btn btn-success btn-add-customerCard" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Card</button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header modal-customerCard-header">
                                        <h5 class="modal-title modal-title-customerCard fw-bold" id="staticBackdropLabel">Enter Card Details</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <form >
                                        <div className="modal-body">

                                        <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="customerCardNumber" className="form-control input-customerCardNumber" id="floatingcustomerCardNumber" required />
                                                    <label for="floatingcustomerCardNumber">Card Number</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="cardHolderName" className="form-control input-cardHolderName" id="floatingcardHolderName" required />
                                                    <label for="floatingcardHolderName">Card Holder Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="date" name="cardExpiryDate" className="form-control input-cardExpiryDate" id="floatingcardExpiryDate" required />
                                                    <label for="floatingcardExpiryDate">Expiry Date</label>
                                                </div>
                                            </div>


                                            <div className="add-customerCard-done-div">
                                                <button className="btn btn-success add-customerCard-done-button">Done</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div class="col-xl-4 col-md-4 col-sm-4  col-xs-4 mb-xl-0 mb-4">
                                <div class="card bg-transparent shadow-xl">
                                    <div class=" border-radius-xl card-credit-card">
                                        <span class="customerCard-mask bg-customerCard-gradient-dark"></span>
                                        <div class="card-body position-relative z-index-1 p-3">
                                            <i class="fas fa-wifi text-white p-2"></i>
                                            <h5 class="text-white mt-4 mb-5 pb-2 fw-bold">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                                            <div class="d-flex">
                                                <div class="d-flex">
                                                    <div class="me-4">
                                                        <p class="text-white text-sm opacity-8 mb-0">Card Holder</p>
                                                        <h6 class="text-white mb-0">Cliffy</h6>
                                                    </div>
                                                    <div>
                                                        <p class="text-white text-sm opacity-8 mb-0">Expires</p>
                                                        <h6 class="text-white mb-0">11/22</h6>
                                                    </div>
                                                </div>
                                                {/* <div class="ms-auto w-20 d-flex align-items-end justify-content-end">
                        <img class="w-60 mt-2" src="../assets/img/logos/mastercard.png" alt="logo"/>
                      </div> */}
                                            </div>
                                        </div>
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

export default CustomerCard;