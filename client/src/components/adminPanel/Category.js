import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Category.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminCategory = (props, { setAuth }) => {


    // // Collecting state from these forms
    const [inputs, setInputs] = useState({
        // Default values
        category_name: "",

    });

    // // Destructuring
    const { category_name } = inputs;

    // //onChange() function to change default values from the inputs i.e email ,name, and password.

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const [data, setData] = useState([]);


    //getCategoryDetails() function to fetch details from tbl_category

    async function getCategoryDetails() {

        try {

            const response = await fetch("http://localhost:5000/fetch/category", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setData(parseRes);

        } catch (err) {

            console.error(err.message);

        }
    }


    //onSubmitForm() function to add a new category to tbl_category

    const onSubmitForm = async (event) => {

        event.preventDefault(); // by default on clicking the 'Submit' button the page refreshes but with the preventDefault() method; the page is prevented from refreshing. 

        try {

            const body = { category_name };

            // Creating a fetch request 
            const response = await fetch(
                "http://localhost:5000/add/category",
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
                toast.success("Category Addition Successful!", {
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


    //onCategoryDeactivate() function to deactivate a category from tbl_category

    async function onCategoryDeactivate(category_id) {

        try {

            const body = { category_id };

            const response = await fetch("http://localhost:5000/deactivate/category", {
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
        getCategoryDetails();
    }, [0]);

    const isActive = "admin-category";

    return (
        <Fragment>
            <body>
                <PanelBackdrop />
                <AdminNavbar />
                <AdminSidebar setAuth={setAuth} isActive={isActive} />
                <main className="main-content position-relative border-radius-lg">

                    <div className="container-fluid py-4">

                        <div class="col-11">
                            <div class="card card-category mb-4 pb-4">
                                <div class="card-header card-category-header pb-1">
                                    <h6 className="text-uppercase card-category-header-text">Category(s)</h6>

                                    <button type="button" class="btn-add-category btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Add Category
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header modal-category-header">
                                                    <h5 class="modal-title modal-title-category fw-bold" id="staticBackdropLabel">Enter Category Details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <form onSubmit={onSubmitForm}>
                                                    <div className="modal-body">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-floating">
                                                                <input type="text" name="category_name" className="form-control input-categoryName" id="floatingcategoryName" value={category_name} onChange={(event) => onChange(event)} required />
                                                                <label for="floatingcategoryName">Education Level</label>
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Education Level</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    data.map((item, index) => (
                                                        <tr key={item.category_id}>
                                                            <th class="align-middle text-center" scope="row">{index + 1}</th>
                                                            <td class="align-middle text-center">{item.category_name}</td>
                                                            {
                                                                item.category_status === "active" ?
                                                                    <td class="align-middle text-center">
                                                                        <button className="btn-danger btn btn-sm" onClick={() => onCategoryDeactivate(item.category_id)} title="Deactivate Category">Deactivate</button>
                                                                    </td>
                                                                    :
                                                                    <td class="align-middle text-center">

                                                                        <button className="btn-success btn btn-sm" onClick={() => onCategoryDeactivate(item.category_id)} title="Activate Category">Activate</button>
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

export default AdminCategory;