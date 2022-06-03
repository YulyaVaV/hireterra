import React from 'react';
import './FaqRecruitersBlock.scss';
import {ReactComponent as Arrow} from '../../../../../../images/arrow-down.svg'

const FaqRecruitersBlock = ({title, descr, arrow, isBlockOpen, onBlockClick, id}) => {

  return (
    <div className="faq-recr-block">
      <div className="faq-recr-block__wrapp" onClick={() => onBlockClick(id)}>
        <p className="faq-recr-block__title">{title}</p> 
        {/* <img src={arrow} alt="arrow" className="faq-recr-block__arrow" /> */}
        <Arrow className="faq-recr-block__arrow"/>
      </div>
      <div className={`faq-recr-block__descr ${isBlockOpen === id ? '' : 'faq-recr-block__show'} `}>{descr}</div>
      <hr className="faq-recr-block__line"/>
    </div>
  )
}

export default FaqRecruitersBlock