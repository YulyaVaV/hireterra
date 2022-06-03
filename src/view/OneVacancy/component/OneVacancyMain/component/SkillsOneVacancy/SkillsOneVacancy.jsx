import React from 'react';
import Skills from '../../../../../Candidates/component/CandidatesMain/component/Skills/Skills';
import './SkillsOneVacancy.scss';

const skillsOneVacancy = [
  {
    title: 'Python'
  },
  {
    title: 'Networking'
  },
  {
    title: 'Strategy'
  },
  {
    title: 'Research'
  },
  {
    title: 'Budget Planning'
  },
  {
    title: 'Python'
  },  
  {
    title: 'Networking'
  },
  {
    title: 'Wordpress'
  },
  {
    title: 'Cloud Technologies'
  },
  {
    title: 'Data Analytics'
  },
  {
    title: 'Customer service'
  },
  {
    title: 'Wordpress'
  },
  {
    title: 'Data Analytics'
  },
  {
    title: 'Training'
  },
  {
    title: 'documentation'
  },
  {
    title: 'leadership'
  },
  {
    title: 'Problem solving'
  },
  {
    title: 'Mac OSX'
  },
  {
    title: 'leadership'
  },
  {
    title: 'Training'
  },
  {
    title: 'Python'
  },
  {
    title: 'Strategy'
  },
  {
    title: 'Budget Planning'
  },
  {
    title: 'Networking'
  },
]

const SkillsOneVacancy = () => {
  return (
    <div className="skills-one-vacancy">
      <h2 className="candidates-card-title">Skills</h2>
      <div className="skills-one-vacancy__wrapp">
        {
          skillsOneVacancy.map(item => (
            <Skills {...item}/>
          ))
        }  
      </div>
    </div>
  )
}

export default SkillsOneVacancy