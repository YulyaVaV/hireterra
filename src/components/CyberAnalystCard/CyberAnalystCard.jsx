import React from 'react';
import './CyberAnalystCard.scss';

import headerCardSymb from '../../images/Recruiters/header-card-symb.svg'

const CyberAnalystCard = () => {
  return (
    <div className="cyber-analyst-card">
      <h4 className="cyber-analyst-card__title">Cybersecurity Analyst</h4>
      <p className="cyber-analyst-card__cities">Remote, New York, Washington, Chicago, Arlington, Rockville</p>
      <p className="cyber-analyst-card__experience">Experience: <b>10 yrs.</b></p>
      <div className="cyber-analyst-card__wrapp">
        <img src={headerCardSymb} alt="" className="cyber-analyst-card__symb"/>
        <div className="cyber-analyst-card__tech">
          <p>Networking</p>
          <p>Scrum</p>
          <p>Strategy</p>
        </div>
      </div>
      <p className="cyber-analyst-card__price">$80,000/y</p>
    </div>
  )
}

export default CyberAnalystCard