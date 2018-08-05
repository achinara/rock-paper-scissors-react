import React from 'react';
import './Pointers.css'

const Pointers = ({result=''}) => {
  return(
    <div className='pointers'>
      <div className={`${result} pointers__left`}>Соперник</div>
      <div className='pointers__center'>
        <i className={`${result} pointers__icon-arr-left`}/>
        <i className={`${result} pointers__icon-x`}/>
        <i className={`${result} pointers__icon-arr-right`}/>
      </div>
      <div className={`${result} pointers__right`}>Вы</div>
    </div>
  )
};

export {Pointers};