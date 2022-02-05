import React from 'react';
import github from '../src/assets/github.png';
import twitter from '../src/assets/twitter.png';
import {faFacebookF,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHome} from '@fortawesome/fontawesome-svg-core';
import '../src/css/Footer.css';
function Footer() {
    return (
        <>
            <div id="footer">
                <div class="wrapper">
                    <div class="icon facebook">
                        <div class="tooltip">Facebook</div>
                        <span><FontAwesomeIcon icon={faFacebookF}/></span>
                    </div>
                    <div class="icon twitter">
                        <div class="tooltip">Twitter</div>
                        <span><FontAwesomeIcon icon={faTwitter}/></span>
                    </div>
                    <div class="icon instagram">
                        <div class="tooltip">Instagram</div>
                        <span><FontAwesomeIcon icon={faInstagram}/></span>
                    </div>
                    <div class="icon twitter">
                        <div class="tooltip">Twitter</div>
                        <span><FontAwesomeIcon icon={faTwitter}/></span>
                    </div>
                    <div class="icon instagram">
                        <div class="tooltip">Instagram</div>
                        <span><FontAwesomeIcon icon={faInstagram}/></span>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Footer;