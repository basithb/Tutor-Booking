import React, {Fragment, useState, useEffect} from "react";

const Dashboard = ({setAuth}) => {

//displaying states
const [name, setName] = useState("")

async function getName() {
    try {
   
    const response = await fetch("http://localhost:5000/dashboard",
    {
        method: "GET",
        headers: {token: localStorage.token}
    });
    
    const parseRes = await response.json();
    
    setName(parseRes.user_name);

    } catch (error) {
        console.error(error.message);
    }
}


//logout() function
const logout = async (event) => {

event.preventDefault();
localStorage.removeItem("token");
setAuth(false);
}

useEffect(() => {
    getName();
},[]);

    return (
        <Fragment>
            <h1>Dashboard</h1>
            <h3>Hello {name}</h3>
            <button className="btn btn-primary" onClick={event => logout(event)}>Log Out</button>
            
        </Fragment>
    )
}

export default Dashboard;