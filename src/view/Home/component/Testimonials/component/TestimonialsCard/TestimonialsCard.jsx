import React from 'react';
import './TestimonialsCard.scss';

const TestimonialsCard = ({name, position, descr, img}) => {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card__wrapp">
        <img src={img} alt="name" className="testimonials-card__img"/>
        <div className="testimonials-card__person">
          <h4 className="testimonials-card__name">{name}</h4>
          <p className="testimonials-card__position">{position}</p>     
        </div>
      </div>
      <p className="testimonials-card__descr">{descr}</p>
    </div>
  )
}

export default TestimonialsCard