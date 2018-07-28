import React, {Component} from 'react';
import './Pointers.css'

class Pointers extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='pointers'>
        <div className='pointers__left'>Соперник</div>
        <div className='pointers__center'>
          <i className='pointers__icon-arr-left'/>
          <i className='pointers__icon-x'/>
          <i className='pointers__icon-arr-right'/>
        </div>
        <div className='pointers__right'>Вы</div>
      </div>
    )
  }
}

export default Pointers;