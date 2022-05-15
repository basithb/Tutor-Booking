import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Subject.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminSubject = (props, { setAuth }) => {

    // // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        subject_name: "",
        category_id: "",

    });

    // // Destructuring
    const { subject_name, category_id} = inputs;

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const [data,  setData] = useState([]);
    const [category, setCategory] = useState([]);


    //getSubjectDetails() function to fetch details from tbl_subject

    async function getSubjectDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/subject", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setData(parseRes);

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


    //onSubmitForm() function to add a new subject to tbl_subject

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { subject_name, category_id };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/add/subject",
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
                toast.success("Subject Addition Successful!", {
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


    //onSubjectDeactivate() function to deactivate a subject from tbl_subject

    async function onSubjectDeactivate(subject_id) {

        try {

            const body = { subject_id };

            const response = await fetch("http://localhost:5000/deactivate/subject", {
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
        getSubjectDetails();
        getCategoryDetails();
    }, [0]);

    const isActive = "admin-subject";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                    <div className="container-fluid py-4">

                        <div class="col-11">
                            <div class="card card-subject mb-4 pb-4">
                                <div class="card-header card-subject-header pb-1">
                                    <h6 className="text-uppercase card-subject-header-text">Subject(s)</h6>

                                    <button type="button" class="btn-add-subject btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Subject
                                    </button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header modal-subject-header">
                                                    <h5 class="modal-title modal-title-subject fw-bold" id="staticBackdropLabel">Enter Subject Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form onSubmit={onSubmitForm}>
                                                    <div className="modal-body">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="text" name="subject_name" className="form-control input-subjectName" id="floatingSubjectName" onChange={e => onChange(e)} required />
                                                                <label for="floatingSubjectName">Subject Name</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <select name="category_id" className="form-control select-categoryEducationLevel" id="floatingcategoryEducationLevel" onChange={e => onChange(e)} required >
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

                                                        <div className="add-subject-done-div">
                                                            <button className="btn btn-success add-subject-done-button">Done</button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">S.No</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Subject Name</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Education Level</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    data.map((item, index) => (
                                                        <tr key={item.subject_id}>
                                                            <th class="align-middle text-center" scope="row">{index + 1}</th>
                                                            <td class="align-middle text-center">{item.subject_name}</td>
                                                            <td class="align-middle text-center">{item.category_name}</td>
                                                           
                                                            {
                                                                item.subject_status === "active" ?
                                                                    <td class="align-middle text-center">
                                                                        <button className="btn-danger btn btn-sm" onClick={() => onSubjectDeactivate(item.subject_id)} title="Deactivate Slot">Deactivate</button>
                                                                    </td>
                                                                    :
                                                                    <td class="align-middle text-center">

                                                                        <button className="btn-success btn btn-sm" onClick={() => onSubjectDeactivate(item.subject_id)} title="Activate Slot">Activate</button>
                                                                    </td>
                                                            }
                                                        </tr>

                                                    ))
                                                }


                                                {/* <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Maths</p>
                                                    </td>

                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Primary School</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Human Psychology</p>
                                                    </td>

                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">High School</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
                                                    </td>
                                                </tr> */}


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

export default AdminSubject;