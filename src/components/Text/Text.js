import React, {Component} from 'react';
import classnames from 'classnames';
import './Text.css';

class Text extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {text, className} = this.props;
    const rootClassName = classnames(className, 'text');
    return(
      <div className={rootClassName}>
        {text}
      </div>
    )
  }
}

export default Text;