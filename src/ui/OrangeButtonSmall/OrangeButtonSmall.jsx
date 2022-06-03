import React from 'react';
import './OrangeButtonSmall.scss';

const OrangeButtonSmall = ({title}) => {
  return (
    <button href="/" className="orange-button-small">
      <span>{title}</span> 
    </button>
  )
}

export default OrangeButtonSmall