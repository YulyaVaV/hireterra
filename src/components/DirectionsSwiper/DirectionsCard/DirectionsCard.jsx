import React from 'react';
import ButtonWithSymbol from '../../../ui/ButtonWithSymbol/ButtonWithSymbol';
import Symbol from '../../../ui/Symbol/Symbol';
import './DirectionsCard.scss';

function DirectionsCard({title, img, sub1, sub2, sub3, sub4, sub5 }) {
  return (
    <div className="directions-card">
      <div className="directions-card__img">{img}</div>
      <p className="directions-card__title">{title}</p>
      <div className="directions-card__wrapp">
        <p>{sub1}</p>
        <p>{sub2}</p>
        <p>{sub3}</p>
        <p>{sub4}</p>
        <p>{sub5}</p>
      </div>
      <div className="directions-card__symbol"> 
        <Symbol />
      </div>
      <div className="directions-card__button">
         <ButtonWithSymbol title="See more"/>
       </div>
    </div>
  )
}
export default DirectionsCard