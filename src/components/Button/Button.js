import React, {Component} from 'react';
import classnames from 'classnames';
import './Button.css'

class Button extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const rootClassName = classnames('button', this.props.className);
    return(
      <button className={rootClassName} onClick={this.props.onClick}/>
    )
  }
}

export default Button;