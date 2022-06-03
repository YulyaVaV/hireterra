import React from 'react';
import './SupportForm.scss';

const SupportForm = () => {
  return (
    <form className="support-form">
      <div class="support-form__item">
        <input type="text" id="email" required />
        <label for="email">Your Email Address</label>
      </div>

      <div class="support-form__item">
        <input type="text" id="name" required />
        <label for="name">Your Name</label>
      </div>

      <div class="support-form__item">
        <input type="text" id="help" required />
        <label for="help">What do you need help with?</label>
      </div>

      <div class="support-form__item">
        <input type="text" id="describe" required />
        <label for="describe">Describe your problem</label>
      </div>
    </form>
  )
}

export default SupportForm