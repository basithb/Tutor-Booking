import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({setAuth}) => {

    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        email: "",
        password: "",
        name: "",
        });

    // Destructuring
    const {email, password, name } = inputs;

    //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({...inputs, [event.target.name] : event.target.value });
    };

    //onSubmit() function to submit the inputs to our RESTful API to get the JWT Token

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with thepreventDefault() method; the page is prevented from refreshing. 

        try {
            
            const body = {email, password, name };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/auth/register",
                {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
              );

        const parseRes = await response.json(); //parseResponse

        if(parseRes.token) {
            localStorage.setItem("token", parseRes.token);

            setAuth(true);
            toast.success("Registration Successful!");

        }

        else{
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
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitForm}>

                <input type="text" name="name" placeholder="Enter your Name" className="form-control my-3" value={name} onChange={event => onChange(event)} />

                <input type="email" name="email" placeholder="Enter your Email" className="form-control my-3" value={email} onChange={event => onChange(event)}  />

                <input type="password" name="password" placeholder="Enter your Password" className="form-control my-3" value={password} onChange={event => onChange(event)} />

                <div className="d-grid">
                <button className="btn btn-outline-success ">Submit</button>
                </div>
               
            </form>
            <Link to="/login">Login</Link>
        </Fragment>
    );
};

export default Register;