import React from 'react';
import './HomeHeader.scss';

// import directions from "../../../../images/directions.png";
import ButtonWithSymbol from '../../../../ui/ButtonWithSymbol/ButtonWithSymbol';
import BlueButton from '../../../../ui/BlueButton/BlueButton';

import blueGlasses from '../../../../images/HomeImg/blue-glasess.svg';
import orangeGlasses from '../../../../images/HomeImg/orange-glasess.svg';
import DirectionsBlock from './component/DirectionsBlock/DirectionsBlock';

const directions = [
  {
    name: 'Software Developer',
    img: orangeGlasses,
    border: {borderColor: '#F1A145'},

  },
  {
    name: 'Full Stack Developer',
    img: blueGlasses,
    border: {borderColor: '#4498F7'}
  },
  {
    name: 'Data Analyst',
    img: blueGlasses,
    border: {borderColor: '#4498F7'}
  },
  {
    name: 'Cyber Security Engineer',
    img: orangeGlasses,
    border: {borderColor: '#F1A145'}
  },
  {
    name: 'System Administrator',
    img: orangeGlasses,
    border: {borderColor: '#F1A145'}
  },
  {
    name: 'Network Engineer',
    img: blueGlasses,
    border: {borderColor: '#4498F7'}
  },
]

const HomeHeader = () => {
  return (
    <main className="home-header">
      <svg className="home-header__bg" viewBox="0 0 1920 1566" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2538.11 83.986C2527.76 79.6605 2517.41 75.3366 2507.3 71.5961C2505.23 70.7313 2503.16 69.8665 2500.91 69.4176C2493.7 66.8896 2485.9 64.6039 2478.69 62.0792C2446.6 51.5868 2413.57 42.1668 2380.68 34.7468C2211.74 -3.24672 2033.42 -4.80063 1855.32 5.90198C1676.88 17.4333 1497.32 42.1147 1316.1 71.9399C1291.03 76.0582 1265.97 80.1747 1240.73 84.7071C1084.82 111.001 927.516 140.605 768.081 168.344L698.303 180.53C674.826 184.34 653.006 188.842 624.455 191.99L543.05 201.75L459.475 206.225C347.007 208.847 228.476 199.203 109.21 166.882C-8.40446 135.255 -126.581 80.5305 -230.101 4.69676C-229.651 614.76 130.385 1194.13 728.71 1444.11C1274.45 1672.12 1875.78 1566.86 2307.09 1221.32C2486.97 1077.13 2637.06 891.318 2741.11 670.216C2747.99 656.071 2753.87 641.991 2760.34 627.672C2842.08 415.732 2744.21 177.385 2538.11 83.986Z" fill="#F1F3FB"/>
      </svg>
      <div className="container home-header__container">
        <div className="home-header__block">
          <div className="home-header__title-wrapp">
            <h1 className="home-header__block-title">100% anonymous<br />US IT job search platform</h1>
          </div>
          <div className="home-header__buttons">
            <BlueButton title="Find a job"/>
            <ButtonWithSymbol title="For recruiters"/>
          </div>
        </div>
        <div className="home-header__directions">
         {
            directions.map(item => (
              <DirectionsBlock
                {...item}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default HomeHeader