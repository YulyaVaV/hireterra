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
      {/* <svg className="sing-up-content__bg" viewBox="0 0 1920 1566" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2538.11 83.986C2527.76 79.6605 2517.41 75.3366 2507.3 71.5961C2505.23 70.7313 2503.16 69.8665 2500.91 69.4176C2493.7 66.8896 2485.9 64.6039 2478.69 62.0792C2446.6 51.5868 2413.57 42.1668 2380.68 34.7468C2211.74 -3.24672 2033.42 -4.80063 1855.32 5.90198C1676.88 17.4333 1497.32 42.1147 1316.1 71.9399C1291.03 76.0582 1265.97 80.1747 1240.73 84.7071C1084.82 111.001 927.516 140.605 768.081 168.344L698.303 180.53C674.826 184.34 653.006 188.842 624.455 191.99L543.05 201.75L459.475 206.225C347.007 208.847 228.476 199.203 109.21 166.882C-8.40446 135.255 -126.581 80.5305 -230.101 4.69676C-229.651 614.76 130.385 1194.13 728.71 1444.11C1274.45 1672.12 1875.78 1566.86 2307.09 1221.32C2486.97 1077.13 2637.06 891.318 2741.11 670.216C2747.99 656.071 2753.87 641.991 2760.34 627.672C2842.08 415.732 2744.21 177.385 2538.11 83.986Z" fill="#F1F3FB"/>
      </svg> */}

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