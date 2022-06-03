import React from 'react';
import './ButtonWithSymbol.scss';
import {ReactComponent as Symbol} from '../../images/symbol.svg';

const ButtonWithSymbol = ({title}) => {
  return (
    <a href="/" className="button-with-symbol">
      <span>{title}</span>
      <div>
        <Symbol src="symbol"/>
      </div>
    </a>
  )
}

export default ButtonWithSymbol