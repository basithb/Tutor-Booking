import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";

const Login = ({setAuth}) => {

    
    // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        email: "",
        password: ""
        });

     // Destructuring
     const {email, password } = inputs;

     //onChange() function to change default values from the inputs i.e email ,name, and password.
 
     const onChange = (event) => {
         setInputs({...inputs, [event.target.name] : event.target.value });
     };  
     
     
     //onSubmit() function to submit the inputs to our RESTful API to get the JWT Token

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with thepreventDefault() method; the page is prevented from refreshing. 

        try {
            
            const body = {email, password};

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/auth/login",
                {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
              );

        const parseRes = await response.json(); //parseResponse


        localStorage.setItem("token", parseRes.token);

        setAuth(true);

        } catch (error) {
            console.error(error.message);
        }
        
    } 
    
    return (
        <Fragment>
            <h1 className="text-center my-5">Login</h1>

            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="Enter your Email" className="form-control my-3"  value={email} onChange={event => onChange(event)}/>

                <input type="password" name="password" placeholder="Enter your Password" className="form-control my-3"
                value={password} onChange={event => onChange(event)}/>

                <div className="d-grid">
                <button className="btn btn-outline-success ">Submit</button>
                </div>
              
            </form>
            <Link to="/register">Register</Link>
        </Fragment>
    )
}

export default Login;
