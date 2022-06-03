import React from 'react';
import './Map.scss';

import map from '../../../../../../images/Contact/map.png';

const Map = () => {
  return (
    <div className="map">
      <img src={map} alt="map" className="map__img"/>
    </div>
  )
}

export default Map