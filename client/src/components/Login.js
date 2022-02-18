import { parse } from "ipaddr.js";
import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setAuth }) => {
    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        email: "",
        password: "",
    });

    // Destructuring
    const { email, password } = inputs;

    //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    //onSubmit() function to submit the inputs to our RESTful API to get the JWT Token

    const onSubmitForm = async (event) => {
        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with thepreventDefault() method; the page is prevented from refreshing.

        try {
            const body = { email, password };

            // Creating a fetch request
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const parseRes = await response.json(); //parseResponse

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);

                setAuth(true);
                toast.success("Login Successful!");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }

            localStorage.setItem("token", parseRes.token);

            setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <Navbar />
            <div className="container py-5 h-100 login-container ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-lg p-3 mb-5 bg-body bg-white text-dark login-card">
                            <div className="card-body p-4 text-center">
                                <h2 className="mb-4 fw-bold">Welcome back!</h2>

                                <form onSubmit={onSubmitForm}>
                                    <div className="form-floating mb-4 ">
                                        <input type="email" name="email" className="form-control input-email" id="floatingEmail" value={email}
                                            onChange={(event) => onChange(event)} />
                                        <label for="floatingEmail">Email ID</label>
                                    </div>

                                    <div className="form-floating ">
                                        <input type="password" name="password" className="form-control input-password" id="floatingPassword" value={password}
                                            onChange={(event) => onChange(event)} />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-primary login-button">Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <p>Don't have an account? <Link to="/register" className="login-sub-text fw-bold text-success">Find a Tutor</Link> here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
