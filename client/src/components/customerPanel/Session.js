import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Session.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import CustomerSidebar from "./CustomerSidebar";
import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

const CustomerSession = (props, { setAuth }) => {


    // // Collecting state from these forms
    // const [inputs, setInputs] = useState({
    //     // Default values
    //     customer_id:"",


    // });

    //     // // Destructuring
    //     const {customer_id } = inputs;


    function formatDateInput(stringDate) {
        var curr = new Date(stringDate);
        curr.setDate(curr.getDate() + 1);
        var date = curr.toUTCString().substring(5, 17);
        return date;
    }


    //onSubmitForm() function to add a new booking to tbl_booking

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { session_id, cardCustomerID, card_id };
            // const body = editInputs;

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/add/booking",
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
                toast.success("Booking Successful!", {
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

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    // const onChange = (event) => {
    //     setInputs({ ...inputs, [event.target.name]: event.target.value });
    // };

    const [sessionTotal, setTotalSession] = useState([]);
    const [card, setCard] = useState([]);
    const cardCustomerID = localStorage.customer_id;

    const [editInputs, setEditInputs] = useState({
        session_id: "",
        card_id: "",
    });

    const { session_id, card_id } = editInputs;


    const onChangeEdit = (e) => {
        setEditInputs({ ...editInputs, [e.target.name]: e.target.value });
    }

    function onSend(id) {
        setEditInputs({
            ...editInputs,
            session_id: id
        });

    }


    //getTotalSessionDetails function to fetch details from tbl_session_master and tbl_session_child

    async function getTotalSessionDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/session-total", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setTotalSession(parseRes);

        } catch (error) {

            console.error(error.message);

        }
    }


    //getCardDetails function to fetch details from tbl_card 

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



    useEffect(() => {
        getTotalSessionDetails();
        getCardDetails();
    }, [0]);

    const isActive = "customer-session";
    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <CustomerNavbar />
                <CustomerSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">
                        <div className="row">



                            {
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

                                                    <div class="card-body px-0 pt-0 pb-0 d-grid">
                                                        <button type="button" class="btn-delete-session btn btm-sm btn-success pt-2 pb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => onSend(
                                                            //  console.log(item.session_master_id) 
                                                            item.session_master_id

                                                        )}  >
                                                            Book Session
                                                        </button>
                                                    </div>

                                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div class="modal-dialog modal-md">
                                                            <div class="modal-content">
                                                                <div class="modal-header modal-customerCard-header">
                                                                    <h5 class="modal-title modal-title-customerCard fw-bold" id="staticBackdropLabel">Book Session</h5>

                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>

                                                                </div>

                                                                <form onSubmit={onSubmitForm} >
                                                                    <div className="modal-body">

                                                                        <div className="col-md-12 mb-4">
                                                                            <div className="form-floating">
                                                                                <select name="card_id" className="form-control select-categoryEducationLevel" id="floatingcategoryEducationLevel" onChange={e => onChangeEdit(e)} required >
                                                                                    <option value="" disabled-selected hidden>Select Card</option>
                                                                                    {
                                                                                        card.map((item, index) => (

                                                                                            <option key={item.card_id} value={item.card_id}>{item.card_holder} {item.card_number}</option>

                                                                                        ))
                                                                                    }

                                                                                </select>


                                                                                <label for="floatingcategoryEducationLevel">Card</label>
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

export default CustomerSession;
