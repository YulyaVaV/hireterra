import React from 'react';
import './PrivacySources.scss';
import PrivacySourcesItem from './PrivacySourcesItem/PrivacySourcesItem';

const PrivacySources = ({title, descr, points}) => {
  return (
    <div className="privacy-sources">
      <p className="privacy-sources__title">{title}</p>
      <p className="privacy-sources__descr">{descr}</p>

      <div className="privacy-sources__wrapp">
        {
          points.map(it => (
            <PrivacySourcesItem {...it}/> 
          ))
        }
      </div>
    </div>
  )
}

export default PrivacySources