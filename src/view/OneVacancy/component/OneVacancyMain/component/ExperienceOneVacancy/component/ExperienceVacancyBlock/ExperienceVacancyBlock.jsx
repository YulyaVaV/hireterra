import React from 'react';
import Skills from '../../../../../../../Candidates/component/CandidatesMain/component/Skills/Skills';
import './ExperienceVacancyBlock.scss';
import {ReactComponent as Arrow} from '../../../../../../../../images/Candidates/arrow-slim.svg';

const ExperienceVacancyBlock = ({position, period, skills}) => {
  return (
    <div className="experience-vacancy-block">
      <div className="experience-vacancy-block__title">
        <p className="experience-vacancy-block__position">{position}</p>
        <p className="experience-vacancy-block__period">{period}</p>
      </div>
      <div className="experience-vacancy-block__wrapp">
        <div className="experience-vacancy-block__skills">
          {
            skills.map(item => (
              <Skills {...item}/>
            ))
          }
        </div>
        <div className="experience-vacancy-block__show">
          <p>Show more</p> 
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default ExperienceVacancyBlock