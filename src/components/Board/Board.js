import React, {Component} from 'react';
import Level from '../level/Level.js';
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='board'>
        <div className='board__rival'>
          <Level className=''/>
          <Level className=''/>
          <Level className=''/>
          <Level className=''/>
          <Level className=''/>
        </div>
        <div className='board__center'>
          <div className='board__icon-rival'/>
          <div className='board__levels'>
            <Level className=''/>
            <Level className='green'/>
            <Level className='yell'/>
            <Level className='orange'/>
            <Level className='red'/>
          </div>
          <div className='board__icon-user'/>
        </div>
        <div className='board__user'>
          <Level className=''/>
          <Level className=''/>
          <Level className=''/>
          <Level className=''/>
          <Level className='blue'/>
        </div>
      </div>
    )
  }
}

export default Board;