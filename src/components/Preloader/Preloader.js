import React, {Component} from 'react';
import './Preloader.css';

class Preloader extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('sss');
  }

  render() {
    return(
      <div className='preloader'>
        <div className='preloader__big'>
          <div className='preloader__small'/>
        </div>
      </div>
    )
  }
}

export default Preloader;