import React from 'react';
import './Price.scss';

import OrangeButton from '../../../../ui/OrangeButton/OrangeButton';
import done from '../../../../images/Recruiters/done.svg';

const Price = () => {
  return (
    <div className="price">
      <h4 className="price__above">Free Trial for 30 days</h4>
      <h3 className="price__title">Perks you get</h3>

      <div className="price__wrapper">
        <div className="price__wrapp">
          <div className="price__benefit">
            <img src={done} alt="done" />
            <h4 className="price__benefit-text">Unlimited job postings</h4>
          </div>
          <div className="price__benefit">
            <img src={done} alt="done" />
            <h4 className="price__benefit-text">Unlimited messages</h4>
          </div>
          <div className="price__benefit">
            <img src={done} alt="done" />
            <h4 className="price__benefit-text">Free consultation</h4>
          </div>
        </div>
        <hr className="price__line"/>
      </div>

      <h4 className="price__plan">Standard Plan</h4>
      <div className="price__plan-wrapp">
        <p>$89/month, paid annually</p> 
        <span>or</span>
        <p>$99/month by month</p> 
      </div>
      <h4 className="price__salary">Success fee: 5% of annual salary</h4>
      <OrangeButton title="Try it for free"/>
    </div>
  )
}

export default Price