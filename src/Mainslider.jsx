
import { useEffect, useState } from 'react';
import Draggable from 'gsap/Draggable';
import { TweenMax } from 'gsap/gsap-core';
import { TimelineMax } from 'gsap/gsap-core';
import './css/scss/mainslider.scss';
import $ from 'jquery';
import gsap from 'gsap';
function Mainslider() {
    gsap.registerPlugin(Draggable);
    const [index, changeindex] = useState(0);
    const [item, changeitem] = useState(0);
    // const [opacity,changeopacity]=useState();
    var wheel;
    const [angle,changeangle]=useState(0);


    // useEffect(() => {
    //     // wheel = Draggable.create("#wheel", {
    //     //     type: "rotation",
    //     //     throwProps: true,
    //     //     snap: function (endValue) {
    //     //         return Math.round(endValue / 90) * 90;
    //     //     },
    //     //     onDrag: function () { },
    //     //     onThrowComplete: function () {
    //     //         dragActive()
    //     //     }
    //     // });

    //     // TweenMax.set('#wheel li:not(.active) .details > *', {
    //     //     opacity: 0,
    //     //     y: -10
    //     // });
    //     // $('.next').on('click', nextHandler);
    //     // $('.prev').on('click', prevHandler);
    // }, []);




    // function dragActive() {
    //     var rot = wheel[0].rotation / 360
    //     var decimal = rot % 1;
    //     var sliderLength = $('#wheel li').length;
    //     var tempIndex = Math.round(sliderLength * decimal)
    //     // var index;


    //     if (rot < 0) {
    //         // console.log("mudit tiwari");
    //         changeindex(Math.abs(tempIndex))
    //     } else {
    //         // console.log("MUDIT TIWARI");
    //         changeindex(sliderLength - tempIndex);
    //         // console.log(sliderLength - tempIndex);
    //         // index = 
    //     }
    //     // console.log(index);
    //     if (decimal === 0) {
    //         changeindex(0);
    //     }
    //     // console.log(index);
    //     TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
    //         opacity: 0,
    //         y: -10
    //     }, 0.1)

    //     // $('#wheel li.active').removeClass('active');
    //     // $($('#wheel li')[index]).addClass('active');

    //     TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
    //         opacity: 1,
    //         y: 0
    //     }, 0.1)

    // }

    // // Tween rotation
    // function rotateDraggable(deg, callback) {
    //     var rot = wheel[0].rotation
    //     var tl = new TimelineMax()

    //     tl
    //         .to('#wheel', .5, {
    //             rotation: rot + deg,
    //             onComplete: function () {
    //                 callback()
    //             }
    //         });

    //     wheel[0].rotation = rot + deg
    // }

    // Handlers
    // function nextHandler() {
    //     changeangle(angle+120);
    //     // console.log("mudit tiwari");
    //     // console.log(angle);
    //     // var current = $('#wheel li.active')
    //     // var item = current + 1;
    //     // if (item > $('#wheel li').length) {
    //     //     changeitem(1);
    //     // }
    //     // rotateDraggable(360 / $('#wheel li').length, dragActive);
    // }

    // function prevHandler() {
    //     changeangle(angle-120);
    //     // var current = $('#wheel li.active')
    //     // var item = current - 1
    //     // if (item > 1) {
    //     //     changeitem($('#wheel li').length)
    //     //     // item = $('#wheel li').length
    //     // }
    //     // rotateDraggable(-360 / $('#wheel li').length, dragActive);
    // }



    var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>'






    return (
        <>
            
            <div style={{'position':'relative','bottom':'150px'}}>
                <svg className="svg-mask" width="1200px" height="600px" viewBox="0 0 1200 600">
                    <defs>
                        <clipPath id="quarterMask">
                            <path d="M299.001,26.649L0,325.65c330.267,330.268,865.736,330.268,1196.004,0L897.003,26.649
	C731.868,191.784,464.136,191.784,299.001,26.649z"/>
                        </clipPath>
                    </defs>
                </svg>
                {/* <div className="header"></div> */}
                <div className="content">
                    <ul className="featured-slider" id="wheel" style={{'transform':`rotate(${angle}deg)`,'transition':'1s'}}>
                        <li className="active">
                            <div className="image">
                                <div className="details">
                                    <h1 className="title">Lorem Ipsum</h1>
                                    <hr className="small" />
                                    <h6 className="roles">Videography / Editing</h6>
                                    <a href="#" className="button">View Project</a>
                                </div>
                                <img src="https://unsplash.it/1200/900" alt="" />
                            </div>
                        </li>
                        <li className='active'>
                            <div className="image">
                                <div className="details" style={{'paddingRight':'42px'}}>
                                    <h1 className="title">Lorem Ipsum</h1>
                                    <hr className="small" />
                                    <h6 className="roles">Videography / Editing</h6>
                                    <a href="#" className="button">View Project</a>
                                </div>
                                <img src="https://unsplash.it/1200/901" alt="" />
                            </div>
                        </li>
                        <li className='active'>
                            <div className="image">
                                <div className="details" style={{'paddingRight':'71px'}}>
                                    <h1 className="title">Lorem Ipsum</h1>
                                    <hr className="small" />
                                    <h6 className="roles">Videography / Editing</h6>
                                    <a href="#" className="button">View Project</a>
                                </div>
                                <img src="https://unsplash.it/1200/902" alt="" />
                            </div>
                        </li>
                        <li className='active'>
                            <div className="image">
                                <div className="details mt-4" style={{'paddingRight':'31px'}}>
                                    <h1 className="title">Lorem Ipsum</h1>
                                    <hr className="small" />
                                    <h6 className="roles">Videography / Editing</h6>
                                    <a href="#" className="button">View Project</a>
                                </div>
                                <img src="https://unsplash.it/1200/903" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
            <nav id='navbar_buttons'>
                <a className="prev" onClick={()=>{
                    changeangle(angle-90);
                }}>Prev</a>
                <a className="next" onClick={()=>{
                    changeangle(angle+90);
                }}>Next</a>
            </nav>
        </>
    );
}

export default Mainslider;
