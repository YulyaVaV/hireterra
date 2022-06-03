import React from 'react';
import './OneVacancyCardTitles.scss';
import done from '../../../../../../../../images/Recruiters/done.svg';

const OneVacancyCardTitles = ({title}) => {
  return (
    <div className="one-vacancy-titles">
      <img src={done} alt="done" />
      <p>{title}</p>
    </div>
  )
}

export default OneVacancyCardTitles