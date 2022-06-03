import React from 'react';
import './CardNetwork.scss';

import netIngen from '../../../images/net-ingen.svg';
import tcp from '../../../images/HomeImg/IP.svg';
import bgb from '../../../images/HomeImg/BGB.svg';
import smtp from '../../../images/HomeImg/SMTP.svg';
import dns from '../../../images/HomeImg/DNS.svg';

const CardNetwork = () => {
  return (
    <div className="card-netw">
    <img src={netIngen} alt="card" className="card-netw__img"/>
    <div className="card-netw__block">
      <p className="card-netw__block-title">Network Engineer</p>
      <div className="card-netw__experience">
        <p className="card-netw__experience-experience">Experience:</p>
        <p>4 yrs.</p>
      </div>
      <div className="card-netw__wrapp">
        <img src={tcp} alt="tcp" className="card-netw__wrapp-item1" />
        <img src={smtp} alt="smtp" className="card-netw__wrapp-item2"/>
        <img src={bgb} alt="bgb" className="card-netw__wrapp-item3" />
        <img src={dns} alt="dns" className="card-netw__wrapp-item3" />
      </div>
    </div>
  </div>
  )
}

export default CardNetwork