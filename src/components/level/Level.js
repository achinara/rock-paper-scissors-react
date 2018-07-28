import React, {Component} from 'react';
import classnames from 'classnames';
import './Level.css';

class Level extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {className} = this.props;
    const rootClassName = classnames('level', className);
    return(
      <div className={rootClassName}/>
    )
  }
}

export default Level;