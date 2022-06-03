import React from 'react';
import './DirectionsBlock.scss';

const DirectionsBlock = ({name, img, border}) => {
  return (
    <div className="directions-block" >
      <img src={img} alt="" className="directions-block__img"/>
      <p className="directions-block__name">{name}</p>
    </div>      
  )
}

export default DirectionsBlock