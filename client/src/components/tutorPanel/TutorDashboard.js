import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./TutorDashboard.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import TutorNavbar from "./TutorNavbar";
import TutorSidebar from "./TutorSidebar";

const TutorProfile = ({ setAuth }) => {


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

    useEffect(() => {
        getName();
    }, []);

    const isActive = "tutor-profile";


    return (
        <Fragment>
            <PanelBackdrop />
            <TutorNavbar />
            <TutorSidebar setAuth={setAuth} isActive={isActive} />

            <main class="main-content position-relative border-radius-lg">

                <div className="container-fluid hello-tutor-card py-4">
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="col-10">
                                    <div class="hello-text">
                                        <h5 class="hello-tutor-heading">
                                            Hello,
                                        </h5>
                                        <h5 class="hello-heading-tutorFirstName fw-bold">
                                            Naval
                                        </h5>
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
                            <div class="card card-tutor-profile p-1">
                                <div class="card-header card-tutor-profile-header pb-0">
                                    <h5 className="card-tutor-profile-heading fw-bold">Edit Profile</h5>
                                </div>
                                <div class="card-body card-body-tutor-profile">

                                    <form>
                                        <div class="row">
                                            <h6 className=" text-muted mb-3">Tutor Information</h6>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditFirstName" className="form-control input-tutorEditFirstName" id="floatingTutorEditFirstName" required />
                                                    <label for="floatingEditFirstName">First Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditLastName" className="form-control input-tutorEditLastName" id="floatingTutorEditLastName" required />
                                                    <label for="floatingEditLastName">Last Name</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditEmail" className="form-control input-tutorEditEmail" id="floatingtutorEditEmail" required />
                                                    <label for="floatingEditEmail">Email ID</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditPassword" className="form-control input-tutorEditPassword" id="floatingtutorEditPassword" required />
                                                    <label for="floatingEditPassword">Password</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <h6 className=" text-muted mb-3">Address Information</h6>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditStateName" className="form-control input-tutorEditStateName" id="floatingTutorEditStateName" required />
                                                    <label for="floatingEditStateName">State</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" name="tutorEditCityName" className="form-control input-tutorEditCityName" id="floatingTutorEditCityName" required />
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

export default TutorProfile;