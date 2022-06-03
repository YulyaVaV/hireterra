import React from 'react';
import './style.scss';
import HomeHeader from './component/HomeHeader/HomeHeader';
import Companies from './component/Companies/Companies';
import Benefits from './component/Benefits/Benefits';
import HomeRecruiters from './component/HomeRecruiters/HomeRecruiters';
import Testimonials from './component/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Companies />
      <Benefits />
      <HomeRecruiters />
      <Testimonials />
    </div>
  )
}

export default Home