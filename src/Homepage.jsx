import React, { useRef } from "react";
import '../src/css/Homepage.css';
import homepagefirst from '../src/assets/homepagefirst.png';
import company1 from '../src/assets/company1.png';
import company2 from '../src/assets/company2.png';
import company6 from '../src/assets/company6.png';
import company5 from '../src/assets/company5.png';
import comingsoon from '../src/assets/comingsoon.png';
import career from '../src/assets/career.png';
import buisnessone from '../src/assets/buisnessone.png';
import buisnessthree from '../src/assets/buisnessthree.png';
import buisnessfive from '../src/assets/buisnessfive.png';
import buisnessfour from '../src/assets/buisnessfour.png';
import vision from '../src/assets/Vision.png';
import mission from '../src/assets/Mission.png';
import sliderone from '../src/assets/sliderone.jpg';
import slidertwo from '../src/assets/slidertwo.jpg';
import rotateone from '../src/assets/rotateone.png';
import sliderthree from '../src/assets/sliderthree.jpg';
import rotatetwo from '../src/assets/rotatetwo.png';
import rotatethree from '../src/assets/rotatethree.png';
import worldmap from '../src/assets/worldmap.png';
import sample from '../src/assets/sample.png';
import sample2 from '../src/assets/sample2.png';
import visionmain from '../src/assets/visionmain.png';
import '../src/css/scss/homepage.scss';
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Homepageslider from "./homepageslider";
function Homepage() {
    // var posi='-400px';
    const [posi, changeposi] = useState("-400px");
    const [posi2, changeposi2] = useState("400px");
    const containerRef = useRef(null);
    const [isvisible, setvisible] = useState(false);
    const callbackfun = (entries) => {
        const [entry] = entries;
        setvisible(entry.isIntersecting);
        if (isvisible) {
            if (posi == '-400px') {
                changeposi("0px")
                changeposi2("0px");
            }
        }
    }
    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    useEffect(() => {
        document.querySelector('#toggle-animation').addEventListener('click', classToggle);
        const observer = new IntersectionObserver(callbackfun, option);
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    });
    function classToggle() {
        var el = document.querySelector('.icon-cards__content');
        el.classList.toggle('step-animation');
    }







    return (
        <>
            <div id="maindiv" className="container-fluid m-0 p-0">
                <div className="row m-0 mt-5 p-0 d-none d-md-block" style={{ 'border': '1px solid #000000' }}>
                    <div className="col-4 m-0 p-0">
                        <img className="m-0" src={homepagefirst} alt="" width="100%" />
                    </div>
                    <div className="col-8 d-flex flex-column m-0 p-0 justify-content-center">
                        <div className="px-5">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        </div>
                        <div className="px-5 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consectetur fringilla gravida pellentesque massa. At lorem ullamcorper mi tristique nec bibendum tempus augue. Tincidunt dolor curabitur leo vulputate interdum sit ultrices massa nunc. Ipsum diam tempor diam sagittis, sed aliquam. Mauris accumsan facilisi aenean pretium.
                        </div>
                    </div>
                </div>



                <div className="row m-0 mt-5 p-0 d-block d-md-none" style={{ 'border': '1px solid #000000' }}>
                    <div className="col-12 mt-3"><div className="px-3">
                        <h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div></div>
                    <div className="col-12 m-0 p-0">
                        <img className="m-0" src={homepagefirst} alt="" width="100%" />
                    </div>
                    <div className="col-12 d-flex flex-column m-0 p-0 justify-content-center">

                        <div className="px-3 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consectetur fringilla gravida pellentesque massa. At lorem ullamcorper mi tristique nec bibendum tempus augue. Tincidunt dolor curabitur leo vulputate interdum sit ultrices massa nunc. Ipsum diam tempor diam sagittis, sed aliquam. Mauris accumsan facilisi aenean pretium.
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-0 w-100">
                    <div className="col-12 my-5 d-md-block d-none">
                        <h2 className="text-black w-100 text-center text-capitalize">Companies</h2>
                    </div>
                    <div className="col-12 mt-4 d-md-none d-block">
                        <h2 className="text-black w-100 text-center text-capitalize">Companies</h2>
                    </div>
                    <div className="d-md-flex justify-content-center flex-column align-items-center my-5 d-none">
                        <figure className="icon-cards mt-3" style={{ 'position': 'relative', 'top': '0px' }}>
                            <div className="icon-cards__content">
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotateone} width="100%" alt="" /></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotatetwo} width="100%" alt="" /></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotatethree} width="100%" alt="" /></div>
                            </div>
                        </figure>

                        <div class="checkbox d-none">
                            <input class="d-none" id="toggle-animation" type="checkbox" checked />
                            <label class="checkbox__checkbox" for="toggle-animation"></label>
                            <label class="checkbox__label" for="toggle-animation">Toggle animation</label>
                        </div>
                    </div>
                    <div className="d-md-none justify-content-center flex-column align-items-center mt-3 mb-4 d-flex">
                        <figure className="icon-cards mt-3" style={{ 'position': 'relative', 'top': '0px' }}>
                            <div className="icon-cards__content">
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotateone} width="100%" alt="" /></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotatetwo} width="100%" alt="" /></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><img src={rotatethree} width="100%" alt="" /></div>
                            </div>
                        </figure>

                        <div class="checkbox d-none">
                            <input class="d-none" id="toggle-animation" type="checkbox" checked />
                            <label class="checkbox__checkbox" for="toggle-animation"></label>
                            <label class="checkbox__label" for="toggle-animation">Toggle animation</label>
                        </div>
                    </div>


                </div>

                <div className="row m-0 p-0">
                    <div className="col-12 d-md-none d-block mb-4">
                        <h3 className="text-black my-3 text-capitalize text-center">Serving Globally</h3>
                    </div>
                    <div className="col-12 d-md-block d-none">
                        <h3 className="text-black my-5 text-capitalize text-center">Serving Globally</h3>
                    </div>
                    <div className="col-12 px-5">
                        <img className="w-100 img-fluid" src={worldmap} alt="" />
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-12">
                        <h3 className="text-black my-5 text-capitalize text-center">Mission and Vision</h3>
                    </div>
                    <div className="row m-0 p-0 d-md-none d-flex justify-content-center">
                        <div className="col-12">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <h3 >Mission</h3>
                                <img className="my-2" src={mission} alt="" style={{'marginLeft':'17px'}} />
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non cupiditate consequuntur beatae maiores repudiandae unde, quasi vitae rem molestias eius nesciunt exercitationem eum at nulla laboriosam minima. Totam, beatae.</p>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <h3 >Mission</h3>
                                <img className="my-2" src={vision} alt="" style={{'marginLeft':'17px'}} />
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non cupiditate consequuntur beatae maiores repudiandae unde, quasi vitae rem molestias eius nesciunt exercitationem eum at nulla laboriosam minima. Totam, beatae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-md-flex align-items-center m-0 p-0 d-none">
                        <div className="col-3 m-0 p-0 d-flex">
                            <img src={sample2} className="img-fluid" alt="" />
                            <img src={mission} style={{ 'position': 'relative', 'right': '126px', 'top': '38px', 'height': '75px' }} alt="" />
                        </div>
                        {/* <div className="col-1"></div> */}
                        <div className="col-9 m-0 px-2 ">
                            “To be there… Everywhere”
                        </div>



                        {/* <div className="col-1"></div> */}
                        <div className="col-9 m-0 px-2">
                            What we see is often in our own grasp. But, the real challenge is to present it innovatively.
                            We are not here just to Grow or Conquer, We’re here to sustain. We value our customers so much that, we can’t afford mistakes.
                            Our vision is our Service.

                        </div>
                        <div className="col-3 m-0 p-0 d-flex justify-content-end">
                            {/* <div> */}
                            <img src={sample} className="img-fluid" alt="" />
                            {/* <img src={vision} className="img-fluid" style={{'position':'relative','right':'194px','top':'30px','height':'75px'}} alt="" /> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="row mx-0 p-0 my-5 d-md-block d-none" ref={containerRef}>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <p className="p-3" style={{ 'transform': `translateX(${posi})`, 'transition': 'all 1s' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt ducimus delectus nam repellat praesentium, exercitationem saepe molestiae temporibus odio vel enim, quisquam illum, ab perspiciatis tempore animi incidunt obcaecati. Impedit sapiente incidunt veniam, minus, laboriosam voluptas, accusamus quam ducimus odio esse ab? Rem est cum vero voluptatem facilis iusto.
                        </p>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <img className="w-100 img-fluid" src={visionmain} alt="" />
                    </div>
                    <div className="col-4 d-flex justify-content-start align-items-center">
                        <p className="p-3" style={{ 'transform': `translateX(${posi2})`, 'transition': 'all 1s' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt ducimus delectus nam repellat praesentium, exercitationem saepe molestiae temporibus odio vel enim, quisquam illum, ab perspiciatis tempore animi incidunt obcaecati. Impedit sapiente incidunt veniam, minus, laboriosam voluptas, accusamus quam ducimus odio esse ab? Rem est cum vero voluptatem facilis iusto.
                        </p>
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-12 mt-5 mb-5 d-md-block d-none">
                        <h2 className="text-black w-100 text-center text-capitalize">Coming Soon</h2>
                    </div>
                    <div className="col-12 mt-4 mb-4 d-md-none d-block">
                        <h2 className="text-black w-100 text-center text-capitalize">Coming Soon</h2>
                    </div>

                    <Carousel controls={false} className="p-0 m-0">
                        <Carousel.Item>
                            <Homepageslider />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Homepageslider />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Homepageslider />
                        </Carousel.Item>
                    </Carousel>

                </div>


                <div className="row mx-0 my-5 w-100 p-0 d-flex justify-content-center">
                    <div className="col-11 mb-5 d-flex justify-content-center">
                        <div className="w-100 rounded d-md-flex flex-column align-items-center justify-content-center py-3 px-5 d-none" style={{ 'backgroundColor': 'black' }}>
                            <h3 className="text-white my-3">Stay Informed</h3>
                            <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                        </div>



                        <div className="w-100 rounded d-flex d-md-none flex-column align-items-center justify-content-center py-3 px-4" style={{ 'backgroundColor': 'black' }}>
                            <h3 className="text-white mb-3 mt-2">Stay Informed</h3>
                            <input placeholder="Email Address" className="w-100 bg-transparent" style={{ 'borderBottom': '1px solid #FFFFFF !important', 'borderLeft': '0px', 'borderRight': '0px', 'borderTop': '0px' }} type="text" />
                        </div>
                    </div>
                </div>



                {/* slider section */}
            </div>

        </>
    );
}

export default Homepage;










{/* <div className="row m-0 p-0 w-100">
                    <div className="col-12 my-5">
                        <h2 className="text-black w-100 text-center">Companies</h2>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center  mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center  mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center  mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="careerbox d-flex justify-content-center align-items-center mx-2">
                                <img src={career} width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 my-5 p-0 w-100">
                    <div className="col-12 my-3">
                        <h2 className="text-black w-100 text-center">Business Verticals</h2>
                    </div>
                    <div className="col-12 px-5 m-0 mb-5">
                        <p className="m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam adipiscing imperdiet in. Dictum mauris cursus magna orci. Eu, et turpis non aliquam nulla in laoreet vulputate ultrices. Ultricies massa pellentesque sodales faucibus sit urna pretium pellentesque sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae maxime provident odio eius placeat sunt repellendus, quis necessitatibus fugiat omnis nesciunt minus. Quam mollitia, ipsum eius blanditiis aliquam nemo reiciendis debitis repudiandae atque quaerat? Dolorem tempore natus neque dolor corrupti, commodi dolores eveniet odio. Consequatur eaque vel exercitationem laborum nostrum, voluptatem recusandae consectetur omnis nihil neque, itaque rem distinctio quam corrupti possimus, mollitia magnam a numquam dolore perspiciatis facilis animi expedita. Tempora magni dignissimos excepturi obcaecati. Velit, incidunt, veniam, fugit harum soluta laborum perferendis pariatur provident recusandae quod dolores! Id, reprehenderit. Veniam dignissimos optio dolore amet quae corrupti quisquam officiis.</p>
                    </div>
                    <div className="col-4">
                        <img src={buisnessone} width="100%" alt="" />
                    </div>
                    <div className="col-4">
                        <img src={buisnessfive} width="100%" alt="" />
                    </div>
                    <div className="col-4">
                        <img src={buisnessone} width="100%" alt="" />
                    </div>
                    <div className="col-4">
                        <img src={buisnessthree} width="100%" alt="" />
                    </div>
                    <div className="col-4">
                        <img src={buisnessfour} width="100%" alt="" />
                    </div>
                    <div className="col-4">
                        <img src={buisnessthree} width="100%" alt="" />
                    </div>
                </div>
                <div className="row mx-0 my-5 p-0 w-100">
                    <div className="col-1"></div>
                    <div className="col-5 mx-2 p-3 d-flex justify-content-center flex-column align-items-center" style={{ 'backgroundColor': '#F69E4C', 'borderRadius': '10px' }}>
                        <h3 className="text-white mt-1 mb-3">Vision</h3>
                        <img className="my-1" src={vision} width="170px" alt="" />
                        <p className="text-white my-1 p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident maiores nulla maxime quisquam at impedit quo veniam nihil doloremque eaque laboriosam enim placeat exercitationem eum, non odio explicabo natus tenetur, rerum temporibus in! Deserunt esse, dolore odit porro consectetur sint a animi placeat, dignissimos minus nihil, quos laboriosam debitis iste.</p>
                    </div>

                    <div className="col-5 mx-2 p-3 d-flex justify-content-center flex-column align-items-center" style={{ 'backgroundColor': '#F69E4C', 'borderRadius': '10px' }}>
                        <h3 className="text-white mt-1 mb-3">Mission</h3>
                        <img className="my-1" src={mission} width="170px" alt="" />
                        <p className="text-white my-1 p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident maiores nulla maxime quisquam at impedit quo veniam nihil doloremque eaque laboriosam enim placeat exercitationem eum, non odio explicabo natus tenetur, rerum temporibus in! Deserunt esse, dolore odit porro consectetur sint a animi placeat, dignissimos minus nihil, quos laboriosam debitis iste.</p>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row mx-0 p-0 w-100 my-5">
                    <div className="col-12 my-3">
                        <h2 className="text-black w-100 text-center">Social Media</h2>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ 'color': '#EA8A32' }}>Twitter</h3>
                        <div style={{ 'width': '75%', 'height': '400px', 'backgroundColor': '#C4C4C4', 'borderRadius': '10px' }}></div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ 'color': '#EA8A32' }}>Facebook</h3>
                        <div style={{ 'width': '75%', 'height': '400px', 'backgroundColor': '#C4C4C4', 'borderRadius': '10px' }}></div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ 'color': '#EA8A32' }}>Instagram</h3>
                        <div style={{ 'width': '75%', 'height': '400px', 'backgroundColor': '#C4C4C4', 'borderRadius': '10px' }}></div>
                    </div>
                </div> */}