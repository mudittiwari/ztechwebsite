import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Knowus from "./Knowus";
import Footer from "./Footer";
import Contact from "./Contact";
import News from "./News";
import Career from "./Career";
import { useEffect } from "react";
function App(){
    
    return( 
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                {/* <Route exact path="/ztechwebsite/" element={<Homepage/>}/> */}
                <Route exact path="/Knowus" element={<Knowus/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
                <Route exact path="/News" element={<News/>}/>
                <Route exact path="/Career" element={<Career/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
    );
}
export default App;