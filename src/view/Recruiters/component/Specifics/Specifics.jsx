import React from 'react';
import './Specifics.scss';

import CompaniesName from '../../../../components/CompaniesNames/CompaniesNames';
import Symbol from '../../../../ui/Symbol/Symbol';
import Title from '../../../../ui/Title/Title';

import Diversity from '../../../../images/Recruiters/diversity.svg';
import Clock from '../../../../images/Recruiters/clock.svg';

import SpecificsCard from './component/SpecificsCard/SpecificsCard';
import { SpecificsSwiper } from './component/SpecificsSwiper/SpecificsSwiper';

import { companies } from '../../../../constants/constants';

const cards = [ 
  {
    img: Clock,
    title: 'Save your time & energy',
    descr: 'Engage with candidates who are readily looking for a job, instead of blindly sourcing candidates you will never hear back from on LinkedIn or other platforms.',
  },
  {
    img: Diversity,
    title: 'Promote diversity in hiring',
    descr: `You only see candidate's relevant information (skills and experience) until there is mutual interest. This way there is no gender, age, or racial bias in the process.`
  },
]

const gives = [
  {
    title: 'Recruiters get',
    descr: 'More time to focus on filling more positions because the candidates are active and ready to switch jobs.',
    gives: 'Hireterra gives',
    subtitle: 'Access to a constantly growing database with thousands of candidates for a small monthly fee.'
  },
  {
    title: 'Recruiters get',
    descr: 'Freedom to message as many qualified candidates without any hidden extra costs.',
    gives: 'Hireterra gives',
    subtitle: 'Ability for recruiters to send unlimited messages and post an unlimited number of jobs.'
  },
  {
    title: 'Recruiters get',
    descr: <p>To save the average 15-20% commission after paying <b>just 5% of annual salary as a success fee.</b></p>,
    gives: 'Hireterra gives',
    subtitle: 'The first hire is completely free - you get to keep the success fee on the first hire.'
  },
]

const Specifics = () => {
  return (
    <section className="specifics">
      <div className="specifics__content">
        <hr className="specifics__content-line"/>
        <div className="specifics__companies">
          <CompaniesName data={companies} title="Our Clients"/>
        </div>
        <div className="specifics__title">
          <Symbol />
          <Title>On Hireterra candidates post their profiles anonymously. You only see candidates who are ready to be hired.</Title>
        </div>

        <div className="specifics__cards">
        {
          cards.map(item => (
            <SpecificsCard
              img={item.img}
              title={item.title}
              descr={item.descr}
            />
          ))
        }
        </div>
        <div className="specifics__mantra">
          <div className="specifics__mantra-symbol">
            <Symbol />
          </div>
          <Title>Hireterra's business mantra says:</Title>
          <h3 className="specifics__title-bottom">
            <span>“</span>Get more value for doing less<span>”</span>
          </h3>
        </div>
        <SpecificsSwiper 
          gives={gives}
        />
      </div>
    </section>
  )
}

export default Specifics