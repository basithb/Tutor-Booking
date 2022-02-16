import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Twticon} from "bootstrap-icons/icons/twitter.svg";


const LandingFooter = () => {
    return(
        <Fragment>
            <footer class="page-footer font-small p-4 bg-light text-dark fixed-bottom">
    
                <div class="container text-center">
                    <div class="row">
    
                        <div class="col-md mt-1 mb-1">
                            <h5 class="font-weight-bold">tutor'd</h5>
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
                                    <a class="text-dark text-decoration-none" href="https://twitter.com/basith_twt"> <Twticon /> Twitter
                                    </a>
                                </li>
                    
                            </ul>
                        </div>
    
    
                    </div>
    
                </div>
    
                {/* <div class="text-center py-1" id="copyright">  
                    basith
                </div> */}
    
            </footer>
        </Fragment>
    );
};

export default LandingFooter;