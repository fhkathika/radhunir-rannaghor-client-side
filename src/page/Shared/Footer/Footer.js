import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="w-100 footer footer-position " >
            <div className='d-flex justify-content-around'>
                <div >
                <h3 style={{color:'white'}}>Radhunir Rannaghor</h3>
            <small style={{color:'wheat'}}>online homemade catering service</small>
                </div>
       <div >
        
      <div className='d-flex justify-content-around'>
          
     <div className='footer-icon'> <FontAwesomeIcon  icon={faTwitter} /></div>
       <div className='footer-icon'><FontAwesomeIcon icon={faFacebook}/></div> 
       <div className='footer-icon'>  <FontAwesomeIcon icon={faInstagram}/></div> 
          
      </div>
      <p>copyright@2021 Radhunir Rannaghor</p>
      </div>
        
            </div>
          
           
        </div>
    );
};

export default Footer;