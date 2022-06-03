import React from 'react';
import './HomeRecruiters.scss';
import { Link } from "react-router-dom";

import camila from '../../../../images/HomeImg/camila.png';
import phil from '../../../../images/HomeImg/phil.png';
import svitla from '../../../../images/HomeImg/svitla.svg';
import finrec from '../../../../images/HomeImg/finrec.svg';
import {HRecruitersSwiper} from './component/HRecruitersSwiper/HRecruitersSwiper';
import OrangeButtonSmall from '../../../../ui/OrangeButtonSmall/OrangeButtonSmall';
import Symbol from '../../../../ui/Symbol/Symbol';
import Title from '../../../../ui/Title/Title';

const hrecruiters = [
  {
    img: camila,
    name: 'Camilla English',
    position: 'Head of Operations',
    company: svitla
  },
  {
    img: phil,
    name: 'Phil Hodson',
    position: 'Financial Recruitment',
    company: finrec
  },
  {
    img: phil,
    name: 'Phil Hodson',
    position: 'Financial Recruitment',
    company: finrec
  },
]

const HomeRecruiters = () => {
  return (
    <section className="home-recruiters">
      <div className="home-recruiters__title">
        <Symbol />
        <div className="home-recruiters__title-main">
          <Title>On Hireterra, recruiters save time and money by engaging with candidates who are truly open to new jobs. Candidates avoid recruiting bias by providing anonymized profiles.</Title>
        </div>
        <p className="home-recruiters__title-subtitle">Yes! This is 100% Free for candidates!</p>
      </div>

      <div className="home-recruiters__wrapp">
        <div className="home-recruiters__wrapp-info">
          <p className="home-recruiters__wrapp-legend">From our Recruiters</p>
          <h3 className="home-recruiters__wrapp-title">Hear what the recruiters have to say</h3>
          <p className="home-recruiters__wrapp-subtitle">Keep up to date with <a href="/" className="home-recruiters__wrapp-subtitle-word">Hireterra</a></p>
          <Link to="/singup" className="home-recruiters__wrapp-singup">
            <OrangeButtonSmall title="Sing Up"/>
          </Link>
        </div>
        <div className="home-recruiters__wrapp-videos">
          <HRecruitersSwiper 
            hrecruiters={hrecruiters}
          />
        </div>
      </div>
    </section>

  )
}

export default HomeRecruiters