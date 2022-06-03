import React from 'react';
import './SingUpContent.scss';

import {ReactComponent as Done} from '../../../images/Recruiters/done.svg';
import {ReactComponent as Facebook} from '../../../images/SingUp/facebook-fill.svg';
import {ReactComponent as Linkedin} from '../../../images/SingUp/linkedin.svg';
import {ReactComponent as Google} from '../../../images/SingUp/google-outlined.svg';
import Registration from './component/Registration/Registration';

const SingUpContent = () => {
  return (
    <div className="sing-up-content">
      <div className="sing-up-content__top">
        <div className="sing-up-content__top-title">
          <h3>Sign Up</h3>
          <p>Please choose your role</p>
        </div>
        <div className="sing-up-content__buttons">
          <a href="/" className="sing-up-content__buttons-looking">
            <Done /> 
            <span>I’m looking for job opportunities</span>
          </a>
          <a href="/" className="sing-up-content__buttons-hiring">I'm a hiring manager or recruiter</a>
        </div>
      </div>

      <div className="sing-up-content__bottom">
        <Registration />

        <div className="sing-up-content__sites">
          <div className="sing-up-content__sites-fb">
            <Facebook />
            <a href="/">Sing up with Facebook</a>
          </div>
          <div className="sing-up-content__sites-linkedin">
            <Linkedin />
            <a href="/">Sing up with LinkedIn</a>
          </div>
          <div className="sing-up-content__sites-google">
            <Google />
            <a href="/">Sing up with Google</a> 
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SingUpContent