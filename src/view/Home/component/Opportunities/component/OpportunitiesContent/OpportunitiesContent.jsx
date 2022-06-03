import React from 'react';
import './OpportunitiesContent.scss';

const OpportunitiesContent = ({title, subtitle}) => {
  return (
    <div className="opportunities-content">
      <h4 className="opportunities-content__title">{title}</h4>
      <p className="opportunities-content__subtitle">{subtitle}</p>
    </div>
  )
}

export default OpportunitiesContent