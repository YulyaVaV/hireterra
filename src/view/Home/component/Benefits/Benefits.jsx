import React from 'react';
import './Benefits.scss';
import { BenefitsSwiper } from '../Benefits/component/BenefitsSwiper/BenefitsSwiper';

import {ReactComponent as Developers} from '../../../../images/developers.svg';
import {ReactComponent as Managers} from '../../../../images/managers.svg';
import {ReactComponent as Designer} from '../../../../images/designer.svg';
import {ReactComponent as Nontechnical} from '../../../../images/non-technical.svg';

import img from '../../../../images/benefits-img.png';
import symbolWhite from '../../../../images/symbol-white.svg';
import play from '../../../../images/btn-play.svg';
import playBlack from '../../../../images/HomeImg/play-black.svg';
import symbolGradient from '../../../../images/HomeImg/symbol-gradient.svg';
import HowItWorks from './component/HowItWorks/HowItWorks';

const data = [{
  img: <Developers />,
  title: 'Developers',
  sub1: 'Backend',
  sub2: 'Frontend',
  sub3: 'Full Stack',
  sub4: 'Mobile',
  symbol: {}
},
{
  img: <Managers />,
  title: 'Managers',
  sub1: 'Team Leaders',
  sub2: 'Product Managers',
  sub3: 'Project Managers',
  sub4: 'Development Managers',
  symbol: {}
},
{
  img: <Designer />,
  title: 'Designers',
  sub1: 'UX',
  sub2: 'UI',
  sub3: 'Brand',
  sub4: 'Graph',
  sub5: 'Game Design',
  symbol: {}
},
{
  img: <Nontechnical />,
  title: 'Non-technical',
  sub1: 'Help Desk Support',
  sub2: 'System Administration',
  sub3: 'Sales Manager',
  sub4: 'Content Manager',
  symbol: {}
},
]

const Benefits = () => {
  return (
    <section className="benefits">
      <h3 className="benefits__title">Who will benefit most from using Hireterra?</h3> 
      <BenefitsSwiper
        data={data}
      />
      <HowItWorks />
      <div className="benefits__block">
        <img src={img} alt="" className="benefits__img"/>
        <div className="benefits__symbol">
          <img src={symbolWhite} alt="" className="benefits__symbol-white"/>
          <img src={symbolGradient} alt="" className="benefits__symbol-gradient"/>
          <a href="/">
            <img src={play} alt="" className="benefits__play"/>
          </a>
          <a href="/">
            <img src={playBlack} alt="" className="benefits__play-black"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits