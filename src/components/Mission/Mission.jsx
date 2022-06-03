import React from 'react';
import './Mission.scss';

const Mission = ({img, title, descr}) => {
  return (
    <div className="mission">
      <div>
        <img src={img} alt="symbol" className="mission__img" />
      </div>
      
      <h2 className="mission__title">{title}</h2>
      <p className="mission__descr">{descr}</p>
    </div>
  )
}

export default Mission