import React from 'react';
import Graph from '../Graph/Graph';
import './Opportunities.scss';
import graphWhole from '../../../../images/HomeImg/graph-whole.png';
import OpportunitiesContent from './component/OpportunitiesContent/OpportunitiesContent';

const opportunities = [
  {
    title: '100% anonymity',
    subtitle: 'Use the platform anytime to communicate with recruiters and get relevant job offers.',
  },
  {
    title: 'Market insights',
    subtitle: 'Stay updated on actual stats on salaries, candidates and hiring rates for positions you like.',
  },
  {
    title: 'Relevant offers only',
    subtitle: 'Receive suitable offers matching your skills and the desired job position. No more spam.',
  },
]

const Opportunities = () => {
  return (
    <section className="opportunities">
      <div className="opportunities__content">
        {
          opportunities.map(item => (
            <OpportunitiesContent
              title={item.title}
              subtitle={item.subtitle}
            />
          ))
        }
      </div>

      <div>
        <div className="opportunities__graph">
          <Graph />
        </div>
        <img src={graphWhole} alt="" className="opportunities__graph-img"/>
      </div>
    </section>
  )
}

export default Opportunities