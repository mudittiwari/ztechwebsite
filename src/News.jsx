import React from "react";

function News() {
    return (
        <>
            <div id="maindiv">
            <div className="container-fluid">
                <div className="row m-0 p-0">
                    <div className="col-12 p-0 mx-0 my-3">
                        <div className="w-100" style={{ 'backgroundColor': '#EA8A32', 'height': 'max-content' }}>
                            <div className="row h-100">
                                <div className="col-4 my-3 d-md-flex d-none justify-content-center align-items-center">
                                    <div className="bg-white rounded-3" style={{ 'height': '200px', 'width': '200px' }}>

                                    </div>
                                </div>
                                <div className="col-12 d-flex my-4 d-md-none justify-content-center align-items-center">
                                    <div className="bg-white rounded-3" style={{ 'height': '200px', 'width': '200px' }}>

                                    </div>
                                </div>
                                <div className="col-8 d-md-flex d-none justify-content-center align-items-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="text-white text-capitalize">Title</h4>
                                        </div>
                                        <div className="col-12">
                                            <p className="text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio possimus veniam rem excepturi quasi ad delectus eum iste eaque aliquid, consequatur corporis illo at cum quibusdam suscipit dicta maxime corrupti, tenetur animi! Atque amet voluptatem natus nesciunt maiores, accusantium optio, eveniet aspernatur ut quibusdam consectetur qui quas. Molestias, dolore.
                                            </p>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end">
                                            <h6 className="text-white text-capitalize mx-5">8 Days ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-md-none d-flex justify-content-center align-items-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="text-white text-capitalize text-center">Title</h4>
                                        </div>
                                        <div className="col-12">
                                            <p className="text-white px-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio possimus veniam rem excepturi quasi ad delectus eum iste eaque aliquid, consequatur corporis illo at cum quibusdam suscipit dicta maxime corrupti, tenetur animi! Atque amet voluptatem natus nesciunt maiores, accusantium optio, eveniet aspernatur ut quibusdam consectetur qui quas. Molestias, dolore.
                                            </p>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end">
                                            <h6 className="text-white text-capitalize mx-3">8 Days ago</h6>
                                        </div>
                                    </div>
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
        </>
    );
}
export default News;