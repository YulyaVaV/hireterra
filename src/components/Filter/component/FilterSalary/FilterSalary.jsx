import React from 'react';
import './FilterSalary.scss';

const FilterSalary = () => (
  <div className="filter-salary">
    <div className="filter-salary__wrapp">
      <p>From</p>
      <input type="text" className="filter-salary__input"/>
    </div>
    <div className="filter-salary__wrapp">
      <p>To</p>
      <input type="text" className="filter-salary__input"/>
    </div>
  </div>
)

export default FilterSalary