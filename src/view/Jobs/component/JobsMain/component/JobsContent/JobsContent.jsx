import React from 'react';
import './JobsContent.scss';

const JobsContent = ({vacancy, data, offer, price, person, name, position, perHour }) => {
  return (
    <div className="jobs-content"> 
      <p className="jobs-content__data">{data}</p>

      <div className="jobs-content__title">
         <p className="candidates-card-title jobs-content__title-vacancy">{vacancy}</p>
         <div className="jobs-content__title-wrapp">
           <span className="jobs-content__title-price">{price}</span>
           <span className="jobs-content__title-legend">
              {
                perHour ? ' or ' : ''
              }
           </span>
           <span className="jobs-content__title-perHour">{perHour}</span>
         </div>
      </div>
     
      <div className="jobs-content__offer">
        <h6>Offer</h6>
        <p className="jobs-content__offer-descr">{offer}</p>
      </div>

      <div className="jobs-content__person">
        <img src={person} alt="person" />
        <div className="jobs-content__person-info">
          <p className="jobs-content__person-name">{name}</p>
          <p className="jobs-content__person-position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default JobsContent