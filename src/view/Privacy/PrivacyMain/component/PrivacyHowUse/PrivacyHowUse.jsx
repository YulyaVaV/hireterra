import React from 'react';
import PrivacySourcesItem from '../PrivacySources/PrivacySourcesItem/PrivacySourcesItem';
import './PrivacyHowUse.scss';

const PrivacyHowUse = ({title, descr, points}) => {
  return (
    <div className="privacy-how-use">
      <div className="privacy-how-use__caption">
        <span className="privacy-how-use__caption-title">{title}</span>
        <span className="privacy-how-use__caption-descr">{descr}</span>
      </div>


      <div className="privacy-how-use__wrapp">
        {
          points.map(item => (
            <PrivacySourcesItem {...item}/> 
          ))
        }
      </div>
    </div>
  )
}

export default PrivacyHowUse