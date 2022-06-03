import React from 'react';
import './HowItWorksBlock.scss';

const HowItWorksBlock = ({img, background, title, subtitle, isAdditionalClass, accept, imgWidth}) => {
  return (
    <div className={`how-works-block ${isAdditionalClass ? 'how-works-block__reverse' : ''}`}>
      <div className="how-works-block__image" style={background}>
        <img src={img} alt="how-it-works" className="how-works-block__img" style={{maxWidth: imgWidth}}/>
      </div>
      <div className="how-works-block__wrapper">
        <p className="how-works-block__title">{title}</p>
        <p className="how-works-block__subtitle">{subtitle}</p>
        <p className="how-works-block__accept">{accept}</p>
      </div>
    </div>
  )
}

export default HowItWorksBlock