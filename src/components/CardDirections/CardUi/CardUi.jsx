import React from 'react';
import './CardUi.scss';

import ui from '../../../images/HomeImg/ui.svg';
import html from '../../../images/HomeImg/html-5.svg';
import css from '../../../images/HomeImg/logos_css-3.svg';
import desig from '../../../images/HomeImg/desig.svg';
import photoshop from '../../../images/HomeImg/photoshop.svg';

const CardUi = () => {
  return (
    <div className="card-ui">
      <img src={ui} alt="card" className="card-ui__img"/>
      <div className="card-ui__block">
        <p className="card-ui__block-title">UI/UX Designer</p>
        <div className="card-ui__experience">
          <p className="card-ui__experience-experience">Experience:</p>
          <p>6 yrs.</p>
        </div>
        <div className="card-ui__wrapp">
          <img src={desig} alt="desig" className="card-ui__wrapp-item" />
          <img src={photoshop} alt="photoshop" className="card-ui__wrapp-item"/>
          <img src={html} alt="html" className="card-ui__wrapp-item" />
          <img src={css} alt="css" className="card-ui__wrapp-item" />
        </div>
      </div>
    </div>
  )
}

export default CardUi