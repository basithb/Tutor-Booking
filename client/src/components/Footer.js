import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import './landingPage/Landing.css';
import { ReactComponent as Twticon} from "bootstrap-icons/icons/twitter.svg";


const LandingFooter = () => {
    return(
        <Fragment>
            <footer class="page-footer font-small p-4 bg-light text-dark fixed-bottom">
    
                <div class="container text-center">
                    <div class="row">
    
                        <div class="col-md mt-1 mb-1 pt-3 fw-bold">
                            <a class="navbar-brand text-dark" href="/tutor">
                            tutor'd
                        </a>
                        </div>

                        <div class="col-md mt-1 mb-1">
                            <h5 class="font-weight-bold">Contact Us</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <p>hello@tutord.com</p>
                                </li>
                            </ul>
                        </div>
    
                        <div class="col-md mt-1 mb-1">
                            <h5 class="font-weight-bold">Socials</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-dark text-decoration-none" target="_blank"href="https://twitter.com/basith_twt"> <Twticon /> Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default LandingFooter;
