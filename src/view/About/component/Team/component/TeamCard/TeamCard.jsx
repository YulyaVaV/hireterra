import React from 'react';
import Symbol from '../../../../../../ui/Symbol/Symbol';
import './TeamCard.scss';

const TeamCard = ({img, name, position, bio, onBlockClick, id, isBioOpen}) => {
  
  return (
    <div className="team-card">
      <div className="team-card__wrapp">
        <img src={img} alt="" className="team-card__wrapp-img"/>
        <h2>{name}</h2>
        <p className="team-card__wrapp-position">{position}</p>
        <div className="team-card__wrapp-read-bio" onClick={() => onBlockClick(id)}>
          <Symbol />
          <p>Read bio</p>
        </div>
      </div>

      <div className={`team-card__open ${isBioOpen === id ? '' : 'team-card__close'} `}>
        <div className="team-card__open-wrapp">
          <h2 className="team-card__open-name">{name}</h2>
          <div className="team-card__open-bio" onClick={() => onBlockClick(id)}>
            <Symbol />
            <p>Close</p>
          </div>
        </div>
        <p className="team-card__open-position">{position}</p>
        <p className="team-card__open-info">{bio}</p>
      </div>
    </div>
  )
}

export default TeamCard