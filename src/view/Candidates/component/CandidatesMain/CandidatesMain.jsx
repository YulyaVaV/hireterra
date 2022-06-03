import React, { useState } from 'react';
import './CandidatesMain.scss';
import Filter from './component/Filter/Filter';
import VacancyCard from './component/VacancyCard/VacancyCard';

import { vacancyCard } from '../../CandidatesData'
import BlueButton from '../../../../ui/BlueButton/BlueButton';
import PaginationBlock from '../../../../components/PaginationBlock/PaginationBlock';

const CandidatesMain = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="candidates-main">
      <div className="candidates-main__wrapper">
        <div className="candidates-main__blue-button" onClick={() => setIsFilterOpen(prev => !prev)}>
          { 
            isFilterOpen ?
              <BlueButton title="Close Filters"/> 
            : 
              <BlueButton title="Open Filters"/>
          }
        </div>
        <div className={`candidates-main__filter ${isFilterOpen ? '' : 'candidates-main__filter-open'} `}>
          <Filter />
        </div>
      </div>
     
      <div className="candidates-main__content">
        {
          vacancyCard.map(item => (
            <VacancyCard
              {...item}
            />
          ))
        }
        <div className="candidates-main__pagination">
          <PaginationBlock />
        </div>
      </div>
    </div>
  )
}

export default CandidatesMain