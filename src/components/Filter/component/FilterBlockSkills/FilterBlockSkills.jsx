import React from 'react';
import './FilterBlockSkills.scss';

import {ReactComponent as Plus} from '../../../../images/Candidates/plus.svg';

const skill = [
  {
    title: 'Android',
  },
  {
    title: 'iOS',
  },
  {
    title: 'Scrum',
  },
]

const vacancy = [
  {
    title: 'Python',
  },
  {
    title: 'Wordpress',
  },
  {
    title: 'Networking',
  },
]

const FilterBlockSkills = () => (
    <div className="filter-block-skills">    
      <div className="filter-block-skills__skills">
        {
          skill.map(item => (
            <p className="filter-block-skills__skills-item">{item.title}</p>
          ))
        }
      </div>
      <input type="text" className="filter-block-skills__input"/>
      <div className="filter-block-skills__vacancy">
        {
          vacancy.map(item => (
            <div className="filter-block-skills__vacancy-wrapp">
              <Plus />
              <p className="filter-block-skills__vacancy-item">{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
export default FilterBlockSkills