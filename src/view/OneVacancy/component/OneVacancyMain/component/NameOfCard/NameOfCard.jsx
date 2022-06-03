import React from 'react';
import Symbol from '../../../../../../ui/Symbol/Symbol';
import './NameOfCard.scss';
import OneVacancyHightlights from '../NameOfCard/component/OneVacancyHightlights/OneVacancyHightlights'

const NameOfCard = () => (
  <div className="name-card">
    <div className="name-card__title">
      <h2 className="candidates-card-title name-card__title-name">Cybersecurity Analyst</h2>
      <h3 className="name-card__title-price">$80,000/y</h3>
    </div>
    <div className="name-card__place">
      <p className="name-card__place-cities">Remote, New York, Washington, Chicago, Arlington, Rockville</p>
      <div className="name-card__place-symbol">
        <Symbol/>
        <p className="name-card__place-total">Total in Management: 10+ years</p>
      </div>
    </div>
    <OneVacancyHightlights />
  </div> 
)

export default NameOfCard