import React from "react";
import a1 from '../src/assets/a1.png';
import a2 from '../src/assets/a2.png';
import a3 from '../src/assets/a3.png';
import a4 from '../src/assets/a4.png';
import a5 from '../src/assets/a5.png';
import a6 from '../src/assets/a6.png';
import a7 from '../src/assets/a7.png';
import Mainslider from "./Mainslider";
function Career() {
    return (
        <>
            <Mainslider / >
            <div id="maindiv" style={{'position':'relative','top':'700px'}}>
            <div className="container-fluid p-0">
                <div className="row">

                    <div className="row px-4 d-md-flex d-none justify-content-center">
                        <div className="col-12 mt-4">
                            <h6 className="text-capitalize mx-3 my-2 mb-4">Web Dev</h6>
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a1} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0" >
                            <img src={a3} className='img-fluid' alt="" />
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-3 mx-4 p-0">
                            <img src={a4} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        </div>
                    </div>


                    <div className="row d-md-none d-flex justify-content-around m-0">
                        <div className="col-12 mt-4">
                            <h6 className="text-capitalize mx-3 my-2 mb-4 text-center">Web Dev</h6>
                        </div>
                        <div className="col-3 p-0">
                            <img src={a1} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0">
                            <img src={a2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0" >
                            <img src={a3} className='img-fluid' alt="" />
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-3 mx-4 p-0">
                            <img src={a4} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        </div>
                    </div>





                    <div className="row mt-5 px-4 d-md-flex d-none justify-content-center">
                        <div className="col-12">
                            <h6 className="text-capitalize mx-3 my-2 mb-4">App Dev</h6>
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0" >
                            <img src={a3} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0" >
                            <img src={a4} className='img-fluid' alt="" />
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-3 mx-4 p-0 ">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a7} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 mx-4 p-0">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        </div>
                    </div>



                    <div className="row mt-5 px-4 d-flex d-md-none justify-content-around mx-0">
                        <div className="col-12">
                            <h6 className="text-capitalize mx-3 my-2 mb-4 text-center">App Dev</h6>
                        </div>
                        <div className="col-3 p-0">
                            <img src={a2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0" >
                            <img src={a3} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0" >
                            <img src={a4} className='img-fluid' alt="" />
                        </div>
                        <div className="row mt-3 d-flex justify-content-around mx-0">
                        <div className="col-3 p-0 ">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0">
                            <img src={a7} className='img-fluid' alt="" />
                        </div>
                        <div className="col-3 p-0">
                            <img src={a5} className='img-fluid' alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="row mx-0 my-5 w-100 p-0 d-flex justify-content-center pb-5">
                        <div className="col-11 d-flex justify-content-center mb-5">
                            <div className="w-100 rounded d-flex flex-column align-items-center justify-content-center py-3 px-5" style={{ 'backgroundColor': 'black' }}>
                                <h3 className="text-white my-3">Stay Informed</h3>
                                <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Career;