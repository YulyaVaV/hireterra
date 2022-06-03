import React from 'react';
import { TestimonialsSwiper } from './component/TestimonialsSwiper/TestimonialsSwiper';
import './Testimonials.scss';

import person1 from '../../../../images/person1.png';
import person2 from '../../../../images/person2.png';

const testimonials = [
  {
    img: person1,
    name: 'Aldo Castillo',
    position: 'Senior Project Manager',
    descr: 'I am a senior project manager whose job got right sized due to the pandemic. Tired of the complex initial setup required by the usual suspects, I used Hireterra for my job search. It didnt take long to find my dream job. Thank vou Hireterra!'
  },
  {
    img: person2,
    name: 'Jessie W',
    position: 'Quality Assurance Manager',
    descr: `In my position I can't afford to be identified, I've put too much effort in building my reputation. I am loyal to my employer but I want a change, want to move on. Still, I can't look for anything openly or I'll get fired. So this really, really looks like a safe place for me to start looking around.`
  },
  {
    img: person1,
    name: 'Aldo Castillo',
    position: 'Senior Project Manager',
    descr: 'I am a senior project manager whose job got right sized due to the pandemic. Tired of the complex initial setup required by the usual suspects, I used Hireterra for my job search. It didnt take long to find my dream job. Thank vou Hireterra!'
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials__title">Testimonials</h3>
      <TestimonialsSwiper
        testimonials={testimonials}
      />
    </section>
  )
}

export default Testimonials