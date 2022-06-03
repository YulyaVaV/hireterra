import React from 'react';
import './Experience.scss';

const Experience = ({position, workStart, workEnd, workPeriod}) => {
  return (
    <div className="experience">
      <p className="experience__position">{position}: </p>
      <div className="experience__wrapp">
        <p className="experience__start">{workStart}–</p>
        <p className="experience__end">{workEnd} /</p>
      </div>
      <p className="experience__period">{workPeriod}</p>
    </div>
  )
}

export default Experience