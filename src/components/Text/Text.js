import React from 'react';
import classnames from 'classnames';
import './Text.css';

const Text = ({text='', className=''}) => {
  const rootClassName = classnames(className, 'text');
  return <div className={rootClassName}>{text}</div>
}

export default Text;