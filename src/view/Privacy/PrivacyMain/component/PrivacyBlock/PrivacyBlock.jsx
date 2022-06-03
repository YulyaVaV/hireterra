import React from 'react';
import PrivacyDescr from '../PrivacyDescr/PrivacyDescr';
import './PrivacyBlock.scss';

const PrivacyBlock = ({caption, description}) => {
  return (
    <div className="privacy-block">
      <p className="privacy-block__caption">{caption}</p>
      <div className="privacy-block__wrapp">
        {
          description.map(item => (
            <PrivacyDescr {...item}/>
          ))
        } 
      </div>
    </div>
  )
}

export default PrivacyBlock