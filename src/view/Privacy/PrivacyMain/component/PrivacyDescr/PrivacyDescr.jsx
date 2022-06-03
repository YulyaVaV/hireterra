import React from 'react';
import './PrivacyDescr.scss';

const PrivacyDescr = ({above, subtitle, email, tel, address}) => {
  return (
    <div className="privacy-descr">
      <p className="privacy-descr__above">{above}</p>
      <p className="privacy-descr__subtitle">{subtitle}</p> 
      <div className="privacy-descr__info">
        <a href={`mailto: ${email}`}>{email}</a>
        <a href={`tel: ${tel}`}>{tel}</a>
        <a href={`${address}`}>{address}</a>
      </div>
    </div>
  )
}

export default PrivacyDescr