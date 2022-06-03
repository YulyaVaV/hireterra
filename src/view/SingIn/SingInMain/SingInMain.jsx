import React from 'react';
import './SingInMain.scss'

import {ReactComponent as Done} from '../../../images/Recruiters/done.svg';
import {ReactComponent as Facebook} from '../../../images/SingUp/facebook-fill.svg';
import {ReactComponent as Linkedin} from '../../../images/SingUp/linkedin.svg';
import {ReactComponent as Google} from '../../../images/SingUp/google-outlined.svg';
import Registration from './component/Registration/Registration';

const SingInMain = () => {
  return (
    <div className="sing-in-main">
      <div className="sing-in-main__top">
        <div className="sing-in-main__top-title">
          <h3>Sign In</h3>
          <p>Please choose your role</p>
        </div>
        <div className="sing-in-main__buttons">
          <a href="/" className="sing-in-main__buttons-looking">
            <Done /> 
            <span>I’m looking for job opportunities</span>
          </a>
          <a href="/" className="sing-in-main__buttons-hiring">I'm a hiring manager or recruiter</a>
        </div>
      </div>

      <div className="sing-in-main__bottom">
        <Registration />

        <div className="sing-in-main__sites">
          <div className="sing-in-main__sites-fb">
            <Facebook />
            <a href="/">Sing in with Facebook</a>
          </div>
          <div className="sing-in-main__sites-linkedin">
            <Linkedin />
            <a href="/">Sing in with LinkedIn</a>
          </div>
          <div className="sing-in-main__sites-google">
            <Google />
            <a href="/">Sing in with Google</a> 
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SingInMain