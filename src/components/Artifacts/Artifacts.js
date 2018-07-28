import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import './Artifacts.css';

class Artifacts extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div className='artifacts'>
          <div className='artifact artifact_rock' tabIndex='1' data-tip='Камень'/>
          <div className='artifact artifact_scissors' tabIndex='1' data-tip='Ножницы'/>
          <div className='artifact artifact_paper' tabIndex='1' data-tip='Бумага'/>
        </div>
        <ReactTooltip place='bottom' type='info' className='artifact__tooltip'/>
      </div>
    )
  }
}

export default Artifacts;