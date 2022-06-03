import React from 'react';
import './RolesLine.scss';

const RolesLine = ({title, period, rangeWidth}) => {
  return (
    <div className="roles-line">
      <p className="roles-line__title">{title}</p>
      <div className="roles-line__wrapp">
        <p className="roles-line__period">{period}</p>
        <div className="roles-line__range" style={{maxWidth: rangeWidth}}></div>
      </div>
    </div>
  )
}

export default RolesLine