import React from 'react';
import './style.scss';

const Title =  ({ tagName = 'h3', children}) => { 
  const TagName = tagName; 
    return (
      <TagName className="title">
        {children}
      </TagName>
    )
  }

export default Title