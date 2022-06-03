import React from 'react';
import WorkBenefit from '../WorkBenefit/WorkBenefit';
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
    <h1 className="how-it-works__caption">How it works</h1>
    <div className="how-it-works__wrapp">
      <div className="how-it-works__card">
        <WorkBenefit
          title='Fill out fields with skills, background, job expectations and desired salary'
          number='01'
        />
      </div>
      <div className="how-it-works__card-img"></div>
      <div className="how-it-works__card">
        <WorkBenefit 
          title='Add a resume and contact information'
          number='02'
        />
      </div>
      <div className="how-it-works__card-img"></div>
      <div className="how-it-works__card">
        <WorkBenefit 
          title='Browse open positions and apply or receive messages from interested recruiters'
          number='03'
        />
      </div>
      <div className="how-it-works__card-img"></div>
      <div className="how-it-works__card">
        <WorkBenefit 
          title='Stay anonymous until you decide to share your contact information with recruiters'
          number='04'
        />
      </div>
    </div>
  </div>
  )
}

export default HowItWorks