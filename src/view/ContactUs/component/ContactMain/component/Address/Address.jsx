import React from 'react';
import './Address.scss';

const Address = () => {
  return (
    <div className="address">   
      <h3 className="address__title">Head office</h3>
      <p className="address__address">100 Meadowcreek Dr #107 Corte Madera, CA 94925</p>
      <hr className="address__line"/>
      <h4 className="address__caption">Contact details</h4>
      <a href="tel: +1 (415) 855-5850" className="address__phone"><b>Phone:</b> +1 (415) 855-5850</a> <br />
      <a href="maito: info@hireterra.com" className="address__email"><b>Email:</b> info@hireterra.com</a>
  </div>
  )
}

export default Address