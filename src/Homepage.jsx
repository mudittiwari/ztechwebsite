import React from "react";
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
import vision from '../src/assets/vision.png';
import mission from '../src/assets/mission.png';
function Homepage() {
    return (
        <>
            <div id="maindiv" className="container-fluid m-0 p-0 w-100">
                <div className="row w-100 m-0 mt-5 p-0" style={{ 'border': '1px solid #000000' }}>
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
                <div className="row m-0 p-0 w-100">
                    <div className="col-12 my-5">
                        <h2 className="text-black w-100 text-center">Companies</h2>
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company2} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company2} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company2} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company5} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company5} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src={company5} alt="" />
                    </div>
                    <div className="col-12 mt-5 mb-5">
                        <h2 className="text-black w-100 text-center">Coming Soon</h2>
                    </div>
                    <div className="row m-0 p-0" style={{ 'backgroundColor': '#242424' }}>
                        <div className="col-4 d-flex p-5">
                            <img src={comingsoon} width='100%' alt="" />
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, reiciendis! Velit dolor, tempore ab vero, molestias, tenetur magni cupiditate neque debitis totam provident. Necessitatibus molestiae delectus tempora assumenda ducimus optio hic architecto voluptas nulla vel, laudantium omnis dolores a libero nihil nisi fuga impedit aut harum tenetur possimus dolor. Repudiandae recusandae a harum laborum voluptas deleniti distinctio repellendus iure, modi rerum fugiat dicta nesciunt aliquid asperiores nihil! Accusamus, assumenda. Laudantium, vero harum fugiat ab excepturi minus sint cupiditate dolore! Voluptates incidunt quos aspernatur suscipit provident quae minima, repellendus ipsam aperiam laboriosam minus dolorem ullam consequatur! Ut ratione aliquam mollitia libero.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, nec in ornare ante. Vulputate porttitor sit mi lectus. Enim sem.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="row m-0 p-0 w-100">
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
                        <h3 style={{'color':'#EA8A32'}}>Twitter</h3>
                        <div style={{'width':'75%','height':'400px','backgroundColor':'#C4C4C4','borderRadius':'10px'}}></div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{'color':'#EA8A32'}}>Facebook</h3>
                        <div style={{'width':'75%','height':'400px','backgroundColor':'#C4C4C4','borderRadius':'10px'}}></div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{'color':'#EA8A32'}}>Instagram</h3>
                        <div style={{'width':'75%','height':'400px','backgroundColor':'#C4C4C4','borderRadius':'10px'}}></div>
                    </div>
                </div>
                <div className="row mx-0 my-5 w-100 p-0 d-flex justify-content-center">
                    <div className="col-11 mb-5 d-flex justify-content-center">
                        <div className="w-100 rounded d-flex flex-column align-items-center justify-content-center py-3 px-5" style={{'backgroundColor':'black'}}>
                            <h3 className="text-white my-3">Stay Informed</h3>
                            <input placeholder="Email Address" className="w-100 bg-transparent" style={{'borderBottom':'1px solid #FFFFFF !important','borderLeft':'0px','borderRight':'0px','borderTop':'0px'}} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;