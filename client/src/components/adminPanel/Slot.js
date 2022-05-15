import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slot.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminSlot = (props, { setAuth }) => {

      // // Collecting state from these forms
      const [inputs, setInputs] = useState({
        // Default values
        slot_date: "",
        slot_time: "",
    
    });

    function formatDateInput(stringDate){
        var curr = new Date(stringDate);
        curr.setDate(curr.getDate()+1);
        var date = curr.toUTCString().substring(5,17);
        return date;
    }


    // // Destructuring
    const { slot_date, slot_time } = inputs;

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const [data, setData] = useState([]);


    //getSlotDetails() function to fetch details from tbl_slot

    async function getSlotDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/slot", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setData(parseRes);

        } catch (err) {

            console.error(err.message);

        }
    }


   //onSubmitForm() function to add slot details in tbl_slot

   const onSubmitForm = async (event) => {

    event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

    try {

        const body = { slot_date, slot_time };

        // Creating a fetch request 
        const response = await fetch(
            "http://localhost:5000/add/slot",
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

            toast.success("Slot Addition Successful!",{
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

 //onSlotDeactivate() function to deactivate a slot from tbl_slot

 async function onSlotDeactivate(slot_id) {

    try {

        const body = { slot_id };

        const response = await fetch("http://localhost:5000/deactivate/slot", {
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
    getSlotDetails();
}, [0]);

    const isActive = "admin-slot";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                    <div className="container-fluid py-4">

                        <div class="col-11">
                            <div class="card card-slot mb-4 pb-4">
                                <div class="card-header card-slot-header pb-1">
                                    <h6 className="text-uppercase card-slot-header-text">Slot(s)</h6>

                                    <button type="button" class="btn-add-slot btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Slot
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header modal-slot-header">
                                                    <h5 class="modal-title modal-title-slot fw-bold" id="staticBackdropLabel">Enter Slot Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form onSubmit={onSubmitForm}>
                                                    <div className="modal-body">

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="date" name="slot_date" className="form-control input-slotStartDate" id="floatingSlotStartDate" value={slot_date} onChange={(event) => onChange(event)} min="2022-04-08" required />
                                                                <label for="floatingStartDate">Date</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="time" name="slot_time" className="form-control input-slotStartTime" id="floatingSlotStartTime" value={slot_time} onChange={(event) => onChange(event)} min="08:00" max="22:00" required />
                                                                <label for="floatingStartTime">Time</label>
                                                            </div>
                                                        </div>


                                                        <div className="add-slot-done-div">
                                                            <button className="btn btn-success add-slot-done-button">Done</button>
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Time</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            {
                                                    data.map((item, index) => (
                                                        <tr key={item.slot_id}>
                                                            <th class="align-middle text-center" scope="row">{index + 1}</th>
                                                            <td class="align-middle text-center">{formatDateInput(item.slot_date)}</td>
                                                            <td class="align-middle text-center">{item.slot_time}</td>
                                                            {
                                                                item.slot_status === "active" ?
                                                                    <td class="align-middle text-center">
                                                                        <button className="btn-danger btn btn-sm" onClick={() => onSlotDeactivate(item.slot_id)} title="Deactivate Slot">Deactivate</button>
                                                                    </td>
                                                                    :
                                                                    <td class="align-middle text-center">

                                                                        <button className="btn-success btn btn-sm" onClick={() => onSlotDeactivate(item.slot_id)} title="Activate Slot">Activate</button>
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


            </body>
        </Fragment>
    )


}

export default AdminSlot;