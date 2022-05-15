import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Session.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminSession = (props, { setAuth }) => {

   // // Collecting state from these forms
   const [inputs, setInputs] = useState({
    // Default values
    slot_time: "",
    slot_date: "",
    subject_id: "",
    category_id: "",
    tutor_id:"",
    session_price:""

});

function formatDateInput(stringDate){
    var curr = new Date(stringDate);
    curr.setDate(curr.getDate()+1);
    var date = curr.toUTCString().substring(5,17);
    return date;
}

// // Destructuring
const { slot_time, slot_date, subject_id, category_id, tutor_id, session_price} = inputs;

// //onChange() function to change default values from the inputs i.e email ,name, and password.

const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
};

const [sessionMaster,  setSessionMaster] = useState([]);
const [sessionChild,  setSessionChild] = useState([]);
const [slotTime, setSlotTime] = useState([]);
const [slotDate, setSlotDate] = useState([]);
const [subject, setSubject] = useState([]);
const [category, setCategory] = useState([]);
const [tutor, setTutor] = useState([]);


//getSlotTimeDetails() function to fetch slot time details from tbl_slot

async function getSlotTimeDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/slot", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setSlotTime(parseRes);

    } catch (err) {

        console.error(err.message);

    }
}

//getSlotDateDetails() function to fetch slot date details from tbl_slot

async function getSlotDateDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/slot", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setSlotDate(parseRes);

    } catch (err) {

        console.error(err.message);

    }
}

//getSessionMasterDetails() function to fetch details from tbl_session_master

async function getSessionMasterDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/session-master", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setSessionMaster(parseRes);

    } catch (err) {

        console.error(err.message);

    }
}

//getSessionChildDetails() function to fetch details from tbl_session_child

async function getSessionChildDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/session-child", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setSessionChild(parseRes);

    } catch (err) {

        console.error(err.message);

    }
}

//getCategoryDetails() function to fetch details from tbl_category

async function getCategoryDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/category", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setCategory(parseRes);

    } catch (error) {

        console.error(error.message);

    }
}

//getSubjectDetails() function to fetch details from tbl_subject

async function getSubjectDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/subject", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setSubject(parseRes);

    } catch (error) {

        console.error(error.message);

    }
}

//getTutorDetails() function to fetch details from tbl_tutor

async function getTutorDetails() {

    try {

        const response = await fetch("http://localhost:5000/fetch/tutor", {
            method: "GET",
            headers: { token: localStorage.token }
        });

        const parseRes = await response.json();

        setTutor(parseRes);

    } catch (error) {

        console.error(error.message);

    }
}


//onSubmitForm() function to add a new session to tbl_session_master

const onSubmitForm = async (event) => {

    event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

    try {

        const body = {  slot_time, slot_date, tutor_id, session_price, subject_id, category_id };

        // Creating a fetch request 
        const response = await fetch(
            "http://localhost:5000/add/session",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    token: localStorage.token
                },
                body: JSON.stringify(body)
            }
        );

        const parseRes = await response.json(); //parseResponse

        if (parseRes) {
            toast.success("Session Addition Successful!", {
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


//onSessionDeactivate() function to deactivate a session from tbl_session_master

async function onSessionDeactivate(session_master_id) {

    try {

        const body = { session_master_id };

        const response = await fetch("http://localhost:5000/deactivate/session", {
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
    getTutorDetails();
    getSlotTimeDetails();
    getSlotDateDetails();
    getSubjectDetails();
    getCategoryDetails();
    getSessionMasterDetails();
    getSessionChildDetails();
}, [0]);

    const isActive = "admin-session";
    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">
                        <button type="button" className="btn btn-success btn-add-session" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Session</button>


                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header modal-session-header">
                                        <h5 class="modal-title modal-title-session fw-bold" id="staticBackdropLabel">Enter Session Details</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <form onSubmit={onSubmitForm} >
                                        <div className="modal-body">

                                        <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="slot_date" className="form-control select-slotStartTime" id="floatingslotStartTime" onChange={(event) => onChange(event)}  required >
                                                        <option value="" disabled-selected hidden>Select Slot Date</option>
                                                        {
                                                                    slotDate.map((item, index) => (

                                                                    <option key={item.slot_id} value={item.slot_id}>{formatDateInput(item.slot_date)}</option>

                                                                    ))
                                                                    }
                                                    </select>

                                                    <label for="floatingslotStartTime">Slot Time</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="slot_time" className="form-control select-slotStartTime" id="floatingslotStartTime" onChange={(event) => onChange(event)}  required >
                                                        <option value="" disabled-selected hidden>Select Slot Time</option>
                                                        {
                                                                    slotTime.map((item, index) => (

                                                                    <option key={item.slot_id} value={item.slot_id}>{item.slot_time}</option>

                                                                    ))
                                                                    }
                                                    </select>

                                                    <label for="floatingslotStartTime">Slot Time</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="tutor_id" className="form-control select-tutorName" id="floatingtutorName" onChange={(event) => onChange(event)}  required >
                                                        <option value="" disabled-selected hidden>Select Tutor</option>
                                                        {
                                                                    tutor.map((item, index) => (

                                                                    <option key={item.tutor_id} value={item.tutor_id}>{item.tutor_firstname}</option>

                                                                    ))
                                                                    }
                                                    </select>

                                                    <label for="floatingtutorName">Tutor</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="subject_id" className="form-control select-subjectName" id="floatingsubjectName" onChange={(event) => onChange(event)}  required >
                                                        <option value="" disabled-selected hidden>Select Subject</option>
                                                        {
                                                                    subject.map((item, index) => (

                                                                    <option key={item.subject_id} value={item.subject_id}>{item.subject_name}</option>

                                                                    ))
                                                                    }
                                                    </select>

                                                    <label for="floatingsubjectName">Subject</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <select name="category_id" className="form-control select-categoryEducationLevel" id="floatingcategoryEducationLevel" onChange={(event) => onChange(event)}  required >
                                                        <option value="" disabled-selected hidden>Select Education Level</option>
                                                        {
                                                                    category.map((item, index) => (

                                                                    <option key={item.category_id} value={item.category_id}>{item.category_name}</option>

                                                                    ))
                                                                    }
                                                    </select>

                                                    <label for="floatingcategoryEducationLevel">Category Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="session_price" className="form-control input-customerEditLastName" id="floatingCustomerEditLastName" value={session_price} onChange={(event) => onChange(event)} required />
                                                    <label for="floatingEditLastName">Session Cost</label>
                                                </div>
                                            </div>

                                            <div className="add-session-done-div">
                                                <button className="btn btn-success add-session-done-button">Done</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>


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
                                            <h6 className="text-uppercase card-booking-cost-text">500 </h6>
                                            <h6 className="text-uppercase card-booking-rupee-symbol">₹</h6>
                                        </div>

                                        <h6 className="text-uppercase card-session-header-text">Human Psychology</h6>
                                        <h6 className="text-uppercase text-muted card-session-category-text">High School</h6>


                                    </div>

                                    <div class="card-body px-0 pt-0 pb-0 d-grid">
                                        <button type="button" class="btn-delete-session btn btm-sm btn-danger pt-2 pb-2">
                                            Delete Session
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12">
                                <div class="card card-session mb-4 pb-4">
                                    <div class="card-header card-session-header pb-1">
                                        <div className="card-session-slot-tutor-details">
                                            <h6 className="text-uppercase card-session-slotDateStart-text">17-05-2022 </h6>
                                            <span class="card-session-dot fw-bold">|</span>
                                            <h6 className="text-uppercase card-session-slotTimeStart-text">08:30</h6>
                                            <span class="card-session-dot fw-bold">·</span>
                                            <h6 className="text-uppercase card-session-tutorName-text">Brian Holt</h6>
                                            <h6 className="text-uppercase card-booking-cost-text">1500 </h6>
                                            <h6 className="text-uppercase card-booking-rupee-symbol">₹</h6>
                                        </div>

                                        <h6 className="text-uppercase card-session-header-text">Intro to Web Development</h6>
                                        <h6 className="text-uppercase text-muted card-session-category-text">High School</h6>


                                    </div>

                                    <div class="card-body px-0 pt-0 pb-0 d-grid">
                                        <button type="button" class="btn-delete-session btn btm-sm btn-danger pt-2 pb-2">
                                            Delete Session
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

export default AdminSession;
