import React from 'react';
import github from '../src/assets/github.png';
import twitter from '../src/assets/twitter.png';
import '../src/css/Footer.css';
function Footer()
{
    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center" id="footer">
                <img className='mx-3' src={github} alt="" />
                <img className='mx-3' src={twitter} alt="" />
                <img className='mx-3' src={github} alt="" />
                <img className='mx-3' src={twitter} alt="" />
                <img className='mx-3' src={github} alt="" />
                <img className='mx-3' src={twitter} alt="" />
            </div>
        </>
    );
}
export default Footer;