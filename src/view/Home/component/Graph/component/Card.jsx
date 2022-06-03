import React from 'react';
import './Card.scss';

import netIngen from '../../../../../images/net-ingen.svg';
import software from '../../../../../images/HomeImg/software.svg';
import ui from '../../../../../images/HomeImg/ui.svg';
import qa from '../../../../../images/HomeImg/qa.svg';
import html from '../../../../../images/HomeImg/html-5.svg';
import css from '../../../../../images/HomeImg/logos_css-3.svg';
import selenium from '../../../../../images/HomeImg/selenium.svg';
import cypress from '../../../../../images/HomeImg/cypress.svg';
import java from '../../../../../images/HomeImg/java.svg';
import jest from '../../../../../images/HomeImg/jest.svg';
import desig from '../../../../../images/HomeImg/desig.svg';
import unittest from '../../../../../images/HomeImg/UnitTests.svg';
import photoshop from '../../../../../images/HomeImg/photoshop.svg';
import tcp from '../../../../../images/HomeImg/IP.svg';
import bgb from '../../../../../images/HomeImg/BGB.svg';
import smtp from '../../../../../images/HomeImg/SMTP.svg';
import dns from '../../../../../images/HomeImg/DNS.svg';

import {ReactComponent as Message} from '../../../../../images/HomeImg/message.svg';

const Card = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src={netIngen} alt="card" className="card__img"/>
        <div className="card__block">
          <p className="card__block-title">Network Engineer</p>
          <div className="card__experience">
            <p className="card__experience-experience">Experience:</p>
            <p>4 yrs.</p>
          </div>
          <div className="card__wrapp">
            <img src={tcp} alt="tcp" className="card__wrapp-item1" />
            <img src={smtp} alt="smtp" className="card__wrapp-item2"/>
            <img src={bgb} alt="bgb" className="card__wrapp-item3" />
            <img src={dns} alt="dns" className="card__wrapp-item3" />
          </div>
        </div>
      </div>


      <div className="card card--2">
        <img src={qa} alt="card" className="card--2__img"/>
        <div className="card--2__block">
          <p className="card--2__block-title">QA</p>
          <div className="card--2__experience">
            <p className="card__experience-experience">Experience:</p>
            <p>8 yrs.</p>
          </div>
          <div className="card--2__wrapp">
            <img src={selenium} alt="selenium" className="card--2__wrapp-item" />
            <img src={jest} alt="jest" className="card--2__wrapp-item"/>
            <img src={cypress} alt="cypress" className="card--2__wrapp-item" />
            <img src={unittest} alt="unittest" className="card--2__wrapp-item4" />
          </div>
        </div>
      </div>


      <div className="card card--3">
        <img src={ui} alt="card" className="card--3__img"/>
        <div className="card--3__block">
          <p className="card--3__block-title">UI/UX Designer</p>
          <div className="card--3__experience">
            <p className="card__experience-experience">Experience:</p>
            <p>6 yrs.</p>
          </div>
          <div className="card--3__wrapp">
            <img src={desig} alt="desig" className="card--3__wrapp-item" />
            <img src={photoshop} alt="photoshop" className="card--3__wrapp-item"/>
            <img src={html} alt="html" className="card--3__wrapp-item" />
            <img src={css} alt="css" className="card--3__wrapp-item" />
          </div>
        </div>
      </div>


      <div className="card card--4">
        <img src={software} alt="card" className="card--4__img"/>
        <div className="card--4__block">
          <p className="card--4__block-title">Software Developer</p>
          <div className="card--4__experience">
            <p className="card__experience-experience">Experience:</p>
            <p>5 yrs.</p>
          </div>
          <div className="card--4__wrapp">
            <img src={java} alt="java" className="card--4__wrapp-item" />
            <img src={html} alt="html" className="card--4__wrapp-item"/>
            <img src={css} alt="css" className="card--4__wrapp-item" />
          </div>
        </div>
        <Message className="card--4__message" />
      </div>
    </div>
  )
}

export default Card