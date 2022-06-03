import React from 'react';
import './OneVacancyHightlights.scss';

import dolar from '../../../../../../../../images/OneVacancy/dolar.svg';
import location from '../../../../../../../../images/OneVacancy/location.svg';
import diversity from '../../../../../../../../images/OneVacancy/diversity.svg';
import OneVacancyCardTitles from '../OneVacancyCardTitles/OneVacancyCardTitles';

const cardHightlights = [
  {
    img: dolar,
    title: 'Minimum base salary of',
    caption: 'Highlights',
    descr: '$80,000',
  },
  {
    img: diversity,
    title: 'Preferred industries:',
    descr: 'Arts, Computer Software, Cybersecurity, EdTech / E-Learning, Entertainment, Gaming, Healthcare, Telecommunications'
  },
  {
    img: location,
    title: 'Cities:',
    descr: 'New York (NY), Washington (DC), Rockville (MD), Arlington (VA), Chicago (IL)'
  }
];

const titles = [
  {
    title: 'Full-time'
  },
  {
    title: 'Ready to relocate'
  },
  {
    title: 'Internship'
  },
  {
    title: 'Remote only'
  },
  {
    title: 'US work authorization'
  },
]

const OneVacancyHightlights = () => {
  return (
    <div className="one-vacancy-hightl">
     <div className="one-vacancy-hightl__wrapper">
       <h2 className="candidates-card-title">Hightlights</h2>
        {
          cardHightlights.map(item => (
            <div className="one-vacancy-hightlights">
              <div className="one-vacancy-hightlights__wrapp">
                <div className="one-vacancy-hightlights__content">
                  <img src={item.img} alt="" />
                  <p className="one-vacancy-hightlights__content-title">{item.title}</p>
                </div>
                <p className="one-vacancy-hightlights__descr">{item.descr}</p>
              </div>
            </div>
          ))
        } 
     </div>
     
      <div className="one-vacancy-empl">
        <h2 className="candidates-card-title">Employment preferences</h2>
        <div className="one-vacancy-empl__wrapp">
          {
            titles.map(item => (
              <OneVacancyCardTitles
                {...item}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OneVacancyHightlights