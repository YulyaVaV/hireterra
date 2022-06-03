import React from 'react';
import './SpecificsGivesCard.scss';

const SpecificsGivesCard = ({title, descr, gives, subtitle}) => {
  return (
    <div className="specifics-gives">
      <div className="specifics-gives__main">
        <h4 className="specifics-gives__main-title">{title}</h4>
        <p className="specifics-gives__main-descr">{descr}</p>   
      </div>
      <div className="specifics-gives__transparent">
        <p className="specifics-gives__transparent-title">{gives}</p>
        <p className="specifics-gives__transparent-descr">{subtitle}</p>
      </div>
    </div>
  )
}

export default SpecificsGivesCard