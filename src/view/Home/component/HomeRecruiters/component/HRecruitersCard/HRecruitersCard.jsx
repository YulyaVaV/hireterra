import React from 'react';
import './HRecruitersCard.scss';

import {ReactComponent as Play} from '../../../../../../images/HomeImg/play.svg';

const HRecruitersCard = ({img, name, company, position}) => {
  return (
    <div className="hrecruiters-card">
      <img src={img} alt="" className="hrecruiters-card__img"/>
      <div className="hrecruiters-card__person">
      <img src={company} alt=""/> 
      <div className="hrecruiters-card__name-wrapp">
        <p className="hrecruiters-card__name">{name}</p>
        <p>{position}</p>
      </div>
     </div>
       <Play className="hrecruiters-card__play"/>
    </div>
  )
}

export default HRecruitersCard