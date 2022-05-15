import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Tutor.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminTutor = (props, { setAuth }) => {

    // // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        tutorEmail: "",
        tutorPassword: "",
        tutorFirstName: "",
        tutorLastName: "",
        tutorStateName: "",
        tutorCityName: "",
    });

    // // Destructuring
    const { tutorEmail, tutorPassword, tutorFirstName, tutorLastName, tutorStateName, tutorCityName } = inputs;

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

  
    const [data, setData] = useState([]);


    //getTutorDetails() function to fetch details from tbl_tutor

    async function getTutorDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/tutor", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setData(parseRes);

        } catch (err) {

            console.error(err.message);

        }
    }


    //onSubmitForm() function to submit the inputs and register tutor to our RESTful API to get the JWT Token

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { tutorEmail, tutorPassword, tutorFirstName, tutorLastName, tutorStateName, tutorCityName };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/auth/tutor-register",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json(); //parseResponse

            if (parseRes) {
                toast.success("Tutor Registration Successful!",{
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                window.location.reload(true);
            }

            else {
                // setAuth(false);
                toast.error(parseRes);
            }

            // localStorage.setItem("token", parseRes.token);

            // setAuth(true);

        } catch (error) {
            console.error(error.message);
        }
    }

    //onTutorDeactivate() function to deactivate a tutor from tbl_tutor

    async function onTutorDeactivate(tutor_id) {

        try {

            const body = { tutor_id };

            const response = await fetch("http://localhost:5000/deactivate/tutor", {
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
    }, [0]);

    const isActive = "admin-tutor";

    return (
        <Fragment>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />

                <main className="main-content position-relative border-radius-lg">
                    <div className="container-fluid py-4">

                        <div class="col-12">
                            <div class="card card-tutor mb-4 pb-4">
                                <div class="card-header card-tutor-header pb-1">
                                    <h6 className="text-uppercase card-tutor-header-text">Tutor(s)</h6>

                                    <button type="button" class="btn-add-tutor btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Tutor
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header modal-tutor-header">
                                                    <h5 class="modal-title modal-title-tutor fw-bold" id="staticBackdropLabel">Enter Tutor Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                    <form onSubmit={onSubmitForm} >
                                                    <div className="modal-body">
                                                        <div className="row">

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    {/* <input type="text" name="tutorFirstName" className="form-control input-tutorFirstName" id="floatingTutorFirstName" required /> */}
                                                                    <input type="text" name="tutorFirstName" className="form-control input-tutorFirstName" id="floatingTutorFirstName" value={tutorFirstName} onChange={(event) => onChange(event)} required />
                                                                    <label for="floatingFirstName">First Name</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    {/* <input type="text" name="tutorLastName" className="form-control input-tutorLastName" id="floatingTutorLastName" required /> */}
                                                                    <input type="text" name="tutorLastName" className="form-control input-tutorLastName" id="floatingTutorLastName" value={tutorLastName} onChange={(event) => onChange(event)} required />
                                                                    <label for="floatingLastName">Last Name</label>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    {/* <input type="text" name="tutorStateName" className="form-control input-tutorStateName" id="floatingTutorStateName" required /> */}
                                                                    <input type="text" name="tutorStateName" className="form-control input-tutorStateName" id="floatingTutorStateName" value={tutorStateName} onChange={(event) => onChange(event)} required />
                                                                    <label for="floatingStateName">State</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-floating">
                                                                    {/* <input type="text" name="tutorCityName" className="form-control input-tutorCityName" id="floatingTutorCityName" required /> */}
                                                                    <input type="text" name="tutorCityName" className="form-control input-tutorCityName" id="floatingTutorCityName" value={tutorCityName} onChange={(event) => onChange(event)} required />
                                                                    <label for="floatingCityName">City</label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating ">
                                                                {/* <input type="email" name="tutorEmail" className="form-control input-tutorEmail" id="floatingTutorEmail" 
                                                                    required /> */}
                                                                <input type="email" name="tutorEmail" className="form-control input-tutorEmail" id="floatingTutorEmail" value={tutorEmail} onChange={(event) => onChange(event)}
                                                                    required />
                                                                <label for="floatingEmail">Email ID</label>
                                                            </div>

                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating ">
                                                                {/* <input type="password" name="password" className="form-control input-tutorPassword" id="floatingTutorPassword"
                                                                    required /> */}
                                                                <input type="password" name="tutorPassword" className="form-control input-tutorPassword" id="floatingTutorPassword" value={tutorPassword} onChange={(event) => onChange(event)}
                                                                    required />
                                                                <label for="floatingPassword">Password</label>
                                                            </div>
                                                        </div>

                                                        <div className="add-tutor-done-div">
                                                            <button className="btn btn-success add-tutor-done-button">Done</button>
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
                                                        <tr key={item.tutor_id}>
                                                           <th class="align-middle text-center" scope="row">{index + 1}</th>
                                                            <td class="align-middle text-center">{item.tutor_firstname}</td>
                                                            <td class="align-middle text-center">{item.tutor_lastname}</td>
                                                            <td class="align-middle text-center">{item.tutor_statename}</td>
                                                            <td class="align-middle text-center">{item.tutor_cityname}</td>
                                                            {
                                                                item.tutor_status === "active" ?
                                                                    <td class="align-middle text-center">
                                                                        <button className="btn-danger btn btn-sm" onClick={() => onTutorDeactivate(item.tutor_id)} title="Deactivate Tutor">Deactivate</button>
                                                                    </td>
                                                                    :
                                                                    <td class="align-middle text-center">

                                                                        <button className="btn-success btn btn-sm" onClick={() => onTutorDeactivate(item.tutor_id)} title="Activate Tutor ">Activate</button>
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


          

        </Fragment>
    );
}

export default AdminTutor; 