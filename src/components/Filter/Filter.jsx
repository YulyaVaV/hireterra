import React from 'react';
import './Filter.scss';

import FilterItem from './component/FilterItem/FilterItem';
import FilterBlockSkills from './component/FilterBlockSkills/FilterBlockSkills';
import FilterPosition from './component/FilterBlockPosition/FilterBlockPosition';
import FilterSalary from './component/FilterSalary/FilterSalary';
import BlueButtonSmall from '../../ui/BlueButtonSmall/BlueButtonSmall';

const filters = [
  { 
    id: 1,
    title: 'Position',
    block: <FilterPosition />,
  },
  {
    id: 2,
    title: 'Skills',
    block: <FilterBlockSkills />,
  },
  {
    id: 3,
    title: 'Industries',
    block: <FilterPosition />,
  },
  {
    id: 4,
    title: 'Employment options',
    block: <FilterPosition />,
  },
  {
    id: 5,
    title: 'Cities',
    block: <FilterPosition />,
  },
  {
    id: 6,
    title: 'Primary Role',
    block: <FilterPosition />,
  },
  {
    id: 7,
    title: 'Salary range, $/y',
    block: <FilterSalary />,
  },
  {
    id: 8,
    title: 'Hourly rate, $',
    block: <FilterSalary />
  },
]


const Filter = () => {
  
  return (
    <div className="filter">
      <div className="filter__container">
        <h2 className="filter__title">Filters</h2>
        {
          filters.map(item => (
            <FilterItem {...item}/>
          ))
        }
      </div>
      <div className="filter__buttons">
        <BlueButtonSmall title="Search"/> 
        <a href="/" className="filter__buttons-clear">Clear Filters</a>
      </div>
    </div>
  )
}

export default Filter