import React from 'react';
import './RecruitersVideo.scss';

import playOrange from '../../../../../../images/About/play-orange.svg';
import play from '../../../../../../images/HomeImg/play.svg';
import {ReactComponent as SymbolM} from '../../../../../../images/About/symbol-gradient-m.svg';
import natali from '../../../../../../images/About/natali.png';

const RecruitersVideo = () => (
    <div className="recr-videos">
      <img src={natali} alt="natali" className="recr-videos__img" />    
      <div className="recr-videos__play">
        <img src={playOrange} alt="" className="recr-videos__play-img"/>
        <p className="recr-videos__play-play">Play Video</p>
      </div>
      <div className="recr-videos__play-mob">
        <img src={play} alt="" />
      </div>
      <div className="recr-videos__wrapp">
        <SymbolM />
        <div className="recr-videos__person">
          <h4 className="recr-videos__name">Nataliya Anon</h4>
          <p className="recr-videos__position">Co-founder, Hireterra</p>
        </div>
      </div>
    </div>
  )

export default RecruitersVideo