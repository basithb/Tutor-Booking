import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import "./Register.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setAuth }) => {

    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        email: "",
        password: "",
        name: "",
    });

    // Destructuring
    const { email, password, name } = inputs;

    //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    //onSubmit() function to submit the inputs to our RESTful API to get the JWT Token

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with thepreventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { email, password, name };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/auth/customer-register",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json(); //parseResponse

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);

                setAuth(true);
                toast.success("Registration Successful!");

            }

            else {
                setAuth(false);
                toast.error(parseRes);
            }

            localStorage.setItem("token", parseRes.token);

            setAuth(true);

        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <Fragment>
            <Navbar />
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitForm}>

                <input type="text" name="name" placeholder="Enter your Name" className="form-control my-3" value={name} onChange={event => onChange(event)} />

                <input type="email" name="email" placeholder="Enter your Email" className="form-control my-3" value={email} onChange={event => onChange(event)} />

                <input type="password" name="password" placeholder="Enter your Password" className="form-control my-3" value={password} onChange={event => onChange(event)} />

                <div className="d-grid">
                    <button className="btn btn-success ">Submit</button>
                </div>

            </form>
            <Link to="/login">Login</Link>


            <div className="container py-5 h-200 register-container ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-9 col-xl-7">
                        <div className="card shadow-lg p-3 bg-body bg-white text-dark register-card">
                            <div className="card-body p-3 text-center">
                                <h2 className="mb-4 fw-bold">Create an Account</h2>

                                <form onSubmit={onSubmitForm}>

                                    <div className="row">

                                        <div className="col-md-6 mb-4">
                                            <div className="form-floating">
                                                <input type="text" name="firstName" className="form-control input-firstName" id="floatingFirstName" required/>
                                                <label for="floatingFirstName">First Name</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <div className="form-floating">
                                                <input type="text" name="lastName" className="form-control input-lastName" id="floatingLastName" required/>
                                                <label for="floatingLastName">Last Name</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-floating">
                                                <input type="text" name="stateName" className="form-control input-stateName" id="floatingStateName" required/>
                                                <label for="floatingStateName">State</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <div className="form-floating">
                                                <input type="text" name="cityName" className="form-control input-cityName" id="floatingCityName" required/>
                                                <label for="floatingCityName">City</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-12 mb-4">
                                        <div className="form-floating ">
                                            <input type="email" name="email" className="form-control input-email" id="floatingEmail" value={email}
                                                onChange={(event) => onChange(event)} required/>
                                            <label for="floatingEmail">Email ID</label>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating ">
                                                <input type="password" name="password" className="form-control input-password" id="floatingPassword" value={password}
                                                    onChange={(event) => onChange(event)} required/>
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating ">
                                                <input type="password" name="confirmPassword" className="form-control input-confirmPassword" id="floatingConfirmPassword"
                                                    onChange={(event) => onChange(event)} required/>
                                                <label for="floatingConfirmPassword">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-success register-button">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <p>Already have an account? <Link to="/login" className="register-sub-text fw-bold">Log In</Link> here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;