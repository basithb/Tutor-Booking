import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css";
import AdminDashboard from "./adminPanel/AdminDashboard";
import TutorDashboard from "./tutorPanel/TutorDashboard";
import CustomerDashboard from "./customerPanel/CustomerDashboard";


const Dashboard = ({ setAuth }) => {

    //Displaying states
    const [name, setName] = useState("")


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [user_type, setUserType] = useState("");

    async function getName() {
        try {

            const response = await fetch("http://localhost:5000/dashboard",
                {
                    method: "GET",
                    headers: { token: localStorage.token }
                });

            const parseRes = await response.json();

            setName(parseRes.user_name);
            console.log(parseRes);
            setUserType(parseRes.user_type);


            if (parseRes.user_type === "admin") {
                setFirstName("Admin");
                setLastName("Dashboard");
            }

            else if (parseRes.user_type === "customer") {

                setFirstName(parseRes.customer_firstname);
                setLastName(parseRes.customer_lastname);
            }

            else if (parseRes.user_type === "tutor") {

                setFirstName(parseRes.tutor_firstname);
                setLastName(parseRes.tutor_lastname);
            }

        } catch (error) {
            console.error(error.message);
        }
    }

    //logout() function
    const logout = async (event) => {

        event.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logged Out Successfully");
    }

    useEffect(() => {
        getName();
    }, []);

    return (


        <Fragment>

            {/* Log Out functionality works properly with the log out button below */}

            {/* <h1>Dashboard</h1>
            <h3>Hello {name}</h3>
            <button className="btn btn-primary" onClick={event => logout(event)}>Log Out</button> */}

            {/* Actual Logic */}

            {  
                user_type === "admin" ? <AdminDashboard /> : user_type === "customer" ? <CustomerDashboard /> : <TutorDashboard />
            }



            {/* Testing purposes (to be deleted later) */}

            {/* <TutorDashboard /> */}
            {/* <CustomerDashboard/> */}
            {/* <AdminDashboard /> */}


        </Fragment>
    )
}

export default Dashboard;