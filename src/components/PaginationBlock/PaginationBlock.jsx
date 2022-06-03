import React from 'react';
import './PaginationBlock.scss';

import {ReactComponent as Arrow} from '../../images/HomeImg/arrow-white.svg';

const PaginationBlock = () => {
  return (
    <div className="pagination-block">
      <div className="pagination-block__arrow-left">
        <Arrow />
      </div>
        <div className="pagination-block__numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      <div className="pagination-block__arrow-right">
        <Arrow />
      </div>
    </div>
  )
}

export default PaginationBlock