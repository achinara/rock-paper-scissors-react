import React from 'react';
import Level from '../level/Level.js';
import './Board.css';

const Board = ({win=[], loss=[], levels=[], signRival='', signUser='', result=''}) => {
  return(
    <div className='board'>
      <div className='board__rival'>
        {loss.map(level => <Level className={level ? level : ''}/>)}
      </div>
      <div className='board__center'>
        <div className={`board__icon-rival ${signRival} ${result}`}/>
        <div className='board__levels'>
          {levels.map(level => <Level className={level ? level : ''}/>)}
        </div>
        <div className={`board__icon-user ${signUser} ${result}`}/>
      </div>
      <div className='board__user'>
        {win.map(level => <Level className={level ? level : ''}/>)}
      </div>
    </div>
  )
}

export {Board};