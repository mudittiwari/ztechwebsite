import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Knowus.css';
import whoareweone from '../src/assets/whoareweone.png';
import whoarewetwo from '../src/assets/whoarewetwo.png';
import journey from '../src/assets/journey.png';
import journeytwo from '../src/assets/journeytwo.png';
import founder from '../src/assets/founder.png';
function Knowus() {
    return (
        <>
            <div id='maindiv'>
                <div className='container-fluid m-0 p-0'>
                    <div className='row p-3'>
                        <div className='col-12'>
                            <h2 className='my-2 text-capitalize'>Who are we?</h2>
                        </div>
                        <div className='col-12 mb-5'>
                            <p>We are a group of companies under a common alias “ZULU”. We are a client based service which provides Tech services like web and android development, graphics designing, animation, UI/UX etc. under the title “ZITS”. We also provide teaching services for the latest technologies under the domain “Z-TECH Ed”. Our past experience and trust has been built on the satisfied customers and learners, many of which are working with us. We not only create scholars but we also create jobs.






                            </p>
                        </div>
                        <div className='col-6'>
                            <img src={whoareweone} width="100%" alt="" />
                        </div>
                        <div className='col-6 d-flex align-items-center'>
                            <p>We are also launching “Z-TRON” soon for the fields of Robotics and AI. We’re working on the prototypes already for deployment. It is all about the latest and the core technologies related to the field. We’ll even teach everything about it. Our new project “ZVR” is also on the way to bring a unique way to bring out the art in to the world. Be it sketches or portraits… or even landscape paintings.</p>
                        </div>


                        <div className='col-6 d-flex align-items-center'>
                            <p>We are sure and proud about our work. We work for the sole purpose of our customers’ and learners’ satisfaction. Our works and services speak for itself. We don’t create contracts… We make families; we make the greatest of bonds with our people. We care for you.
                                “ZULU” is not the best, as we keep on improving every day. We are constantly worried about raising the standards of our services more and more.</p>
                        </div>
                        <div className='col-6'>
                            <img src={whoarewetwo} width="100%" alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className='text-center my-4'>Our Journey</h2>
                        </div>
                        <div className='col-12'>
                            <img src={journey} width="100%" alt="" />
                        </div>
                        <div className='col-12 my-4'>
                            <p className='px-3'>Journeys are best told in the form of stories. Therefore, it all started in 2019, on a fine evening when a problem statement arrived for a national level hackathon. Our solution was quite approachable but still needed a lot of improvement. We somehow pitched the idea but due to lack of experience we weren’t able to take it further. Although, we weren’t selected we still didn’t drop the idea and worked on a prototype for an IoT based hardware which was offered a 20 Million INR funding from a renowned foundation. Due to some internal factors we had to drop that idea.

                            </p>
                        </div>
                        <div className='col-5 px-4'>
                            <img src={journeytwo} width="100%" alt="" />
                        </div>
                        <div className='col-7'>
                            <p>This was the real turning point for us to enter in the world with a group and chain of companies which we always had hoped for. The COVID-19 served as a life changing event in our growth where we actually took a chance to learn about the actual working of the country through the IT sector and the demand for it. We started our tour from teaching the students of various cities, states and even countries to code, program and execute various applications. We taught about the latest technologies and finally our team was created. At that time we knew, we were ready to enter the market for the better.</p>
                        </div>
                        <div className='col-12 mt-4 px-4'>
                            <p>ZULU was created to solve Real-Time problems effectively and innovatively. We’re here to sustain.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 px-4'>
                            <h2>Founder</h2>
                        </div>
                        <div className='col-12 mb-5 mt-3' style={{ 'backgroundColor': '#EA8A32' }}>
                            <div className='row'>
                                <div className='col-5 p-4'>
                                    <img src={founder} width="100%" alt="" />
                                </div>
                                <div className='col-7 d-flex justify-content-center align-items-center'>
                                    <p className='fw-bold'>“I was there for motivation…”
                                        The real challenges are the small checkpoints where we see us growing and are worried about being consistent, incompetent and to sustain for the future. I worked as a freelancer for a significant amount of time, which helped me in learning the demands and traits of the client side efficiently. I approached a lot of local based clients for some of the services and there I learnt the actual need of India for technical shifting which gave me the idea for my own startup to be based on helping the country’s economy in a serving way.
                                        I’m not a great personality or an idol to look forward to. I’m just your mate, your teacher, or colleague. I’m just like you willing to take steps forward to progress.
                                        <br />
                                        -Bhavansh Jangir (Founder and CEO)</p>
                                </div>
                                <div className='col-12 p-4'>
                                    <p>Ye ZVR------
                                        Pen down your originals...
                                        Paint your hopes.
                                        Bring it to the imagination,
                                        We're here folks.

                                        ZVR coming soon...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 w-100 d-flex justify-content-center">
                        <div className="col-11 mb-5 d-flex justify-content-center">
                            <div className="w-100 rounded d-flex flex-column align-items-center justify-content-center py-3 px-5" style={{ 'backgroundColor': 'black' }}>
                                <h3 className="text-white my-3">Stay Informed</h3>
                                <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Knowus;