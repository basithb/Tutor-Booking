import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Card.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const CustomerCard = (props, { setAuth }) => {

    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        card_number: "",
        card_holder: "",
        card_expiry: "",
    });

    function formatDateInput(stringDate) {
        var curr = new Date(stringDate);
        curr.setDate(curr.getDate() + 1);
        var date = curr.toUTCString().substring(5, 17);
        return date;
    }

    // // Destructuring
    const { card_number, card_holder, card_expiry } = inputs;

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const [card, setCard] = useState([]);
    const cardCustomerID = localStorage.customer_id;

    //getCardDetails() function to fetch details from tbl_card

    async function getCardDetails() {

        try {

            const response = await fetch(`http://localhost:5000/fetch/card/${cardCustomerID}`, {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setCard(parseRes);

        } catch (error) {

            console.error(error.message);

        }
    }


    //onSubmitForm() function to add a new card to tbl_card

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { card_number, card_holder, card_expiry };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/add/card",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                         token: localStorage.token, customer_id: localStorage.customer_id
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json(); //parseResponse

            if (parseRes) {
                toast.success("Card Addition Successful!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                window.location.reload(true);
            }

            else {

                toast.error(parseRes);
            }

        } catch (error) {
            console.error(error.message);
        }
    }


    //onCardDeactivate() function to deactivate a card from tbl_card

    async function onCardDeactivate(card_id) {

        try {

            const body = { card_id };

            const response = await fetch("http://localhost:5000/deactivate/card", {
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
        getCardDetails();
    }, [0]);


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

                                    <form onSubmit={onSubmitForm} >
                                        <div className="modal-body">

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="card_number" className="form-control input-customerCardNumber" id="floatingcustomerCardNumber" onChange={(event) => onChange(event)} required />
                                                    <label for="floatingcustomerCardNumber">Card Number</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="card_holder" className="form-control input-cardHolderName" id="floatingcardHolderName" onChange={(event) => onChange(event)} required />
                                                    <label for="floatingcardHolderName">Card Holder Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="date" name="card_expiry" className="form-control input-cardExpiryDate" id="floatingcardExpiryDate" onChange={(event) => onChange(event)} required />
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

                            {
                                card.length === 0 ?
                                    (<h4 className="text-align-center w-5 p-5">No Card Found.</h4>)
                                    :
                                    (
                                        card.map((item, index) => (

                                            <div class="col-xl-4 col-md-4 col-sm-4  col-xs-4 mb-xl-0 mb-4">
                                                <div class="card bg-transparent shadow-xl">
                                                    <div class=" border-radius-xl card-credit-card">
                                                        <span class="customerCard-mask bg-customerCard-gradient-dark"></span>
                                                        <div class="card-body position-relative z-index-1 p-3">
                                                            <i class="fas fa-wifi text-white p-2"></i>
                                                            {/* <h5 class="text-white mt-4 mb-5 pb-2 fw-bold">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5> */}
                                                            <h5 class="text-white mt-4 mb-5 pb-2 fw-bold">{item.card_number}</h5>
                                                            <div class="d-flex">
                                                                <div class="d-flex">
                                                                    <div class="me-4">
                                                                        <p class="text-white text-sm opacity-8 mb-0">Card Holder</p>
                                                                        <h6 class="text-white mb-0">{item.card_holder}</h6>
                                                                    </div>
                                                                    <div>
                                                                        <p class="text-white text-sm opacity-8 mb-0">Expires</p>
                                                                        <h6 class="text-white mb-0">{formatDateInput(item.card_expiry)}</h6>
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
                                        )))}
                        </div>
                    </div>
                </main>


            </body>
        </Fragment>
    )


}

export default CustomerCard;