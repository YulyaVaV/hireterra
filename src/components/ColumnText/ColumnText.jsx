import React from 'react';
import './ColumnText.scss';

const ColumnText = ({title, text, descr}) => {
  return (
    <div className="column-text">
      <p className="column-text__text">{text}</p>
      <div className="column-text__line">
        <p className="column-text__line-title">{title}</p>
        <p className="column-text__line-descr">{descr}</p>
      </div>
    </div>
  )
}

export default ColumnText