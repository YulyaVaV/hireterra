import React from 'react';
import './WorkBenefit.scss';

const WorkBenefit = ({title, number}) => {
  return (
    <div className="work-benefit">
      <div className="work-benefit__wrapp">
        <span className="work-benefit__number">{number}</span>
        <p className="work-benefit__title">{title}</p>
      </div>
    </div>
  )
}

export default WorkBenefit