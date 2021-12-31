import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Knowus from "./Knowus";
import Footer from "./Footer";
import Contact from "./Contact";
function App(){
    return( 
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/Knowus" element={<Knowus/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
    );
}
export default App;