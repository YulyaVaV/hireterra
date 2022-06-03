import React from 'react';
import './Graph.scss';
import Card from './component/Card';

import orangeLine from '../../../../images/HomeImg/graph-line-orange.svg';
import whiteLine from '../../../../images/HomeImg/graph-line.png';
import orangeRound from '../../../../images/HomeImg/orange-round.svg';

const Graph = () => {
  return (
    <section className="graph">
      <div className="graph__block">  
        <hr className="graph__line"/>
        <hr className="graph__line"/>
        <hr className="graph__line"/>
        <hr className="graph__line"/>
        <hr className="graph__line"/>
      </div>
      <Card />

      <div className="graph__lines">
        <div className="graph__lines-wrapp">
          <img src={orangeLine} alt="" className="graph__line-orange"/>
          <img src={whiteLine} alt="" className="graph__line-white"/>
        </div>
        <img src={orangeRound} alt="" className="graph__line-round"/>
        <div className="graph__line-round-wrapp">
          <img src={orangeRound} alt="" className="graph__line-round2"/>
          <div className="graph__line-search-line"></div>
        </div>
      </div>

      <div className="graph__positions">
        <div className="graph__positions-wrapp">
          <a href="/" className="graph__positions-item">Developers</a>
          <div className="graph__positions-item">Managers</div>
          <div className="graph__positions-item">Designers</div>
          <div className="graph__positions-item">Non-technical</div>
        </div>

        <div className="graph__positions-line"></div>
      </div>
    </section>
  )
}

export default Graph