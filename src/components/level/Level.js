import React from 'react';
import classnames from 'classnames';
import './Level.css';

const Level = ({className=''}) => {
  const rootClassName = classnames('level', className);
  return(
    <div className={rootClassName}/>
  )
}

export default Level;