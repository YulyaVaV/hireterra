import React from 'react';
import './BlueButtonSmall.scss';

const BlueButtonSmall = ({title}) => {
  return (
    <div className="blue-button-small">
      <span>{title}</span>
    </div>
  )
}

export default BlueButtonSmall