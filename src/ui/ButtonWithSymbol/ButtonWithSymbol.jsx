import React from 'react';
import './ButtonWithSymbol.scss';
import {ReactComponent as Symbol} from '../../images/symbol.svg';

const ButtonWithSymbol = ({title}) => {
  return (
    <div className="button-with-symbol">
      <span>{title}</span>
      <div>
        <Symbol src="symbol"/>
      </div>
    </div>
  )
}

export default ButtonWithSymbol