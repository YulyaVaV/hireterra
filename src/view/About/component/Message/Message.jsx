import React from 'react';
import './Message.scss';

import OrangeButton from '../../../../ui/OrangeButton/OrangeButton'
import Form from './component/Form/Form';

const Message = () => {
  return (
    <div className="message">
      <div className="message__content">
        <h3 className="message__content-title">Leave a message</h3>
        <h4 className="message__content-subtitle">If you have any questions or suggestios, please submit the form below.</h4>
        <Form />
        <OrangeButton title="Send"/> 
      </div>
    </div>
  )
}

export default Message