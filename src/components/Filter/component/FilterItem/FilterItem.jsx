import React, { useState } from 'react';
import './FilterItem.scss';

import {ReactComponent as Arrow} from '../../../../images/Candidates/arrow-slim.svg';

const FilterItem = ({title, block}) => {
  const [isBlockOpen, setIsBlockOpen] = useState(false);

  return (
    <div className="filter-item__wrapp">
      <div className="filter-item__content" onClick={() => setIsBlockOpen(prev => !prev)}>
        <p className="filter-item__content-name">{title}</p>
        <div className={`filter-item__content-arrow ${isBlockOpen  ? 'rotate' : ''}`}>
          <Arrow />
        </div>
      </div>
        {
          isBlockOpen && block
        }
      <hr className="filter-item__content-line"/>
    </div>
  )
}

export default FilterItem