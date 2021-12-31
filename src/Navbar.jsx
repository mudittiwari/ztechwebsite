import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Navbar.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import Navlink from 'react-router-dom';
import homepagebackground from  '../src/assets/homepagebackground.png';
function Navbar()
{
    return (
        <>
            <div id="upper_navbar" className="d-flex justify-content-between align-items-center">
                <div id="upper_navbar_left">
                    <h5 className="text-white mx-3 my-0">ABCDEF</h5>
                </div>
                <div id="upper_navbar_right">
                    <ul id="upper_navbar_right_list" className="d-flex align-items-center m-0 p-0">
                        <li className="mx-3"><NavLink to="/">Home</NavLink></li>
                        <li className="mx-3"><NavLink to="/Knowus">Know Us</NavLink></li>
                        <li className="mx-3"><NavLink to="/Contact">Get in Touch</NavLink></li>
                    </ul>
                </div>
            </div>
            <div id="lower_navbar">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-4 d-flex justify-content-center align-items-center h-100">
                            <ul className="lower_navbar_list m-0 p-0">
                                <li className="my-2"><a href="#">Companies</a></li>
                                <li className="my-2"><a href="#">Coming Soon</a></li>
                                <li className="my-2"><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center h-100">
                            <ul className="lower_navbar_list m-0 p-0">
                                <li className="my-2"><a href="#">Business Verticles</a></li>
                                <li className="my-2"><a href="#">Vision/Mission</a></li>
                                <li className="my-2"><a href="#">Social Media</a></li>
                            </ul>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center h-100">
                            <ul className="lower_navbar_list m-0 p-0" style={{'height':'104px'}}>
                                <li className="my-2"><a href="#">Stay Informed</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;