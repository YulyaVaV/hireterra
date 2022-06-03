import React from 'react';
import OrangeButton from '../../../../../ui/OrangeButton/OrangeButton';
import './Registration.scss';
import {ReactComponent as Eye} from '../../../../../images/SingUp/eye-slashed.svg';

const Registration = () => {
  return (
    <div className="registration">
      <form action="" className="registration__form">
        <div className="registration__input">
          <input type="text" id="email" />   
          <label for="email">Email</label>
        </div>

        <div className="registration__input">
          <input type="password" id="password" />
          <label for="password">Password
            <Eye />     
          </label>
        </div>
      </form>

      <div className="registration__links">
        By continuing, you agree to our
        <a href="/terms">Terms of Use</a> 
          and 
        <a href="/privacy">Privacy Policy.</a>
      </div> 

      <div className="registration__account">
        <div className="registration__account-orange">
          <OrangeButton title="Sing Up"/> 
        </div>
        <div className="registration__account-wrapp">
          <p>Already have an account?</p> 
          <a href="/singin">Sign In</a>  
        </div>
      </div> 
    </div>
  )
}

export default Registration