import React from 'react';
import classnames from 'classnames';
import './Button.css'

const Button = ({className='', onClick=f=>f}) => {
  const rootClassName = classnames('button', className);
  return(
    <button className={rootClassName} onClick={onClick}/>
  )
}

export default Button;