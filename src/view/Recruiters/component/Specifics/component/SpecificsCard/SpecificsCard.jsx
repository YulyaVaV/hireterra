import React from 'react';
import './SpecificsCard.scss';

const SpecificsCard = ({img, title, descr}) => {
  return (
    <div className="specifics-card">
      <img src={img} alt="" className="specifics-card__img" />
      <h2 className="specifics-card__title">{title}</h2>
      <p className="specifics-card__descr">{descr}</p>
    </div>
  )
}

export default SpecificsCard