import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Category.css";
import PanelBackdrop from "../backdropPanel/PanelBackdrop";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const Category = (props, { setAuth }) => {
    try {

    } catch (error) {
        console.error(error.message);
    }

    const isActive = "category";

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

                                                <form >
                                                    <div className="modal-body">
                                                        <div className="col-md-12 mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" name="categoryEducationLevel" className="form-control input-categoryEducationLevel" id="floatingcategoryEducationLevel" required />
                                                                    <label for="floatingcategoryEducationLevel">Education Level</label>
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
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Education Level</th>
                                                    <th class="text-center text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Primary School</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-danger btn btn-sm">Deactivate</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="align-middle text-center">
                                                        <p class="text-xs font-weight-bold mb-0">Middle School</p>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <button className="btn-success btn btn-sm">Activate</button>
                                                    </td>

                                                </tr>

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

export default Category;