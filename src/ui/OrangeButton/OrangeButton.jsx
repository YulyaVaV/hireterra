import React from 'react';
import './style.scss';

const OrangeButton = ({title}) => {
  return (
    <a href='/' className="orange-button">
      <span>{title}</span> 
    </a> 
  )
}

export default OrangeButton