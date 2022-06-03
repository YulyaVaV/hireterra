import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <form className="form"> 
      <div class="form__item">
        <input type="text" id="name" required />
        <label for="name">Name</label>
      </div>

      <div class="form__item">
        <input type="text" id="email" required />
        <label for="email">Email</label>
      </div>

      <div class="form__item">
        <input type="text" id="message" required />
        <label for="message">Message</label>
      </div>
    </form>
  )
}

export default Form