import React from 'react';
import './Frame.scss';

const Frame = ({left, right}) => {
  return (
    <div className="frame">
      <div className="frame__info">
        {left}
      </div>

      <div className="frame__videos">
        {right}
      </div>
    </div>
  )
}

export default Frame