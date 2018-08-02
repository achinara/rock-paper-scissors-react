import React from 'react';
import './Pointers.css'

const Pointers = ({user=0, rival=0, draw=false}) => {
  return(
    <div className='pointers'>
      <div className='pointers__left'>Соперник</div>
      <div className='pointers__center'>
        <i className={`${rival > user ? 'blue' : ''} pointers__icon-arr-left`}/>
        <i className={`${draw ? 'blue' : ''} pointers__icon-x`}/>
        <i className={`${user > rival ? 'blue' : ''} pointers__icon-arr-right`}/>
      </div>
      <div className='pointers__right'>Вы</div>
    </div>
  )
};

export {Pointers};