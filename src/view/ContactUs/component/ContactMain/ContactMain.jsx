import React from 'react';
import Frame from '../../../../components/Frame/Frame';
import Address from './component/Address/Address';
import Map from './component/Map/Map';
import './ContactMain.scss';

const ContactMain = () => {
  return (
    <div className="contact-main">
      <Frame left={<Address />} right={<Map />}/>
    </div>
  )
}

export default ContactMain