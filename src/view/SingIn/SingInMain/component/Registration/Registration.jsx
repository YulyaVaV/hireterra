import React from 'react';
import OrangeButton from '../../../../../ui/OrangeButton/OrangeButton';
import './Registration.scss';

const Registration = () => {
  return (
    <div className="registration">
      <form className="form"> 
        <div class="form__item">
          <input type="text" id="name" required />
          <label for="name">Name</label>
        </div>

        <div class="form__item">
          <input type="password" id="password" required />
          <label for="password">Password</label>
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
          <OrangeButton title="Sing In"/> 
        </div>
      </div> 
    </div>
  )
}

export default Registration