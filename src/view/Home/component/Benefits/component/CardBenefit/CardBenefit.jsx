import React from 'react';
import './CardBenefits.scss';
import {ReactComponent as Symbol} from '../../../../../../images/symbol.svg';
import ButtonWithSymbol from '../../../../../../ui/ButtonWithSymbol/ButtonWithSymbol';

function CardBenefit({title, img, sub1, sub2, sub3, sub4, sub5 }) {
  return (
    <div className="card-benefits">
      <div className="card-benefits__img">{img}</div>
      <p className="card-benefits__title">{title}</p>
      <div className="card-benefits__wrapp">
        <p>{sub1}</p>
        <p>{sub2}</p>
        <p>{sub3}</p>
        <p>{sub4}</p>
        <p>{sub5}</p>
      </div>
      <div className="card-benefits__symbol"> 
        <Symbol />
      </div>
       <div className="card-benefits__button">
         <ButtonWithSymbol title="See more"/>
       </div>
    </div>
  )
}

export default CardBenefit