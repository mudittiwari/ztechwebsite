import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Navbar.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import Navlink from 'react-router-dom';
import homepagebackground from  '../src/assets/homepagebackground.png';
import { useEffect } from "react";
import $ from 'jquery';
function Navbar()
{
    useEffect(()=>{
        $(document).ready(function(){
            setTimeout(function(){ test(); });
        });
        $(window).on('resize', function(){
            setTimeout(function(){ test(); }, 500);
        });
        $(".navbar-toggler").click(function(){
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function(){ test(); });
        });
        
    },[]);
    function test(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }
    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg" style={{'marginTop':'31px'}}>
        <a className="navbar-brand navbar-logo" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item active">
                <Link className="nav-link" to="/"><i className="far fa-calendar-alt"></i>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/News"><i className="far fa-calendar-alt"></i>News</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Career"><i className="far fa-calendar-alt"></i>Career</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Contact"><i className="far fa-calendar-alt"></i>Get in Touch</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Knowus"><i className="far fa-calendar-alt"></i>Know us</Link>
                </li>
            </ul>
        </div>
    </nav>
        </>
    );
}

export default Navbar;