import React from 'react';
import './Footer.scss';
import OrangeButton from'../../ui/OrangeButton/OrangeButton';
import FooterNavigation from './component/FooterNavigation';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__titles">
          <h3 className="footer__above">Easy way to hire</h3>
          <h2 className="footer__title">Talent</h2>
        </div>
        <div className="footer__about">
          <p className="footer__about-descr">Hireterra is a platform where ready-to-hire tech talent from the US and recruiters meet each other.</p>
          <OrangeButton title="Try it for free"/>
        </div>
      </div>
      <FooterNavigation />
    </div>
  )
}

export default Footer