import React from 'react';
import './EducationList.scss';

const EducationList = ({place, position, period}) => {
  return (
    <div className="education-list">
      <p className="education-list__place">{place}</p>
      <p className="education-list__position">{position}</p>
      <p className="education-list__period">{period}</p>
    </div>
  )
}

export default EducationList