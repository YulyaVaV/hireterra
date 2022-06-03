import React from 'react';
import './CompaniesNames.scss';

const Companies = ({title, data}) => {
  return (
    <div className="companies-name">
      <p className="companies-name__title">{title}</p>
        {
          data.map(item => (
            <img src={item.src} alt={item.alt} className="companies-name__img"/>
          ))
        }
    </div>
  )
}

export default Companies