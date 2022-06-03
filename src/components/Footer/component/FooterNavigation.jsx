import React from 'react';
import './FooterNavigation.scss';

import {ReactComponent as Logo} from '../../../images/HIRETERRA_logo-footer.svg';
import linkedin from '../../../images/linkedin.svg';
import insta from '../../../images/insta.svg';
import facebook from '../../../images/facebook.svg';
import FooterLinks from './FooterLinks';
 
const FooterNavigation = () => {
  return (
    <div className="footer-nav">
      <div className="footer-nav__content">
        <div className="footer-nav__find">
          <Logo className="footer-nav__logo"/>
            <div className="footer-nav__sites">
              <a href="/" className="footer-nav__site">
                <img src={linkedin} alt="linkedin"/>
              </a>
              <a href="/" className="footer-nav__site">
                <img src={insta} alt="insta" />
              </a>
              <a href="/" className="footer-nav__site">
                <img src={facebook} alt="facebook"/>
              </a>
            </div>
            <span className="footer-nav__copyright">© 2022 Hireterra LLC. All Rights Reserved</span>
          </div>
      
          <div className="footer-nav__location">
            <div className="footer-nav__location-wrapp">
              <h4 className="footer-nav__location-title">Our Address</h4>
              <a href="/" className="footer-nav__contact">100 Meadowcreek Dr. Suite 107<br />Corte Madera, CA 94925</a>
            </div>
            <div className="footer-nav__location-wrapp">
              <h4 className="footer-nav__location-title">Contact Us</h4>
              <div className="footer-nav__contact">
                <a href="tel:+1 (415) 855-5850">+1 (415) 855-5850</a>
                <br />
                <a href="mailto:info@hireterra.com">info@hireterra.com</a>
              </div>
            </div>
          </div>
          <hr className="footer-nav__line"/>
          <div className="footer-nav__links">
            <FooterLinks />
          </div>
      </div>
    </div>
  )
}

export default FooterNavigation