import React from 'react';
import './PrivacySourcesItem.scss';
import item from '../../../../../../images/privacy/item.svg'

const PrivacySourcesItem = ({point}) => {
  return (
    <div className="privacy-item">
      <img src={item} alt="" className="privacy-item__item"/>
      <p className="privacy-item__point">{point}</p>
    </div>
  )
}

export default PrivacySourcesItem