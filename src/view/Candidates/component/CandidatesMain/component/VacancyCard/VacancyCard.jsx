import React from 'react';
import './VacancyCard.scss';

import Symbol from '../../../../../../ui/Symbol/Symbol';
import {ReactComponent as Arrow} from '../../../../../../images/Candidates/arrow-slim.svg';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const VacancyCard = ({vacancy, cities, price, total, experience, education, skills }) => {
  return (
    <div className="vacancy-card">
      <div className="vacancy-card__title">
        <a href="/onevacancy" className="vacancy-card__title-name">{vacancy}</a>
        <h3 className="vacancy-card__title-price">{price}</h3>
      </div>

      <div className="vacancy-card__place">
        <p className="vacancy-card__place-cities">{cities}</p>
        <div className="vacancy-card__place-symbol">
          <Symbol />
          <p className="vacancy-card__place-total">{total}</p>
        </div>
      </div>
      
      <div className="vacancy-card__experience">
        <p className="vacancy-card__experience-title">Work experience</p>
        <div className="vacancy-card__experience-experience">
          {
            experience.map(item => (
              <Experience {...item}/>
            ))
          } 
        </div>
      </div>      
      
      <div className="vacancy-card__skills">
        <p className="vacancy-card__skills-title">Skills</p>
        <div className="vacancy-card__skills-skills">
          <div className="vacancy-card__skills-wrapp">
           {
              skills.map(item => (
                <Skills {...item}/>
              ))
            }  
          </div>
          <div className="vacancy-card__skills-show">
            <p>Show more</p> 
            <Arrow />
          </div>
       </div>
      </div>

      <div className="vacancy-card__education">
        <p className="vacancy-card__education-title">Education</p>
        <div className="vacancy-card__education-education">
          {
            education.map(item => (
              <Education {...item}/>
            ))
          } 
        </div>
      </div>
    </div>
  )
}

export default VacancyCard