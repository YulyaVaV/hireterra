import React from 'react';
import FaqRecruiters from './component/FaqRecruiters/FaqRecruiters';
import Header from './component/Header/Header';
import HowItWorks from './component/HowItWorks/HowItWorks';
import Price from './component/Price/Price';
import RecruitersDirections from './component/RecruitersDirections/RecruitersDirections';
import Specifics from './component/Specifics/Specifics';

const Recruiters = () => {
  return (
    <div>
      <Header />
      <Specifics />
      <RecruitersDirections />
      <HowItWorks />
      <Price />
      <FaqRecruiters />
    </div>
  )
}

export default Recruiters