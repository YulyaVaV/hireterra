import React from 'react';
import './BlueButton.scss';

const BlueButton = ({title}) => {
  return (
    <div className="blue-button">
      <span>{title}</span>
    </div>
  )
}

export default BlueButton