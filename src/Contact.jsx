import React from 'react';
import '../src/css/Contact.css';
import whatsapp from '../src/assets/whatsapp.png';
import message from '../src/assets/message.png';
import call from '../src/assets/call.png';
import map from '../src/assets/map.png';
import Mainslider from './Mainslider';
function Contact() {
    return (
        <>
        <Mainslider />
            <div id='maindiv' className='my-5 pt-5 d-md-block d-none'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 d-md-flex d-none'>
                            <div id="leftcontact">
                                <div className='d-flex justify-content-center flex-column align-items-center'>
                                    <h2 className='text-center text-white my-4'>Get in Touch</h2>
                                    <input type="text" placeholder='Name' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />
                                    <input type="text" placeholder='Email' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />

                                    <textarea placeholder='Message' name="" id="" className='bg-transparent w-75' cols="30" rows="10" style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }}></textarea>
                                    <button className='rounded-3 bg-white border-0 px-3 mt-3' style={{ 'color': '#EA8A32' }}>Send</button>
                                </div>
                            </div>
                            <div id="rightcontact" className='d-flex'>
                                <div className='w-25'></div>
                                <div className='w-75 py-5'>
                                    <h2 className='text-white text-center'>Contact Us</h2>
                                    <div className='d-flex my-4 align-items-center'>
                                        <img src={whatsapp} width="40px" alt="" />
                                        <h5 className='text-white mx-2'>+91 0123456789</h5>
                                    </div>

                                    <div className='d-flex my-4'>
                                        <img className='mt-2 mx-2' src={call} width="20px" height="20px" alt="" />
                                        <div>
                                            <h6 className='text-white mx-3'>+91 0123456789</h6>
                                            <h6 className='text-white mx-3'>+91 0123456789</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex my-4'>
                                        <img src={message} width="30px" height="30px" alt="" />
                                        <h6 className='text-white mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, deleniti?</h6>
                                    </div>
                                    <div className='d-flex my-4 pe-4'>
                                        <img src={map} width="100%" alt="" />
                                    </div>
                                    <div className='mb-4'>
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum autem voluptas natus. Quasi rem eum sit libero, placeat molestias quae!</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        
                    </div>
                    <div className="row mx-0 my-5 w-100 p-0 d-flex justify-content-center">
                        <div className="col-11 mb-5 d-flex justify-content-center">
                            <div className="w-100 rounded d-flex flex-column align-items-center justify-content-center py-3 px-5" style={{ 'backgroundColor': 'black' }}>
                                <h3 className="text-white my-3">Stay Informed</h3>
                                <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5 p-0 d-md-none d-block' style={{'position':'relative','top':'600px'}}>
                <div className='container-fluid p-0'>
                    <div className='row m-0 p-0'>
                        <div className='col-12 d-md-flex d-none'>
                            <div id="leftcontact">
                                <div className='d-flex justify-content-center flex-column align-items-center'>
                                    <h2 className='text-center text-white my-4'>Get in Touch</h2>
                                    <input type="text" placeholder='Name' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />
                                    <input type="text" placeholder='Email' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />

                                    <textarea placeholder='Message' name="" id="" className='bg-transparent w-75' cols="30" rows="10" style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }}></textarea>
                                    <button className='rounded-3 bg-white border-0 px-3 mt-3' style={{ 'color': '#EA8A32' }}>Send</button>
                                </div>
                            </div>
                            <div id="rightcontact" className='d-flex'>
                                <div className='w-25'></div>
                                <div className='w-75 py-5'>
                                    <h2 className='text-white text-center'>Contact Us</h2>
                                    <div className='d-flex my-4 align-items-center'>
                                        <img src={whatsapp} width="40px" alt="" />
                                        <h5 className='text-white mx-2'>+91 0123456789</h5>
                                    </div>

                                    <div className='d-flex my-4'>
                                        <img className='mt-2 mx-2' src={call} width="20px" height="20px" alt="" />
                                        <div>
                                            <h6 className='text-white mx-3'>+91 0123456789</h6>
                                            <h6 className='text-white mx-3'>+91 0123456789</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex my-4'>
                                        <img src={message} width="30px" height="30px" alt="" />
                                        <h6 className='text-white mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, deleniti?</h6>
                                    </div>
                                    <div className='d-flex my-4 pe-4'>
                                        <img src={map} width="100%" alt="" />
                                    </div>
                                    <div className='mb-4'>
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum autem voluptas natus. Quasi rem eum sit libero, placeat molestias quae!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-md-none d-flex flex-column p-0 m-0'>


                            {/* <div className='w-25'></div> */}
                            <div className='w-100 py-4' style={{'backgroundColor':'black'}}>
                                <h2 className='text-white text-center'>Contact Us</h2>
                                <div className='d-flex px-3 my-4 align-items-center'>
                                    <img src={whatsapp} width="40px" alt="" />
                                    <h5 className='text-white mx-2'>+91 0123456789</h5>
                                </div>

                                <div className='d-flex px-3 my-4'>
                                    <img className='mt-2 mx-2' src={call} width="20px" height="20px" alt="" />
                                    <div>
                                        <h6 className='text-white mx-3'>+91 0123456789</h6>
                                        <h6 className='text-white mx-3'>+91 0123456789</h6>
                                    </div>
                                </div>
                                <div className='d-flex px-4 my-4'>
                                    <img src={message} width="30px" height="30px" alt="" />
                                    <h6 className='text-white mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, deleniti?</h6>
                                </div>
                                <div className='d-flex my-4 px-3'>
                                    <img src={map} width="100%" alt="" />
                                </div>
                                <div className='mb-4 mx-2'>
                                    <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum autem voluptas natus. Quasi rem eum sit libero, placeat molestias quae!</p>
                                </div>
                            </div>
                            <div style={{ 'backgroundColor': '#EA8A32' }}>
                                <div className='d-flex justify-content-center flex-column align-items-center'>
                                    <h2 className='text-center text-white my-4'>Get in Touch</h2>
                                    <input type="text" placeholder='Name' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />
                                    <input type="text" placeholder='Email' className='bg-transparent w-75 my-4' style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }} />

                                    <textarea placeholder='Message' name="" id="" className='bg-transparent w-75' cols="30" rows="10" style={{ 'borderBottom': '1px solid black', 'borderTop': '0px', 'borderRight': '0px', 'borderLeft': '0px' }}></textarea>
                                    <button className='rounded-3 bg-white border-0 px-3 mt-3 mb-3' style={{ 'color': '#EA8A32' }}>Send</button>

                                </div>
                            </div>
                        </div>



                        
                    </div>
                    <div className="row mx-0 my-5 w-100 p-0 d-flex justify-content-center">
                        <div className="col-11 mb-5 d-flex justify-content-center">
                            <div className="w-100 rounded d-md-flex d-none flex-column align-items-center justify-content-center py-3 px-5" style={{ 'backgroundColor': 'black' }}>
                                <h3 className="text-white my-3">Stay Informed</h3>
                                <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                            </div>


                            <div className="w-100 rounded d-flex d-md-none flex-column align-items-center justify-content-center py-3 px-4" style={{ 'backgroundColor': 'black' }}>
                            <h3 className="text-white mb-3 mt-2">Stay Informed</h3>
                            <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                        </div>
                        </div>


                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Contact;