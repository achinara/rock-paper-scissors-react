import React from 'react';
import './Pointers.css'

const Pointers = ({result=''}) => {
  return(
    <div className='pointers'>
      <div className='pointers__left'>Соперник</div>
      <div className='pointers__center'>
        <i className={`${result === 'loss' && 'blue'} pointers__icon-arr-left`}/>
        <i className={`${result === 'draw' && 'blue'} pointers__icon-x`}/>
        <i className={`${result === 'win' && 'blue'} pointers__icon-arr-right`}/>
      </div>
      <div className='pointers__right'>Вы</div>
    </div>
  )
};

export {Pointers};