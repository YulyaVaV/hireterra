import React from 'react';
import EducationList from './EducationList/EducationList';
import './EducationOneVacancy.scss';

const educationData = [
  {
    place: 'Yellow Tail Tech!',
    position: 'Red Hat Certified Systems Administration, Linux',
    period: '2021 - 2021'
  },
  {
    place: 'Georgetown University',
    position: 'Master of Science , Cybersecurity RIsk Management',
    period: '2021 - 2022'
  },
  {
    place: 'University of the District of Columbia',
    position: 'Bachelor of Science, Information Technology, Political Science',
    period: '2018 - 2022'
  },
  {
    place: 'Community College of Allegheny County',
    position: 'Associate of Arts, Cybersecurity',
    period: '2018 - 2022'
  },
  {
    place: 'SANS-ICMCP Diversity Cyber Academy',
    position: 'Prep for SEC 401 and SEC 504, Cybersecurity',
    period: '2018 - 2022'
  },
]

const EducationOneVacancy = () => {
  return (
    <div className="education-one-categ">
      <h2 className="education-one-categ__title candidates-card-title">Education</h2>

      <div className="education-one-categ__wrapp">
        {
          educationData.map(item => (
            <EducationList {...item} />
          )) 
        }
      </div>
    </div>
  )
}

export default EducationOneVacancy