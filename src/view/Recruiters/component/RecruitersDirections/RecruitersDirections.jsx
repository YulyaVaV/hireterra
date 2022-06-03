import React from 'react';
import './RecruitersDirections.scss';

import {DirectionsSwiper} from '../../../../components/DirectionsSwiper/DirectionsSwiper'

const RecruitersDirections = () => {
  return (
    <div className="recr-directions">
      
      <h3 className="recr-directions__title">Tech professionals looking for a job</h3>
      <DirectionsSwiper />
    </div>
  )
}

export default RecruitersDirections