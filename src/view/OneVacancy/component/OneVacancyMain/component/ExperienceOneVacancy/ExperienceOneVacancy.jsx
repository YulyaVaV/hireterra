import React from 'react';
import ExperienceVacancyBlock from './component/ExperienceVacancyBlock/ExperienceVacancyBlock';
import './ExperienceOneVacancy.scss';

const experienceOneVacancy = [
  {
    position: 'Department Operations',
    period: '11.10.2014 - current time',
    skills: [
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
    ]
  },
  {
    position: 'Lab Technician',
    period: '08.12.2013 - 11.09.2014',
    skills: [
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
    ]
  },
  {
    position: 'Executive Assistant to President / Office Manager',
    period: '08.12.2013 - 11.09.2014',
    skills: [
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
    ]
  }
]

const ExperienceOneVacancy = () => {
  return (
    <div className="experience-one-vacancy">
      <h2 className="candidates-card-title experience-one-vacancy__title">Work experience</h2>
      <div className="experience-one-vacancy__wrapp">
        {
          experienceOneVacancy.map(item => (
            <ExperienceVacancyBlock {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default ExperienceOneVacancy