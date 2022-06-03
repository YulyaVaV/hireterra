import React from 'react';
import './CardQa.scss';

import qa from '../../../images/HomeImg/qa.svg';
import selenium from '../../../images/HomeImg/selenium.svg';
import cypress from '../../../images/HomeImg/cypress.svg';
import jest from '../../../images/HomeImg/jest.svg';
import unittest from '../../../images/HomeImg/UnitTests.svg';

const CardQa = () => {
  return (
    <div className="card-qa">
    <img src={qa} alt="card" className="card-qa__img"/>
    <div className="card-qa__block">
      <p className="card-qa__block-title">QA</p>
      <div className="card-qa__experience">
        <p className="card__experience-experience">Experience:</p>
        <p>8 yrs.</p>
      </div>
      <div className="card-qa__wrapp">
        <img src={selenium} alt="selenium" className="card-qa__wrapp-item" />
        <img src={jest} alt="jest" className="card-qa__wrapp-item"/>
        <img src={cypress} alt="cypress" className="card-qa__wrapp-item" />
        <img src={unittest} alt="unittest" className="card-qa__wrapp-item4" />
      </div>
    </div>
  </div>
  )
}

export default CardQa