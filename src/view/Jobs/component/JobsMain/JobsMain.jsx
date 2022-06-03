import React, { useState } from 'react';
import Filter from '../../../../components/Filter/Filter';
import BlueButton from '../../../../ui/BlueButton/BlueButton';
import { jobsData } from '../../JobsData';
import JobsContent from './component/JobsContent/JobsContent';
import './JobsMain.scss';
import PaginationBlock from '../../../../components/PaginationBlock/PaginationBlock'

const JobsMain = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="jobs-main">
      <div className="jobs-main__wrapper">
        <div className="jobs-main__blue-button" onClick={() => setIsFilterOpen(prev => !prev)}>
          { 
            isFilterOpen ?
              <BlueButton title="Close Filters"/> 
            : 
              <BlueButton title="Open Filters"/>
          }
        </div>
        <div className={`jobs-main__filter ${isFilterOpen ? '' : 'jobs-main__filter-open'} `}>
          <Filter />
        </div>
      </div>
     
      <div className="jobs-main__content">
        {
          jobsData.map(item => (
            <JobsContent
              {...item}
            />
          ))
        }
        <div className="jobs-main__pagination">
          <PaginationBlock />
        </div>
      </div>
    </div>
  )
}

export default JobsMain